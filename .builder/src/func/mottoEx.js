/**
 * 将复合数组解析为HTML格式
 * @param {Array} compoundArray - 复合数组格式的数据
 * @returns {string} - 解析后的HTML字符串
 */
function parseCompoundArrayToHTML(compoundArray) {
    let htmlOutput = '';
    
    compoundArray.forEach((item, index) => {
        if (item.length >= 2) {
            const paragraphs = item[0]; // 段落数组
            const authors = item[1];    // 作者数组
            
            // 确定content的class类型
            let contentClass = 'start'; // 默认class
            
            // 根据段落数量和内容判断class类型
            if (paragraphs.length === 1) {
                const text = paragraphs[0];
                if (text.length < 30 && !text.includes('「')) {
                    contentClass = 'center';
                } else if (text.includes('大') || text.includes('Large') || text.length > 50) {
                    contentClass = 'large center';
                }
            } else if (paragraphs.length >= 4) {
                contentClass = 'center';
            }
            
            // 构建HTML
            htmlOutput += '<div class="content">\\n';
            htmlOutput += `    <content class="${contentClass}"> \\n`;
            
            // 添加段落
            paragraphs.forEach(paragraph => {
                htmlOutput += `        <p>${paragraph}</p>\\n`;
            });
            
            htmlOutput += '    </content>\\n';
            
            // 添加作者信息
            authors.forEach(author => {
                if (author) {
                    htmlOutput += `    <author>${author}</author>\\n`;
                }
            });
            
            // 特殊处理某些内容块的额外元素
            if (index === 14) { // 第15个内容块有ps注释
                htmlOutput += '    <ps class="end">ps:原句来自 雪莱《无常》<ps>\\n';
            } else if (index === 28) { // 第29个内容块有ps注释
                htmlOutput += '    <ps class="end">ps:分别对应《雪之本境》《雾之本境》《真恋~寄语枫秋~》《翡翠月》<ps>\\n';
                htmlOutput += '    <ps class="end">也可以理解为地点:  月梨城,  白鹿渊,  枫音乡,  星墟海<ps>\\n';
            }
            
            htmlOutput += '</div>\\n\\n';
        }
    });
    
    return htmlOutput;
}

// 使用示例
// const htmlResult = parseCompoundArrayToHTML(favouriteCompound);
// console.log(htmlResult);

export default parseCompoundArrayToHTML;