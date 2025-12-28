// 文章数据 - 由Electron主进程自动生成
// 生成时间: 12/28/2025, 9:31:50 AM

const articleData = {
    "article": [
        {
            "id": 1766759470196,
            "title": "长安的荔枝二刷看哭了",
            "category": "日常",
            "tags": [
                "观后感",
                "电影",
                "长安的荔枝",
                "感动时刻"
            ],
            "summary": "在不同的氛围看《长安的荔枝》 居然看哭了",
            "content": "<i>本来半个月之前刷视频看到了长安的荔枝的解说 没细看</i><div><i>后来语文老师给我们放了 但是只放了前半个小时 后面我自己回去用pad边写代码边看完了&nbsp; 感觉挺震撼的（各种角度</i></div><div><i>今天晚自习给我们剩下的放完了</i></div><div>看到蠢奴救李善德 还挡道最后带着两个要杀他的人一起摔下悬崖</div><div>真的眼泪流出来了</div><div>前面看到朝天都不救李善德 那个商人被没收了所有财产还来救他说的那些话也感觉眼睛湿了</div><div>后面一骑红尘的时候也是 但是都没有前面那么多</div><div>看来专心做一件事的时候真的会不一样啊</div>",
            "date": "2025-12-26"
        },
        {
            "id": 1766677193405,
            "title": "圣诞节快乐",
            "category": "日常",
            "tags": [
                "日常",
                "节日祝福",
                "圣诞节"
            ],
            "summary": "圣诞节快乐",
            "content": "<font size=\"7\"><i>M</i><u><b>er</b>r</u>y</font> <font size=\"7\"><font color=\"#ff0a0a\">C</font><font color=\"#6b2424\">h</font><font color=\"#b32323\">ristma</font>s</font><div><ul><li><font size=\"2\">陪阿米娅</font></li><li><font size=\"2\">陪小白</font></li><li><span style=\"font-size: small;\">陪bstt</span></li></ul><div style=\"text-align: center;\"><font size=\"2\">竞购表</font></div></div><div style=\"text-align: center;\"><font size=\"2\"><br></font></div>",
            "date": "2025-12-25"
        }
    ]
};

// 立即可用的数据访问函数
function getArticles() {
    return articleData.article;
}

function getArticleById(id) {
    return articleData.article.find(article => article.id === id);
}

function getArticlesByCategory(category) {
    return articleData.article.filter(article => article.category === category);
}