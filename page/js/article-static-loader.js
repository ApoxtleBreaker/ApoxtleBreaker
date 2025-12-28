// 静态文章加载器 - 无需fetch，直接使用预加载数据
class StaticArticleLoader {
    constructor(options = {}) {
        this.config = {
            articlesPerLoad: options.articlesPerLoad || 3,
            scrollThreshold: options.scrollThreshold || 100,
            containerSelector: options.containerSelector || '#articleList',
            loadMoreBtnSelector: options.loadMoreBtnSelector || '#loadMoreBtn',
            backToTopSelector: options.backToTopSelector || '#backToTop',
            ...options
        };

        // 状态变量
        this.articles = [];
        this.displayedArticles = 0;
        this.isLoading = false;
        this.hasMore = true;
        this.currentFilter = 'all';
        this.searchKeyword = '';

        // 直接使用预加载的数据
        if (typeof articleData !== 'undefined') {
            this.articles = articleData.article || [];
            console.log(`静态数据已加载: ${this.articles.length} 篇文章`);
        } else {
            console.warn('未找到静态数据，使用空数组');
            this.articles = [];
        }

        this.init();
    }

    init() {
        try {
            this.bindEvents();
            this.renderInitialArticles();
        } catch (error) {
            console.error('初始化失败:', error);
            this.showError('文章加载失败');
        }
    }

    bindEvents() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        
        const loadMoreBtn = document.querySelector(this.config.loadMoreBtnSelector);
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', this.loadMoreArticles.bind(this));
        }

        const backToTop = document.querySelector(this.config.backToTopSelector);
        if (backToTop) {
            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // 绑定筛选和搜索事件
        this.bindFilterEvents();
        this.bindSearchEvents();
        this.bindModalEvents();

        // 绑定筛选面板和搜索面板的显示/隐藏
        this.bindPanelEvents();
    }

    // 绑定面板显示/隐藏事件
    bindPanelEvents() {
        const filterBtn = document.getElementById('filterBtn');
        const searchBtn = document.getElementById('searchBtn');
        const filterPanel = document.getElementById('filterPanel');
        const searchPanel = document.getElementById('searchPanel');

        if (filterBtn && filterPanel) {
            filterBtn.addEventListener('click', () => {
                filterPanel.classList.toggle('active');
                searchPanel?.classList.remove('active');
            });
        }

        if (searchBtn && searchPanel) {
            searchBtn.addEventListener('click', () => {
                searchPanel.classList.toggle('active');
                filterPanel?.classList.remove('active');
            });
        }
    }

    bindModalEvents() {
        const modal = document.getElementById('articleModal');
        const modalClose = document.getElementById('modalClose');
        
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                this.closeArticleModal();
            });
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeArticleModal();
                }
            });
        }

        // 分享和点赞按钮
        const shareBtn = document.getElementById('shareBtn');
        const likeBtn = document.getElementById('likeBtn');
        
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                this.handleShare();
            });
        }

        if (likeBtn) {
            likeBtn.addEventListener('click', () => {
                this.handleLike();
            });
        }
    }

    closeArticleModal() {
        const modal = document.getElementById('articleModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        const backToTop = document.querySelector(this.config.backToTopSelector);
        if (backToTop) {
            if (scrollTop > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
        
        const scrollBottom = documentHeight - (scrollTop + windowHeight);
        if (scrollBottom < this.config.scrollThreshold && !this.isLoading && this.hasMore) {
            this.loadMoreArticles();
        }
    }

    bindFilterEvents() {
        const filterTags = document.querySelectorAll('.filter-tag');
        filterTags.forEach(tag => {
            tag.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.filterByCategory(category);
            });
        });
    }

    bindSearchEvents() {
        const searchInput = document.getElementById('searchInput');
        const searchSubmit = document.getElementById('searchSubmit');
        
        if (searchSubmit) {
            searchSubmit.addEventListener('click', this.handleSearch.bind(this));
        }
        
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleSearch();
                }
            });

            // 实时搜索（可选）
            searchInput.addEventListener('input', (e) => {
                if (e.target.value === '') {
                    this.handleSearch();
                }
            });
        }
    }

    renderInitialArticles() {
        this.displayedArticles = 0;
        this.hasMore = true;
        this.renderArticles();
    }

    async loadMoreArticles() {
        if (this.isLoading || !this.hasMore) return;
        
        this.setLoadingState(true);
        
        try {
            // 模拟加载延迟
            await new Promise(resolve => setTimeout(resolve, 300));
            
            const filteredArticles = this.getFilteredArticles();
            const remainingArticles = filteredArticles.slice(this.displayedArticles);
            const articlesToLoad = remainingArticles.slice(0, this.config.articlesPerLoad);
            
            if (articlesToLoad.length === 0) {
                this.hasMore = false;
                this.updateLoadMoreButton();
                return;
            }
            
            this.renderArticleItems(articlesToLoad);
            this.displayedArticles += articlesToLoad.length;
            
            if (this.displayedArticles >= filteredArticles.length) {
                this.hasMore = false;
            }
            
            this.updateLoadMoreButton();
            
        } catch (error) {
            console.error('加载更多文章失败:', error);
            this.showError('加载失败，请重试');
        } finally {
            this.setLoadingState(false);
        }
    }

    getFilteredArticles() {
        let filtered = [...this.articles];
        
        // 分类筛选
        if (this.currentFilter !== 'all') {
            filtered = filtered.filter(article => article.category === this.currentFilter);
        }
        
        // 搜索筛选
        if (this.searchKeyword.trim()) {
            const keyword = this.searchKeyword.toLowerCase().trim();
            filtered = filtered.filter(article => 
                article.title.toLowerCase().includes(keyword) ||
                article.content.toLowerCase().includes(keyword) ||
                (article.excerpt && article.excerpt.toLowerCase().includes(keyword))
            );
        }
        
        return filtered;
    }

    filterByCategory(category) {
        this.currentFilter = category;
        
        // 更新UI状态
        document.querySelectorAll('.filter-tag').forEach(tag => {
            tag.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`)?.classList.add('active');
        
        // 关闭筛选面板
        const filterPanel = document.getElementById('filterPanel');
        if (filterPanel) {
            filterPanel.classList.remove('active');
        }
        
        this.resetAndRender();
    }

    handleSearch() {
        const searchInput = document.getElementById('searchInput');
        this.searchKeyword = searchInput ? searchInput.value : '';
        
        // 关闭搜索面板
        const searchPanel = document.getElementById('searchPanel');
        if (searchPanel) {
            searchPanel.classList.remove('active');
        }
        
        this.resetAndRender();
    }

    resetAndRender() {
        this.displayedArticles = 0;
        this.hasMore = true;
        const container = document.querySelector(this.config.containerSelector);
        if (container) {
            container.innerHTML = '';
        }
        this.renderArticles();
    }

    renderArticles() {
        const filteredArticles = this.getFilteredArticles();
        const articlesToShow = filteredArticles.slice(0, this.displayedArticles + this.config.articlesPerLoad);
        
        if (this.displayedArticles === 0) {
            // 初次渲染
            this.renderArticleItems(articlesToShow);
            this.displayedArticles = articlesToShow.length;
        }
        
        // 检查是否还有更多
        this.hasMore = this.displayedArticles < filteredArticles.length;
        this.updateLoadMoreButton();
    }

    renderArticleItems(articles) {
        const container = document.querySelector(this.config.containerSelector);
        if (!container) return;
        
        articles.forEach(article => {
            const articleElement = this.createArticleElement(article);
            container.appendChild(articleElement);
        });
    }

    createArticleElement(article) {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article-item';
        articleDiv.classList.add(`white`);
        articleDiv.classList.add(`blur2`);
        articleDiv.innerHTML = `
            <div class="article-header">
                <div>
                    <h3 class="article-title">${article.title}</h3>
                    <div class="article-date">${article.date}</div>
                </div>
            </div>
            <div class="article-excerpt">${this.getExcerpt(article)}</div>
            <div class="article-meta">
                <span class="article-category">${this.getCategoryName(article.category)}</span>
                <div class="article-stats">
                    <span class="stat-item">👁 ${article.views || 0}</span>
                    <span class="stat-item">❤️ ${article.likes || 0}</span>
                    <span class="stat-item">💬 ${article.comments || 0}</span>
                </div>
            </div>
        `;
        
        articleDiv.addEventListener('click', () => {
            this.openArticleModal(article);
        });
        
        return articleDiv;
    }

    getExcerpt(article) {
        if (article.excerpt) {
            return article.excerpt;
        }
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = article.content;
        const textContent = tempDiv.textContent || tempDiv.innerText || '';
        
        const cleanText = textContent.replace(/<[^>]*>/g, '').trim();
        return cleanText.length > 150 ? cleanText.substring(0, 150) + '...' : cleanText;
    }

    getCategoryName(category) {
        // 分类名称映射
        const categoryNames = {
            '日常': '日常',
            '技术': '技术',
            '生活': '生活',
            '脑洞': '脑洞',
            '游戏': '游戏',
            '其他': '其他'
        };
        return categoryNames[category] || categoryNames.default;
    }

    openArticleModal(article) {
        const modal = document.getElementById('articleModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalMeta = document.getElementById('modalMeta');
        const modalBody = document.getElementById('modalBody');
        
        if (!modal || !modalTitle || !modalMeta || !modalBody) return;
        
        modalTitle.textContent = article.title;
        modalMeta.innerHTML = `
            <span>📅 ${article.date}</span>
            <span>🏷️ ${this.getCategoryName(article.category)}</span>
            <span>👁 ${article.views || 0} 浏览</span>
            <span>❤️ ${article.likes || 0} 点赞</span>
            <span>💬 ${article.comments || 0} 评论</span>
        `;
        
        // 🔥 修复：显示完整内容，而不是省略版本
        modalBody.innerHTML = article.content;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // 增加浏览数
        article.views = (article.views || 0) + 1;
        
        // 更新当前文章状态
        this.currentArticle = article;
    }

    // 分享功能
    handleShare() {
        if (this.currentArticle) {
            if (navigator.share) {
                navigator.share({
                    title: this.currentArticle.title,
                    text: this.currentArticle.excerpt || this.getExcerpt(this.currentArticle),
                    url: window.location.href
                });
            } else {
                // 复制链接到剪贴板
                navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('链接已复制到剪贴板！');
                });
            }
        }
    }

    // 点赞功能
    handleLike() {
        if (this.currentArticle) {
            this.currentArticle.likes = (this.currentArticle.likes || 0) + 1;
            
            // 更新模态框中的点赞数
            const modalMeta = document.getElementById('modalMeta');
            if (modalMeta) {
                modalMeta.innerHTML = `
                    <span>📅 ${this.currentArticle.date}</span>
                    <span>🏷️ ${this.getCategoryName(this.currentArticle.category)}</span>
                    <span>👁 ${this.currentArticle.views || 0} 浏览</span>
                    <span>❤️ ${this.currentArticle.likes || 0} 点赞</span>
                    <span>💬 ${this.currentArticle.comments || 0} 评论</span>
                `;
            }
            
            // 显示点赞动画
            const likeBtn = document.getElementById('likeBtn');
            if (likeBtn) {
                likeBtn.innerHTML = '❤️ 已点赞';
                likeBtn.style.background = '#e74c3c';
                setTimeout(() => {
                    likeBtn.innerHTML = '❤️ 点赞';
                    likeBtn.style.background = '';
                }, 1500);
            }
        }
    }

    setLoadingState(loading) {
        this.isLoading = loading;
        const loadMoreBtn = document.querySelector(this.config.loadMoreBtnSelector);
        
        if (loadMoreBtn) {
            if (loading) {
                loadMoreBtn.innerHTML = '<span class="loading"></span> 加载中...';
                loadMoreBtn.disabled = true;
            } else {
                loadMoreBtn.disabled = false;
                this.updateLoadMoreButton();
            }
        }
    }

    updateLoadMoreButton() {
        const loadMoreBtn = document.querySelector(this.config.loadMoreBtnSelector);
        if (!loadMoreBtn) return;
        
        const filteredArticles = this.getFilteredArticles();
        
        if (!this.hasMore || this.displayedArticles >= filteredArticles.length) {
            loadMoreBtn.innerHTML = '没有更多文章了';
            loadMoreBtn.disabled = true;
        } else {
            loadMoreBtn.innerHTML = '加载更多';
            loadMoreBtn.disabled = false;
        }
    }

    showError(message) {
        const container = document.querySelector(this.config.containerSelector);
        if (container) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #e74c3c;">
                    <p style="font-size: 1.2rem; margin-bottom: 10px;">😔 ${message}</p>
                </div>
            `;
            container.appendChild(errorDiv);
        }
    }
}

// 页面加载完成后自动初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('初始化静态文章加载器...');
    window.articleLoader = new StaticArticleLoader({
        articlesPerLoad: 3,
        scrollThreshold: 150
    });
});

document.getElementById('likeBtn')?.addEventListener('click', () => {
    alert('静态网页就别想有点赞功能了\n数据都是自己写的');
    handleLike();   
});