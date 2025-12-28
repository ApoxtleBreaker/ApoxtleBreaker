const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

// JSON 到 JS 转换功能
async function convertJsonToJs(sendProgress = null) {
  // 配置路径 - 相对于 Electron 项目的根目录
  const inputPath = path.join(__dirname, '../../../assets/data/articles.json');
  const outputPath = path.join(__dirname, '../../../page/js/article-data.js');
  const indexPath = path.join(__dirname, '../../../index.html');

  console.log('开始转换JSON到JS文件...');
  
  // 发送进度消息
  if (sendProgress) {
    sendProgress({ type: 'info', message: '开始转换JSON到JS文件...' });
  }

  try {
    // 读取JSON文件
    if (sendProgress) sendProgress({ type: 'info', message: '正在读取JSON文件...' });
    const jsonContent = fs.readFileSync(inputPath, 'utf8');
    const jsonData = JSON.parse(jsonContent);
    
    // 发送进度
    if (sendProgress) sendProgress({ type: 'success', message: `成功读取 ${jsonData.article ? jsonData.article.length : 0} 篇文章` });
    
    // 生成JavaScript文件内容
    if (sendProgress) sendProgress({ type: 'info', message: '正在生成JavaScript文件...' });
    const jsContent = `// 文章数据 - 由Electron主进程自动生成
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
}`;

    // 确保输出目录存在
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      console.log(`创建目录: ${outputDir}`);
      if (sendProgress) sendProgress({ type: 'info', message: '创建输出目录...' });
    }

    // 写入JavaScript文件
    fs.writeFileSync(outputPath, jsContent, 'utf8');
    if (sendProgress) sendProgress({ type: 'success', message: 'JavaScript文件生成完成' });
    
    // 更新index.html
    if (sendProgress) sendProgress({ type: 'info', message: '正在更新首页文章展示...' });
    try {
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
            const img = article.image || './assets/img/head.jpg';
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
            newIndexContent = indexContent.slice(0, startIdx) + newSection + indexContent.slice(startIdx);
          }

          fs.writeFileSync(indexPath, newIndexContent, 'utf8');
          if (sendProgress) sendProgress({ type: 'success', message: `已更新首页，展示最新 ${articles.length} 篇文章` });
        } else {
          if (sendProgress) sendProgress({ type: 'warning', message: '未找到文章展示区域，跳过首页更新' });
        }
      } else {
        if (sendProgress) sendProgress({ type: 'warning', message: '首页文件不存在，跳过更新' });
      }
    } catch (err) {
      console.error('❌ 更新 index.html 失败:', err.message);
      if (sendProgress) sendProgress({ type: 'error', message: '更新首页失败: ' + err.message });
    }

    console.log('✅ 转换成功！');
    if (sendProgress) sendProgress({ type: 'success', message: '转换完成！' });
    
    // 显示文件大小
    const stats = fs.statSync(outputPath);
    const fileSize = (stats.size / 1024).toFixed(2);
    if (sendProgress) sendProgress({ type: 'info', message: `生成文件大小: ${fileSize} KB` });
    
    return {
      success: true,
      message: `转换成功！生成了 ${path.basename(outputPath)} 文件，包含 ${jsonData.article ? jsonData.article.length : 0} 篇文章`,
      outputPath: outputPath,
      articleCount: jsonData.article ? jsonData.article.length : 0,
      fileSize: fileSize
    };
    
  } catch (error) {
    console.error('❌ 转换失败:', error.message);
    if (sendProgress) sendProgress({ type: 'error', message: '转换失败: ' + error.message });
    
    // 如果是文件不存在错误，提供详细的路径信息
    if (error.code === 'ENOENT') {
      console.log('\n请检查以下路径是否存在:');
      console.log(`- ${path.resolve(inputPath)}`);
      console.log(`- ${path.resolve(path.dirname(inputPath))}`);
    }
    
    return {
      success: false,
      message: `转换失败: ${error.message}`,
      error: error.message
    };
  }
}

// IPC 通信处理 - 支持进度回调
ipcMain.handle('convert-json-to-js', async (event) => {
  console.log('收到转换请求，开始处理...');
  
  // 创建进度回调函数
  const sendProgress = (progressData) => {
    // 向渲染进程发送进度消息
    event.sender.send('conversion-progress', progressData);
  };
  
  const result = await convertJsonToJs(sendProgress);
  return result;
});

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});