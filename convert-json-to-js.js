const fs = require('fs');
const path = require('path');

// 配置路径
const inputPath = 'assets/data/articles.json';
const outputPath = 'page/js/article-data.js';

console.log('开始转换JSON到JS文件...');
console.log(`输入文件: ${inputPath}`);
console.log(`输出文件: ${outputPath}`);

try {
    // 读取JSON文件
    const jsonContent = fs.readFileSync(inputPath, 'utf8');
    const jsonData = JSON.parse(jsonContent);
    
    // 生成JavaScript文件内容
    const jsContent = `// 文章数据 - 由convert-json-to-js.js自动生成
// 生成时间: ${new Date().toLocaleString()}

const articleData = ${JSON.stringify(jsonData, null, 4)};

    // 立即可用的数据访问函数
    function getArticles() {
        return articleData.article;
    }

    function getArticleById(id) {
        return articleData.article.find(article => article.id === id);
    }

    function getArticlesByCategory(category) {
        return articleData.article.filter(article => article.category === category);
    articleData.article.filter(article => article.category === category);
}`;

    // 确保输出目录存在
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log(`创建目录: ${outputDir}`);
    }

    // 写入JavaScript文件
    fs.writeFileSync(outputPath, jsContent, 'utf8');
    
    // 另外：将最新三篇文章插入到 index.html 的文章展示区
    try {
        const indexPath = 'index.html';
        if (fs.existsSync(indexPath)) {
            const indexContent = fs.readFileSync(indexPath, 'utf8');

            // 找到 article-section 段的起止位置
            const sectionStartToken = '<section class="article-section">';
            const startIdx = indexContent.indexOf(sectionStartToken);

            if (startIdx !== -1) {
                // 从 startIdx 向后找到对应的第一个 </section>
                const afterStart = indexContent.indexOf('</section>', startIdx);
                const endIdx = afterStart !== -1 ? afterStart + '</section>'.length : -1;

                // 生成最新三篇文章的 HTML（保留和原来相同的结构）
                const articles = (jsonData.article || []).slice().sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                }).slice(0, 3);

                const articlesHtml = articles.map(article => {
                    const img = article.image || './assets/img/head.jpg';//暂未处理好图片路径
                    const title = article.title || '未命名文章';
                    const excerpt = article.excerpt || (article.content ? article.content.slice(0, 60) + '...' : '');
                    const date = article.date || '';
                    const tag = article.category || '';

                    return `            <article class="article-card">
                <div class="article-image">
                    <img src="${img}" alt="文章配图">
                </div>
                <div class="article-content">
                    <h3 class="article-title">${title}</h3>
                    <p class="article-excerpt">${excerpt}</p>
                    <div class="article-meta">
                        <span class="article-date">${date}</span>
                        <span class="article-tag">${tag}</span>
                    </div>
                </div>
            </article>`;
                }).join('\n\n');

                const newSection = `    <section class="article-section">
        <h2 class="section-title">最新文章</h2>
        <div class="article-grid">
${articlesHtml}
        </div>
    </section>`;

                let newIndexContent;
                if (endIdx !== -1) {
                    newIndexContent = indexContent.slice(0, startIdx) + newSection + indexContent.slice(endIdx);
                } else {
                    // 如果没有找到结尾，则只替换从起始到起始+len的位置，追加新节
                    newIndexContent = indexContent.slice(0, startIdx) + newSection + indexContent.slice(startIdx);
                }

                fs.writeFileSync(indexPath, newIndexContent, 'utf8');
                console.log(`✅ 已更新 ${indexPath}，插入最新 ${articles.length} 篇文章`);
            } else {
                console.log('⚠️ 未找到 <section class="article-section">，未修改 index.html');
            }
        } else {
            console.log('⚠️ index.html 不存在，跳过更新');
        }
    } catch (err) {
        console.error('❌ 更新 index.html 失败:', err.message);
    }

    console.log('✅ 转换成功！');
    console.log(`📄 生成了 ${outputPath} 文件`);
    console.log(`📊 包含 ${jsonData.article ? jsonData.article.length : 0} 篇文章`);
    
    // 显示文件大小
    const stats = fs.statSync(outputPath);
    console.log(`📏 文件大小: ${(stats.size / 1024).toFixed(2)} KB`);
    
} catch (error) {
    console.error('❌ 转换失败:', error.message);
    
    // 如果是文件不存在错误，提供详细的路径信息
    if (error.code === 'ENOENT') {
        console.log('\n请检查以下路径是否存在:');
        console.log(`- ${path.resolve(inputPath)}`);
        console.log(`- ${path.resolve(path.dirname(inputPath))}`);
    }
    
    process.exit(1);
}