// Dom元素创建
    document.getElementsByTagName('body')[0].innerHTML = ''
    // 创建背景元素
    const bgDiv = document.createElement('div');
    bgDiv.id = 'bg';

    // 创建主容器元素
    const mainContainer = document.createElement('div');
    mainContainer.id = 'mainContainer';

    // 创建搜索容器元素
    const EsearchContainer = document.createElement('div');
    EsearchContainer.id = 'searchContainer';

    // 创建输入框元素
    const EsearchInput = document.createElement('input');
    EsearchInput.type = 'text';
    EsearchInput.id = 'searchInput';
    EsearchInput.placeholder = '输入关键字搜索';

    // 创建搜索按钮元素
    const EsearchButton = document.createElement('button');
    EsearchButton.id = 'searchButton';
    EsearchButton.textContent = '搜索';

    // 将输入框和按钮添加到搜索容器中
    EsearchContainer.appendChild(EsearchInput);
    EsearchContainer.appendChild(EsearchButton);

    // 创建选择容器元素
    const selectContainer = document.createElement('div');
    selectContainer.id = 'selectContainer';

    // 创建选择选项的包裹元素
    const selectSpan = document.createElement('span');
    const selectInnerSpan = document.createElement('span');

    // 创建选项元素
    const option1 = document.createElement('span');
    option1.className = 'option';
    option1.setAttribute('foc', '必应');
    option1.setAttribute('active', true);
    option1.textContent = '必应';

    const option2 = document.createElement('span');
    option2.className = 'option';
    option2.setAttribute('foc', '谷歌');
    option2.textContent = '谷歌';

    const option3 = document.createElement('span');
    option3.className = 'option';
    option3.setAttribute('foc', '百度');
    option3.textContent = '百度';

    const option4 = document.createElement('span');
    option4.className = 'option';
    option4.setAttribute('foc', '搜狗');
    option4.textContent = '搜狗';

    // 创建更多按钮元素
    const moreButton = document.createElement('button');
    moreButton.id = 'more';
    moreButton.className = 'more';
    moreButton.textContent = '更多';

    // 将选项和按钮添加到内部 span 中
    selectInnerSpan.appendChild(option1);
    selectInnerSpan.appendChild(option2);
    selectInnerSpan.appendChild(option3);
    selectInnerSpan.appendChild(option4);
    selectInnerSpan.appendChild(moreButton);

    // 将内部 span 添加到外部 span 中
    selectSpan.appendChild(selectInnerSpan);

    // 将选择容器添加到主容器中
    selectContainer.appendChild(selectSpan);

    // 将搜索容器和选择容器添加到主容器中
    mainContainer.appendChild(EsearchContainer);
    mainContainer.appendChild(selectContainer);

    // 创建对话框元素
    const moreSelectDialog = document.createElement('dialog');
    moreSelectDialog.id = 'moreSelect';

    // 创建对话框内部容器元素
    const moreSelectContainer = document.createElement('div');
    moreSelectContainer.id = 'MoreSelectContainer';

    // 创建常规选项部分
    const 常规Span = document.createElement('span');
    常规Span.textContent = '常规';

    const 常规InnerSpan = document.createElement('span');

    const 常规Option1 = document.createElement('span');
    常规Option1.className = 'option';
    常规Option1.setAttribute('foc', '必应');
    常规Option1.setAttribute('active', true);
    常规Option1.textContent = '必应';

    const 常规Option2 = document.createElement('span');
    常规Option2.className = 'option';
    常规Option2.setAttribute('foc', '谷歌');
    常规Option2.textContent = '谷歌';

    const 常规Option3 = document.createElement('span');
    常规Option3.className = 'option';
    常规Option3.setAttribute('foc', '百度');
    常规Option3.textContent = '百度';

    const 常规Option4 = document.createElement('span');
    常规Option4.className = 'option';
    常规Option4.setAttribute('foc', '搜狗');
    常规Option4.textContent = '搜狗';

    常规InnerSpan.appendChild(常规Option1);
    常规InnerSpan.appendChild(常规Option2);
    常规InnerSpan.appendChild(常规Option3);
    常规InnerSpan.appendChild(常规Option4);

    常规Span.appendChild(常规InnerSpan);

    // 创建百科选项部分
    const 百科Span = document.createElement('span');
    百科Span.textContent = '百科';

    const 百科InnerSpan = document.createElement('span');

    const 百科Option1 = document.createElement('span');
    百科Option1.className = 'option';
    百科Option1.setAttribute('foc', '维基百科');
    百科Option1.textContent = '维基百科';

    const 百科Option2 = document.createElement('span');
    百科Option2.className = 'option';
    百科Option2.setAttribute('foc', '百度百科');
    百科Option2.textContent = '百度百科';

    const 百科Option3 = document.createElement('span');
    百科Option3.className = 'option';
    百科Option3.setAttribute('foc', '知乎');
    百科Option3.textContent = '知乎';

    const 百科Option4 = document.createElement('span');
    百科Option4.className = 'option';
    百科Option4.setAttribute('foc', '豆瓣');
    百科Option4.textContent = '豆瓣';

    const 百科Option5 = document.createElement('span');
    百科Option5.className = 'option';
    百科Option5.setAttribute('foc', 'fandom');
    百科Option5.textContent = 'fandom';

    const 百科Option6 = document.createElement('span');
    百科Option6.className = 'option';
    百科Option6.setAttribute('foc', '萌娘百科');
    百科Option6.textContent = '萌娘百科';

    百科InnerSpan.appendChild(百科Option1);
    百科InnerSpan.appendChild(百科Option2);
    百科InnerSpan.appendChild(百科Option3);
    百科InnerSpan.appendChild(百科Option4);
    百科InnerSpan.appendChild(百科Option5);
    百科InnerSpan.appendChild(百科Option6);

    百科Span.appendChild(百科InnerSpan);

    // 创建图片选项部分
    const 图片Span = document.createElement('span');
    图片Span.textContent = '图片';

    const 图片InnerSpan = document.createElement('span');

    const 图片Option1 = document.createElement('span');
    图片Option1.className = 'option';
    图片Option1.setAttribute('foc', 'Pixiv');
    图片Option1.textContent = 'Pixiv';

    const 图片Option2 = document.createElement('span');
    图片Option2.className = 'option';
    图片Option2.setAttribute('foc', 'X');
    图片Option2.textContent = 'X';

    图片InnerSpan.appendChild(图片Option1);
    图片InnerSpan.appendChild(图片Option2);

    图片Span.appendChild(图片InnerSpan);

    // 创建视频选项部分
    const 视频Span = document.createElement('span');
    视频Span.textContent = '视频';

    const 视频InnerSpan = document.createElement('span');

    const 视频Option1 = document.createElement('span');
    视频Option1.className = 'option';
    视频Option1.setAttribute('foc', 'Bilibili');
    视频Option1.textContent = 'Bilibili';

    const 视频Option2 = document.createElement('span');
    视频Option2.className = 'option';
    视频Option2.setAttribute('foc', 'YouTube');
    视频Option2.textContent = 'YouTube';

    const 视频Option3 = document.createElement('span');
    视频Option3.className = 'option';
    视频Option3.setAttribute('foc', '动漫花园');
    视频Option3.textContent = '动漫花园';

    视频InnerSpan.appendChild(视频Option1);
    视频InnerSpan.appendChild(视频Option2);
    视频InnerSpan.appendChild(视频Option3);

    视频Span.appendChild(视频InnerSpan);

    // 创建音乐选项部分
    const 音乐Span = document.createElement('span');
    音乐Span.textContent = '音乐';

    const 音乐InnerSpan = document.createElement('span');

    const 音乐Option1 = document.createElement('span');
    音乐Option1.className = 'option';
    音乐Option1.setAttribute('foc', '网易云音乐');
    音乐Option1.textContent = '网易云音乐';

    const 音乐Option2 = document.createElement('span');
    音乐Option2.className = 'option';
    音乐Option2.setAttribute('foc', 'QQ音乐');
    音乐Option2.textContent = 'QQ音乐';

    音乐InnerSpan.appendChild(音乐Option1);
    音乐InnerSpan.appendChild(音乐Option2);

    音乐Span.appendChild(音乐InnerSpan);

    // 创建开发选项部分
    const 开发Span = document.createElement('span');
    开发Span.textContent = '开发';

    const 开发InnerSpan = document.createElement('span');

    const 开发Option1 = document.createElement('span');
    开发Option1.className = 'option';
    开发Option1.setAttribute('foc', 'GitHub');
    开发Option1.textContent = 'GitHub';

    const 开发Option2 = document.createElement('span');
    开发Option2.className = 'option';
    开发Option2.setAttribute('foc', 'iconfont');
    开发Option2.textContent = 'iconfont';

    const 开发Option3 = document.createElement('span');
    开发Option3.className = 'option';
    开发Option3.setAttribute('foc', '字体天下');
    开发Option3.textContent = '字体天下';

    const 开发Option4 = document.createElement('span');
    开发Option4.className = 'option';
    开发Option4.setAttribute('foc', 'mdn');
    开发Option4.textContent = 'mdn';

    开发InnerSpan.appendChild(开发Option1);
    开发InnerSpan.appendChild(开发Option2);
    开发InnerSpan.appendChild(开发Option3);
    开发InnerSpan.appendChild(开发Option4);

    开发Span.appendChild(开发InnerSpan);

    // 创建关闭按钮元素
    const closeMoreSelectButton = document.createElement('button');
    closeMoreSelectButton.id = 'closeMoreSelect';
    closeMoreSelectButton.textContent = '关闭';

    // 创建全部搜索按钮元素
    const searchALLButton = document.createElement('button');
    searchALLButton.id = 'searchALL';
    searchALLButton.textContent = 'ALL';

    // 按键提示按钮
    const keyTipsButton = document.createElement('button');
    keyTipsButton.id = 'keyTips';
    keyTipsButton.textContent = '键盘快捷键'

    // 将所有部分添加到对话框内部容器中
    moreSelectContainer.appendChild(常规Span);
    moreSelectContainer.appendChild(百科Span);
    moreSelectContainer.appendChild(图片Span);
    moreSelectContainer.appendChild(视频Span);
    moreSelectContainer.appendChild(音乐Span);
    moreSelectContainer.appendChild(开发Span);

    // 将对话框内部容器添加到对话框中
    moreSelectDialog.appendChild(moreSelectContainer);
    moreSelectDialog.appendChild(closeMoreSelectButton);
    moreSelectDialog.appendChild(searchALLButton);
    moreSelectDialog.appendChild(keyTipsButton);

    // 将背景元素、主容器和对话框添加到 body 中
    document.body.appendChild(bgDiv);
    document.body.appendChild(mainContainer);
    document.body.appendChild(moreSelectDialog);


//历史记录
const history = document.createElement('div')
history.style.display = 'none'
history.id = 'history'
history.appendChild(document.createElement('ul'))
history.children[0].id = 'historyList'
mainContainer.appendChild(history)




//标题更改
const title = document.createElement(`title`)
title.innerHTML = '眼界搜-YanjerSearch'
document.head.append(title)
//css引入
const link = document.createElement(`link`)
link.rel = 'stylesheet'
//// improtant debug
link.href = './main.css'//test定位
link.href = './files/expend/searchBrowserpage/main.css'//expend定位
//// improtant debug
//随机搜索推荐
document.head.append(link)
let searchArray = [
    '鄢桀蚀荼',
    'YanjerTS',
]
//搜索历史初始化
let HistoryArray = []

//数组随机获取
function randomResult(array){
    let randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}
//取随机推荐
let recommend = randomResult(searchArray)
//元素绑定
const searchInput = document.getElementById('searchInput')
const searchContainer = document.getElementById('searchContainer')
const searchButton = document.getElementById('searchButton')
const historyContainer = document.getElementById('history')
const historyList = document.getElementById('historyList')
//成为焦点
searchInput.addEventListener('focus', () => {
    //随机刷新推荐
    recommend = randomResult(searchArray)
    //预显示推荐
    searchInput.placeholder = recommend
    //搜索框上升
    searchContainer.style.marginTop = '20vh'
    // 显示历史
    historyContainer.style.display = 'block'
    if(HistoryArray.length == 0){
        historyContainer.style.height = '30vh'
        historyList.innerHTML = '<historyTip>不妨现在在这里留下一笔?</historyTip>'
    }
})
//历史记录更新
setInterval(() => {
    if(HistoryArray.length > 0){
        historyList.innerHTML = ``
        HistoryArray.forEach(item => {
            let li = document.createElement('li')
            li.textContent = item
            historyList.appendChild(li)
        })
        document.getElementById('historyList').querySelectorAll('li').forEach(item => {
            item.addEventListener('click', () => {
                searchInput.value = item.textContent
                searchButton.click()
            })
        })
    }
}, 1000)
//让搜索引擎选择框跟随输入框移动
setInterval(() => {
    document.getElementById('selectContainer').children[0].style.width = searchInput.offsetWidth +document.getElementById('more').offsetWidth + 'px'
    document.getElementById('history').style.width = searchInput.offsetWidth + 'px'
}, 1)

//失去焦点
searchInput.addEventListener('blur', () => {
    if(searchInput.value === ''){
        //清空推荐
        searchInput.placeholder = '输入关键字搜索'
        //搜索框下降
        searchContainer.style.marginTop = '65vh'
    }
    //如果只输入一个空格就清空并下降
    if(searchInput.value === ' '){
        searchInput.value = ''
        searchContainer.style.marginTop = '65vh'
    }
    setTimeout(() => {
        // 隐藏历史
        historyContainer.style.display = 'none'
    }, 200)

})
//搜索引擎前缀
let focUrl
//按钮焦点配合搜索框 防止点击后失去焦点恢复原位而造成按钮点击失败
searchButton.addEventListener('focus', () => {
    if(searchInput.focus){
        searchContainer.style.marginTop = '20vh'
    }
})
//点击搜索按钮
searchButton.addEventListener('click', () => {
    if(searchInput.focus){
        searchContainer.style.marginTop = '20vh'
    }
    //如果没输入内容
    if(searchInput.value.trim() === '') {
        //搜索推荐内容
        window.open(focUrl + recommend.trim())//trim()防止空格
    if(HistoryArray.includes(searchInput.value.trim())){return}else{
        //搜索历史记录
        HistoryArray.push(recommend.trim())}
    }else{
        //搜索输入内容
        window.open(focUrl + searchInput.value.trim())
        searchArray.push(searchInput.value.trim())
        if(HistoryArray.includes(searchInput.value.trim())){return}else{
        HistoryArray.push(searchInput.value.trim())}
    }
})

//搜索引擎绑定
let hrefMap = new Map([
    //常规
    ['谷歌', 'https://www.google.com/search?q='],
    ['必应', 'https://cn.bing.com/search?q='],
    ['百度', 'https://www.baidu.com/s?wd='],
    ['搜狗', 'https://www.sogou.com/web?query='],
    //百科
    ['维基百科', 'https://baike.baidu.com/item/'],
    ['百度百科', 'https://baike.baidu.com/item/'],
    ['知乎', 'https://www.zhihu.com/search?type=content&q='],
    ['豆瓣', 'https://www.douban.com/search?q='],
    ['fandom', 'https://community.fandom.com/wiki/Special:Search?scope=cross-wiki&navigationSearch=true&query='],
    ['萌娘百科', 'https://mzh.moegirl.org.cn/index.php?search='],
    //图片
    ['Pixiv', 'https://www.pixiv.net/search.php?s_mode=s_tag&word='],
    ['X','https://x.com/search?q='],
    //视频
    ['Bilibili', 'https://search.bilibili.com/all?keyword='],
    ['YouTube', 'https://www.youtube.com/results?search_query='],
    ['动漫花园','https://dmhy.b168.net/topics/list?keyword='],
    //音乐
    ['网易云音乐', 'https://music.163.com/#/search/m/?s='],
    ['QQ音乐', 'https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w='],
    //开发
    ['GitHub', 'https://github.com/search?q='],
    ['iconfont', 'https://www.iconfont.cn/search/index?searchType=icon&q=123'],
    ['字体天下', 'https://www.fonts.net.cn/font-search-result.html?q='],
    ['mdn', 'https://developer.mozilla.org/zh-CN/search?q='],
]);


let options = Array.from(document.getElementById('selectContainer').children[0].children[0].querySelectorAll('.option'))
let Moreoptions
options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(item => {
            item.setAttribute('active', false)
        })
        option.setAttribute('active', true)
        let foc = option.getAttribute('foc')
        focUrl = hrefMap.get(foc)
        if(Moreoptions !== undefined) {
        Moreoptions.forEach(item => {
            item.setAttribute('active', false)
        })
        }
    })
})
document.getElementById('selectContainer').children[0].children[0].querySelectorAll('.option')[0].click()

//更多
document.getElementById('more').addEventListener('click', () => {
    document.getElementById('moreSelect').showModal()
    document.getElementById('closeMoreSelect').addEventListener('click', () => {
        document.getElementById('moreSelect').close()
    })
    Moreoptions = Array.from(document.getElementById('MoreSelectContainer').querySelectorAll('.option'))
    Moreoptions.forEach(option => {
        option.addEventListener('click', () => {
            Moreoptions.forEach(item => {
                item.setAttribute('active', false)
            })
            option.setAttribute('active', true)
            let foc = option.getAttribute('foc')
            focUrl = hrefMap.get(foc)
            options.forEach(item => {
                item.setAttribute('active', false)
            })
        })
    })

    //全部搜索
    document.getElementById('searchALL').addEventListener('click', () => {
        alert(`受限于浏览器特性 无法同时打开多个页面 有想法可以联系作者交流`)
        // Moreoptions.forEach(a => {
        //     setTimeout(() => {
        //         // a.click()
        //         // window.open(hrefMap.get(a.getAttribute('foc'))+ searchInput.value.trim())   
        //     }, 100)
        // })
    })
})

//按键提示
document.getElementById('keyTips').addEventListener('click', () => {
    var tips = `
    [↑]打开更多搜索
    [↓]关闭更多搜索
    [空格]打开搜索框
    [Esc]取消搜索框聚焦
    [Enter]搜索
    输入两个空格固定搜索框
    `
    console.log(tips)
    alert(tips)
})
//监听enter
document.getElementById('searchInput').addEventListener('keyup', (event) => {
    if(event.keyCode === 13){
        searchButton.click()
    }
})
//ArrowUp打开moreSelect
document.addEventListener('keydown', (event) => {
    if(event.keyCode === 38){
        document.getElementById('more').click()
    }
})
//ArrowDown关闭moreSelect
document.addEventListener('keydown', (event) => {
    if(event.keyCode === 40){
        document.getElementById('closeMoreSelect').click()
    }
})
//Space打开搜索框
document.addEventListener('keydown', (event) => {
    if(event.keyCode === 32){
        document.getElementById('searchInput').focus()
    }
})
//esc取消搜索框焦点
document.addEventListener('keydown', (event) => {
    if(event.keyCode === 27){
        document.getElementById('searchInput').blur()
    }
})

