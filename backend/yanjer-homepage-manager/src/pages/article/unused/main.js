        const { ipcRenderer } = require('electron');
        const fs = require('fs');
        const path = require('path');

        // 消息提示系统
        class ToastManager {
            constructor(containerId) {
                this.container = document.getElementById(containerId);
            }

            show(message, type = 'info', duration = 3000) {
                const toast = document.createElement('div');
                toast.className = `toast ${type}`;
                toast.textContent = message;
                
                this.container.appendChild(toast);
                
                setTimeout(() => {
                    toast.classList.add('show');
                }, 10);
                
                setTimeout(() => {
                    toast.classList.remove('show');
                    setTimeout(() => {
                        if (toast.parentNode) {
                            toast.parentNode.removeChild(toast);
                        }
                    }, 300);
                }, duration);
            }

            success(message, duration) {
                this.show(message, 'success', duration);
            }

            error(message, duration) {
                this.show(message, 'error', duration);
            }

            info(message, duration) {
                this.show(message, 'info', duration);
            }

            warning(message, duration) {
                this.show(message, 'warning', duration);
            }
        }

        const toast = new ToastManager('toastContainer');

        // 数据总览功能
        class ArticleDashboard {
            constructor() {
                this.articles = [];
                this.categories = {};
                this.tags = {};
                this.init();
            }

            async init() {
                try {
                    await this.loadData();
                    this.renderDashboard();
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('content').style.display = 'block';
                    toast.success('数据加载完成！');
                } catch (error) {
                    console.error('初始化失败:', error);
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('error').style.display = 'block';
                    toast.error('数据加载失败');
                }
            }

            async loadData() {
                try {
                    // 读取 JSON 文件
                    const jsonPath = path.join(__dirname, '../../../../../assets/data/articles.json');
                    const data = await fs.promises.readFile(jsonPath, 'utf8');
                    const jsonData = JSON.parse(data);
                    this.articles = jsonData.article || [];
                    
                    // 分析数据
                    this.analyzeData();
                } catch (error) {
                    throw new Error(`读取数据失败: ${error.message}`);
                }
            }

            analyzeData() {
                this.categories = {};
                this.tags = {};
                
                this.articles.forEach(article => {
                    // 统计分类
                    const category = article.category || '未分类';
                    this.categories[category] = (this.categories[category] || 0) + 1;
                    
                    // 统计标签
                    if (article.tags && Array.isArray(article.tags)) {
                        article.tags.forEach(tag => {
                            this.tags[tag] = (this.tags[tag] || 0) + 1;
                        });
                    }
                });
            }

            renderDashboard() {
                // 渲染总数
                document.getElementById('totalArticles').textContent = this.articles.length;
                
                // 渲染最近更新日期
                const latestDate = this.getLatestDate();
                document.getElementById('latestDate').textContent = latestDate;
                
                // 渲染本月更新次数
                const monthlyUpdates = this.getMonthlyUpdates();
                document.getElementById('updateCount').textContent = monthlyUpdates;
                
                // 渲染分类
                this.renderCategories();
                
                // 渲染标签云
                this.renderTags();
            }

            getLatestDate() {
                if (this.articles.length === 0) return '--';
                
                const dates = this.articles
                    .map(article => article.date)
                    .filter(date => date)
                    .sort((a, b) => new Date(b) - new Date(a));
                
                return dates.length > 0 ? dates[0] : '--';
            }

            getMonthlyUpdates() {
                const currentMonth = new Date().getMonth();
                const currentYear = new Date().getFullYear();
                
                return this.articles.filter(article => {
                    if (!article.date) return false;
                    const articleDate = new Date(article.date);
                    return articleDate.getMonth() === currentMonth && 
                           articleDate.getFullYear() === currentYear;
                }).length;
            }

            renderCategories() {
                const categoriesGrid = document.getElementById('categoriesGrid');
                categoriesGrid.innerHTML = '';
                
                const sortedCategories = Object.entries(this.categories)
                    .sort(([,a], [,b]) => b - a);
                
                sortedCategories.forEach(([category, count]) => {
                    const categoryItem = document.createElement('div');
                    categoryItem.className = 'category-item';
                    categoryItem.innerHTML = `
                        <span class="category-name">${category}</span>
                        <span class="category-count">${count}</span>
                    `;
                    categoriesGrid.appendChild(categoryItem);
                });
            }

            renderTags() {
                const tagsCloud = document.getElementById('tagsCloud');
                tagsCloud.innerHTML = '';
                
                const sortedTags = Object.entries(this.tags)
                    .sort(([,a], [,b]) => b - a);
                
                sortedTags.forEach(([tag, count]) => {
                    const tagItem = document.createElement('span');
                    tagItem.className = 'tag-item';
                    tagItem.textContent = `${tag} (${count})`;
                    tagItem.title = `${tag}: ${count} 篇文章`;
                    tagsCloud.appendChild(tagItem);
                });
            }
        }

        // 转换功能
        async function convertJsonToJs() {
            const updateBtn = document.getElementById('updateBtn');
            
            try {
                updateBtn.disabled = true;
                toast.info('开始转换数据...');
                
                const result = await ipcRenderer.invoke('convert-json-to-js');
                
                if (result.success) {
                    toast.success(`转换成功！共处理 ${result.articleCount} 篇文章`);
                    toast.info(`生成文件大小: ${result.fileSize} KB`);
                    
                    // 重新加载数据
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                } else {
                    toast.error(`转换失败: ${result.message}`);
                }
                
            } catch (error) {
                console.error('转换过程出错:', error);
                toast.error(`转换过程出错: ${error.message}`);
            } finally {
                updateBtn.disabled = false;
            }
        }

        // 页面加载完成后初始化
        window.addEventListener('load', () => {
            toast.info('正在加载文章数据...');
            new ArticleDashboard();
        });

        // 绑定按钮事件
        document.getElementById('updateBtn').addEventListener('click', convertJsonToJs);
        document.getElementById('pushBtn').addEventListener('click', () => {
            toast.warning('推送功能开发中...');
        });

        // 监听主进程发送的进度消息
        ipcRenderer.on('conversion-progress', (event, data) => {
            switch (data.type) {
                case 'success':
                    toast.success(data.message);
                    break;
                case 'error':
                    toast.error(data.message);
                    break;
                case 'warning':
                    toast.warning(data.message);
                    break;
                case 'info':
                default:
                    toast.info(data.message);
                    break;
            }
        });
