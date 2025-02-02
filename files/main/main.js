let SpaceUpdateDate = "2025/2/2/ 凌晨"
let UpdateDate = "2025/2/2-10:55a.m"
//欢迎页面文字  蚀荼=>使徒
document.getElementById("welcomeText").children[0].addEventListener("mouseover", function() {
    document.getElementById("welcomeText").children[0].innerHTML=`<span>yān</span>鄢<span>jié</span>桀<span>shǐ</span>使<span>tú</span>徒-YanjerTS`
});
document.getElementById("welcomeText").children[0].addEventListener("mouseout", function() {
    document.getElementById("welcomeText").children[0].innerHTML=`<span>yān</span>鄢<span>jié</span>桀<span>shí</span>蚀<span>tú</span>荼-YanjerTS`
});
//点击文字取消欢迎窗口
document.getElementById("welcomeText").addEventListener("click", function() {
    document.getElementById('coverBg').close();
    document.getElementById('coverBg').remove();
// 添加图片功能
addOpenImg()

});
//时间到自动取消欢迎窗口
setTimeout(function() {
    if (document.getElementById('coverBg')) {
        document.getElementById('coverBg').close();
        document.getElementById('coverBg').remove();
        // 添加图片功能
        addOpenImg()

    }
}, 5000);
//mc小人
{
    document.getElementById('minecraftSkin').addEventListener('mouseover', function() {
        // document.getElementById('minecraftSkin').style.left =  document.getElementById('minecraftSkin').style.left.split("px")[0] - 30 + "px";
        //直接修改.style无法获得css中设置的left值，只能用getComputedStyle获取计算后的样式值
        document.getElementById('minecraftSkin').style.left = getComputedStyle(document.getElementById('minecraftSkin')).left.split("px")[0] - 30 + "px";
        setTimeout(function() {
            document.getElementById('minecraftSkin').style.left = getComputedStyle(document.getElementById('minecraftSkin')).left.split("px")[0] - 60 + "px";
        }, 1000);
        setTimeout(function() {
            document.getElementById('minecraftSkin').style.left = getComputedStyle(document.getElementById('minecraftSkin')).left.split("px")[0] - 80 + "px";
        }, 1200);
    });
}

//b站视频
let bGame = new Map([
    // ['MinecraftSurvive','我的世界生存|https://www.bilibili.com/video/BV1wh411N7Qg/'],
    ['OtakusAdventure','宅男的人间冒险|https://www.bilibili.com/video/BV1YM4y177m5/'],
    ['TricolourLovestory','三色绘恋|https://www.bilibili.com/video/BV1N9vrerEV1/'],
    ['TheHungryLambTravelingintheLateMingDynasty','饿殍,明末千里行|https://www.bilibili.com/video/BV1Bz421h7n8/'],
    ['TrueLoveConfidetotheMaple','真恋~寄语枫秋~|https://www.bilibili.com/video/BV1rFvkeiEfX/'],
    ['ConspiracyFieldFogShadow','雾之本境S|https://www.bilibili.com/video/BV1kfvreTEym/'],
    ['ConspiracyFieldSnowTrap','雪之本境S|https://bilibili.com/video/BV1jT421q7KS/'],
]);
const bSeriesALL = document.getElementById('bSeriesALL')
const bSeries = Array.from(document.getElementById('bWork').querySelectorAll('.bSeries'));
let url = bSeriesALL.children[0].src;
bSeriesALL.children[0].remove();
bSeries.forEach(function(i) {
let ID = i.id;
let foc = bGame.get(ID);
let title = foc.split('|')[0];
let href = foc.split('|')[1];
 i.querySelector('.title').innerHTML = title;
 console.log(i.querySelector('.cover'))
 console.log(`${url}${ID}.png`)
 i.querySelector('.cover').style.backgroundImage = `url(${url}${ID}.png)`;
 i.querySelector('.cover').addEventListener('click', function() {
     window.open(href);
 });
});
bSeriesALL.addEventListener('click',function(){
    window.open('https://space.bilibili.com/1979641484/channel/series')
})

//选项卡
let selectBox = document.getElementsByClassName("option");
let selectBoxArray = Array.from(selectBox);
selectBoxArray.forEach(function(item) {
    item.addEventListener("click", function() {
        selectBoxArray.forEach(function(item2) {
            item2.setAttribute("active", false);
        })
        item.setAttribute("active", true);
        reloadBoxDisplay();
    })
})
// 选项卡对应栏目重置
function reloadBoxDisplay(a) {
    //所有ctn隐藏
    Array.from(document.getElementsByClassName("select-ctn")).forEach(function(item) {
        item.style.display = "none";
    })
    //获得active的选项对应的focE值
    let foc = document.querySelector(".option[active=true]").getAttribute("focE");
    // console.log(foc)
    //focE值对应的元素显示
    document.getElementById(foc).style.display = "block";
    if (foc == "ctn-film") {
        document.getElementById("selectMain").style.overflow = "visible";
        document.getElementById('selectNotice').innerText = '排名不分先后,按照作者大概观看顺序排序,点击名称跳转百科页面，点击封面放大至原图大小'
    }
    if (foc == "ctn-vtuber") {
        document.getElementById("selectMain").style.overflow = "hidden";
        document.getElementById(foc).style.display = "flex";
        document.getElementById('selectNotice').innerText = '声明:对V的看法仅限于皮套和皮套上的某些设定 对中之人和现实中一切不感兴趣,不喜欢看直播,只偶尔看切片'
    }
    if (foc == "ctn-personalSpace") {
        document.getElementById("selectMain").style.overflow = "hidden";
        document.getElementById('selectNotice').innerText = `空间上次更新时间:${SpaceUpdateDate}`
    }
    if (foc == "ctn-favourite") {
        document.getElementById("selectMain").style.overflow = "hidden";
        document.getElementById('selectNotice').innerText = '主观见解 有错联系作者纠正'
    }
    if (foc == "ctn-notice") {
        document.getElementById("selectMain").style.overflow = "hidden";
        document.getElementById('selectNotice').innerText = `网站上次更新时间:${UpdateDate}`
    }

    if(a != 'firstload'){
    let selectNoticeTop = document.getElementById('selectNotice').offsetTop
    let selectTop = document.getElementById('selectMain').offsetTop
    window.scrollTo({
        top: selectNoticeTop,
        behavior: 'smooth',
    })
    setTimeout(function() {
        window.scrollTo({
            top: selectTop,
            behavior: 'smooth',
        })
    }, 600)
    }
}
// 初始化选项卡
// 延迟2ms执行 保证番剧信息可以加载完毕
reloadBoxDisplay('firstload')
window.scrollTo(0, 0);
Array.from(document.getElementsByClassName("select-ctn")).forEach(function(item) {
    item.style.display = "none";
})
document.getElementById('ctn-notice').style.display = "block";
document.getElementById("selectMain").style.overflow = "hidden";
document.getElementById('selectNotice').innerText = `网站上次更新时间:${UpdateDate}`

//番剧信息对应表
let filmMap = new Map([
    ["彻夜之歌", "彻夜之歌|よふかしのうた|CALLOF THE NIGHT|2022-07-07|mzh.moegirl.org.cn/彻夜之歌(漫画)#"],
    ["前辈是男孩子", "前辈是男孩子|先輩はおとこのこ|This is Him|2019-12-07|mzh.moegirl.org.cn/前辈是伪娘"],
    ["比翼之吻", "比翼之吻|ダーリン・イン・ザ・フランキス|DARLING in the FRANXX|2018-01-13|mzh.moegirl.org.cn/DARLING_in_the_FRANXX"],
    ["无职转生", "无职转生：到了异世界就拿出真本事|無職転生～異世界行ったら本気だす～||2021-01-10|mzh.moegirl.org.cn/無職転生～到了异世界就拿出真本事～"], 
    ["无职转生ⅡPart1", "无职转生Ⅱ：到了异世界就拿出真本事|無職転生Ⅱ～異世界行ったら本気だす～ 第1クール||2023-07-02|mzh.moegirl.org.cn/無職転生～到了异世界就拿出真本事～"],
    ["无职转生ⅡPart2", "无职转生Ⅱ：到了异世界就拿出真本事|無職転生Ⅱ～異世界行ったら本気だす～ 第2クール||2024-04-07|mzh.moegirl.org.cn/無職転生～到了异世界就拿出真本事～"],
    ["不时用俄语小声说真心话的邻桌艾莉同学", "不时用俄语小声说真心话的邻桌艾莉同学|時々ボソッとロシア語でデレる隣のアーリャさん||2024-07-03|mzh.moegirl.org.cn/不時轻声地以俄语遮羞的邻座艾莉同学"],
    ["恋爱随意链接", "恋爱随意链接|ココロコネクト|Kokoro Connect|2012-07-07|mzh.moegirl.org.cn/心灵链环"],
    ["通往夏天的隧道，离别的出口", "通往夏天的隧道，离别的出口|夏へのトンネル、さよならの出口||2024-08-30|mzh.moegirl.org.cn/通往夏天的隧道，再见的出口"],
    ["莉可丽丝", "莉可丽丝|リコリス・リコイル|Lycoris Recoil|2022-07-02|mzh.moegirl.org.cn/莉可丽丝"],
    ["终结的炽天使", "终结的炽天使|終わりのセラフ| Seraph of the End|2015-04-04|mzh.moegirl.org.cn/終結的炽天使"],
    ["终结的炽天使：名古屋决战篇", "终结的炽天使：名古屋决战篇|終わりのセラフ 名古屋決戦編|S2|2015-10-10|mzh.moegirl.org.cn/終結的炽天使"],
    ["青春猪头少年不会梦到圣诞服女郎", "青春猪头少年不会梦到圣诞服女郎|青春ブタ野郎はサンタクロースの夢を見ない||2025(预告)|mzh.moegirl.org.cn/青春猪头少年系列 "],
    ["青春猪头少年不会梦到红书包女孩", "青春猪头少年不会梦到红书包女孩|青春ブタ野郎はランドセルガールの夢を見ない||2023-12-01|mzh.moegirl.org.cn/青春猪头少年系列 "],
    ["青春猪头少年不会梦到外出娇怜妹", "青春猪头少年不会梦到外出娇怜妹|青春ブタ野郎はおでかけシスターの夢を見ない||2023-06-23|mzh.moegirl.org.cn/青春猪头少年系列 "],
    ["青春猪头少年不会梦到怀梦美少女", "青春猪头少年不会梦到怀梦美少女|青春ブタ野郎はゆめみる少女の夢を見ない ||2019-06-15|mzh.moegirl.org.cn/青春猪头少年系列 "],
    ["青春猪头少年不会梦到野生兔女郎", "青春猪头少年不会梦到野生兔女郎|青春ブタ野郎はバニーガール先輩の夢を見ない||2018-10-03|mzh.moegirl.org.cn/青春猪头少年系列 "],
    ["孤独摇滚", "孤独摇滚！|ぼっち・ざ・ろっく！|BOCCHI THE ROCK!|2022-10-08|mzh.moegirl.org.cn/孤独摇滚！"]

])
 {
//     // 中|日|英|上映时间|链接
//     "彻夜之歌": "彻夜之歌|よふかしのうた|CALLOF THE NIGHT|2022-07-07|mzh.moegirl.org.cn/彻夜之歌(漫画)#",
//     "前辈是男孩子":"前辈是男孩子|先輩はおとこのこ|This is Him|2019-12-07|mzh.moegirl.org.cn/前辈是伪娘",    
//     "比翼之吻": "比翼之吻|ダーリン・イン・ザ・フランキス|DARLING in the FRANXX|2018-01-13|mzh.moegirl.org.cn/DARLING_in_the_FRANXX",
//     "无职转生": "无职转生：到了异世界就拿出真本事|無職転生～異世界行ったら本気だす～||2021-01-10|mzh.moegirl.org.cn/无职转生～到了异世界就拿出真本事～",
//     "无职转生ⅡPart1": "无职转生Ⅱ：到了异世界就拿出真本事|無職転生Ⅱ～異世界行ったら本気だす～ 第1クール||2023-07-02|mzh.moegirl.org.cn/无职转生～到了异世界就拿出真本事～",
//     "无职转生ⅡPart2": "无职转生Ⅱ：到了异世界就拿出真本事|無職転生Ⅱ～異世界行ったら本気だす～ 第2クール||2024-04-07|mzh.moegirl.org.cn/无职转生～到了异世界就拿出真本事～",
//     "不时用俄语小声说真心话的邻桌艾莉同学": "不时用俄语小声说真心话的邻桌艾莉同学|時々ボソッとロシア語でデレる隣のアーリャさん||2024-07-03|mzh.moegirl.org.cn/不时轻声地以俄语遮羞的邻座艾莉同学",
//     "恋爱随意链接":"恋爱随意链接|ココロコネクト|Kokoro Connect|2012-07-07|mzh.moegirl.org.cn/心灵链环",
//     "通往夏天的隧道，离别的出口":"通往夏天的隧道，离别的出口|夏へのトンネル、さよならの出口||2024-08-30|mzh.moegirl.org.cn/通往夏天的隧道，再见的出口",
//     "莉可丽丝":"莉可丽丝|リコリス・リコイル|Lycoris Recoil|2022-07-02|mzh.moegirl.org.cn/莉可丽丝",
//     "终结的炽天使":"终结的炽天使|終わりのセラフ| Seraph of the End|2015-04-04|mzh.moegirl.org.cn/终结的炽天使",
//     "终结的炽天使：名古屋决战篇":"终结的炽天使：名古屋决战篇|終わりのセラフ 名古屋決戦編|S2|2015-10-10|mzh.moegirl.org.cn/终结的炽天使",
//     "青春猪头少年不会梦到圣诞服女郎":"青春猪头少年不会梦到圣诞服女郎|青春ブタ野郎はサンタクロースの夢を見ない||2025(预告)|mzh.moegirl.org.cn/青春猪头少年系列 ",
//     "青春猪头少年不会梦到红书包女孩":"青春猪头少年不会梦到红书包女孩|青春ブタ野郎はランドセルガールの夢を見ない||2023-12-01|mzh.moegirl.org.cn/青春猪头少年系列 ",
//     "青春猪头少年不会梦到外出娇怜妹":"青春猪头少年不会梦到外出娇怜妹|青春ブタ野郎はおでかけシスターの夢を見ない||2023-06-23|mzh.moegirl.org.cn/青春猪头少年系列 ",
//     "青春猪头少年不会梦到怀梦美少女":"青春猪头少年不会梦到怀梦美少女|青春ブタ野郎はゆめみる少女の夢を見ない ||2019-06-15|mzh.moegirl.org.cn/青春猪头少年系列 ",
//     "青春猪头少年不会梦到野生兔女郎":"青春猪头少年不会梦到野生兔女郎|青春ブタ野郎はバニーガール先輩の夢を見ない||2018-10-03|mzh.moegirl.org.cn/青春猪头少年系列 ",
//     "孤独摇滚":"孤独摇滚！|ぼっち・ざ・ろっく！|BOCCHI THE ROCK!|2022-10-08|mzh.moegirl.org.cn/孤独摇滚！"
}


//获得ctn-film中所有film的div并加入数组
let filmBox = document.getElementById('ctn-film')
// console.log(filmBox)
let filmArray = Array.from(filmBox.children)
// console.log(filmArray)
// 获得film的url前部分
mainUrl = filmBox.children[0].src
filmBox.children[0].remove()
filmArray.forEach(f => {
    //获得文件名
    foc = f.getAttribute('foc')

    //测试文件格式
        // 这部分回头细写
    fileType = 'webp'
    url = `${mainUrl}${foc}.${fileType}`
    //生成文件完整url
    f.style.backgroundImage = `url(${url})`
    let cn, jp, en, date, link
    //匹配map中的信息
    if (filmMap.has(foc)) {
        // 获得对应信息组
        let info = filmMap.get(foc).split('|')
        //格式不正常就抛出错误
        if (info.length == 5) {
        cn = info[0]
        jp = info[1]
        en = info[2]
        date = info[3]
        link = `https://${info[4]}`
           }else{
            alert('番剧信息对应表格式错误')
            // console.log(filmMap.get(foc))
        }
    }
    //基本信息显示
    f.innerHTML += `<h1 class="cn">${cn}  <span class="en">${en}</span></h1>`
    f.innerHTML += `<p class="jp">${jp}</p>`
    // f.innerHTML += `<p class="en">${en}</p>`
    f.innerHTML += `<p class="date">${date}</p>`
    // 
    // console.log(f.children[2])
    f.children[0].addEventListener('click', function() {
        window.open(link)
    })
    //鼠标停留显示完整封面
    f.addEventListener('mouseover', function() {

        let fullCover = document.createElement('img')
        if (f.children.length <= 3) {
            // 
            if(f.querySelector('#fullCover')){
                f.querySelector('#fullCover').remove()
            }
            // 
        //后续bug修改改掉了 不需要这里设置了
        // fullCover.src = `${url}`
        fullCover.style.height = '100vh'
        fullCover.style.width = 'auto'
        fullCover.style.position = 'fixed'
        fullCover.style.right = '0'
        fullCover.style.top = '0'
        // fullCover.style.left = '0'
        fullCover.style.zIndex = '9999'
        fullCover.id = 'fullCover'
        f.appendChild(fullCover)
    //
    //BUG 每个f停留添加的都是第一个f的fullCover
        //解决 每次拿到this的bg添加到fullCover
        
        //正则把url"xxx.webp"裁剪成xxx.webp
        const match = this.style.backgroundImage.match(/url\("([^"]+)"\)/);
        //如果匹配结果存在
        if (match && match[1]) {
            url = match[1];
        }
        // console.log(url)}
        //把截取结果替换到fullCover的src属性
        document.getElementById('fullCover').src = url
    //解决
        //点击文字跳转
        document.getElementById('fullCover').removeEventListener('click', function() {
            window.open(link)   
        })
        //点击显示封面原图尺寸
        document.getElementById('fullCover').addEventListener('click',function() {
            e = document.getElementById('fullCover')
            e.style.width = 'fit-content'
            e.style.height = 'fit-content'
            e.style.position = 'absolute'
        })
    }
    // 鼠标移开关闭完整封面
    f.addEventListener('mouseleave',function() {
        // 先判断存不存在 因为有两种监听会移除元素
        if(f.children[id='fullCover']){
            f.removeChild(document.getElementById('fullCover'))
        }
    }) 
    document.getElementById('fullCover').addEventListener('mouseleave',function() {
        // 先判断存不存在 因为有两种监听会移除元素
        if(f.children[id='fullCover']){
            f.removeChild(document.getElementById('fullCover'))
        }
    }) 
    })
})

// vtb
// 获得url并删除标记元素
let vtbUrl = document.getElementById('vtbUrl').src
document.getElementById('vtbUrl').remove()
// 获得元素
vtb = document.getElementsByClassName('vtuber')
let vtbArray = Array.from(vtb)
vtbArray.forEach(v => {
    // console.log(v)
    // 获得目标任务
    let Vname = v.getAttribute('foc')
    // 用background-image的span显示头像
    v.querySelector('.head').innerHTML = `<span style="background-image: url('${vtbUrl}/head/${Vname}.png');"></span>`

    v.querySelector('.name').innerHTML = Vname
    //头像点击跳转
    v.addEventListener('click', function() {
        window.open(vtbLive.get(Vname))
    })
})
let vtbLive = new Map([
    ['恩骨', 'https://live.bilibili.com/173586'],
    ['东雪莲', 'https://live.bilibili.com/22816111#/'],
    ['甘城なつき','https://www.twitch.tv/nacho_dayo'],
    ['神楽七奈', 'https://www.twitch.tv/kagurananaaaaa'],
    ['るるどらいおん', 'https://www.youtube.com/@rurudo_LION'],
])



// 个人空间信息读取

    // 第一次写函数注释
/**
 * 读取文件并写入
 * @author YanjerTS <https://github.com/ApoxtleBreaker>
 * @license CC-1.0
 * @param {any} fileName  文件名
 * @param {any} inputAim  写入目标元素id
 * @example 
 * readArticle('personalSpace.html','ctn-personalSpace')//读取personalSpace.html并写入ctn-personalSpace
 */ 
function readArticle(fileName,inputAim){
    //本级url
    let url = window.location.href.replace('index.html','')
    let aim = inputAim
    fetch(`${url}${fileName}`)
    .then(response => {return response.text()})
    .then(data => {
        async function InputContent(data,aim){
            let article = await data
            // console.log(article)
            document.getElementById(aim).innerHTML = article
        }
        InputContent(data,aim)
    })
}
readArticle(`personalSpace.html`,'ctn-personalSpace')
readArticle(`favourite.html`,'ctn-favourite')
readArticle(`YanjerInfo.html`,'YanjerInfo')
readArticle(`notice.html`,'ctn-notice')
//个人空间图片打开
function addOpenImg(){
    let psImg = []
    let personalSpaceArray = Array.from(document.getElementById('ctn-personalSpace').children)
    personalSpaceArray.forEach(ps => {
        psImg.push(ps.querySelectorAll('img'))
        // console.log(ps.querySelectorAll('img'))
        // console.log(psImg)
    })
    psImg.forEach(imgs => {
        console.log(imgs)
        if(imgs != null){
            imgs.forEach(img => {
                img.addEventListener('click', function() {
                    window.open(img.src)
                    //后续改成和film的fullCover一样的效果

                })
            })
        }
    })
}



// 头像框
// console.log(document.getElementById('YanjerHead').offsetWidth)
function headResize(){
    //头像框大小同步头像box
document.getElementById('YanjerHeadCover').style.width = document.getElementById('YanjerHead').offsetWidth + 'px'
document.getElementById('YanjerHeadCover').style.height = document.getElementById('YanjerHead').offsetWidth + 'px'
//文字位置
document.getElementById('YanjerTS').style.left = document.getElementById('YanjerHead').offsetWidth + 'px'
}
headResize()
window.addEventListener('resize', function() {
    headResize()
})
window.onload = function() {
    headResize()
}
setInterval(() => {
    headResize() 
}, 1000);

function HTMLcreateElement(E,location,index,innerHTML){
    let eE =document.createElement(E)
    eE.innerHTML = innerHTML
    document.getElementsByTagName(location)[index].appendChild(eE)
    // console.log(eE)
    // console.log(document.getElementsByTagName(location)[index])
}