touchOrClick = 'touchstart'
// touchOrClick = 'click'
// document.getElementById('tapTactics').addEventListener(touchOrClick, function() {
//     if(touchOrClick == 'touchstart'){
//         touchOrClick = 'click'
//         document.getElementById('tapTactics').innerHTML = '点击策略:click(200ms)'
//     }else{
//         touchOrClick = 'touchstart'
//         document.getElementById('tapTactics').innerHTML = '点击策略:touchstart'
//     }
// });

var characterBox = document.getElementById('box1-character')
var characterBoxHead = document.getElementById('head')

//默认隐藏characterBox
hiddenCharacterBox()
function hiddenCharacterBox() {
    //防止改完id识别不到
var characterBox = document.getElementById('box1-character')
if (characterBox!= null) {
    characterBox.id = 'box1-character'
}
var characterBox_display = document.getElementById('box1-character--display')
if (characterBox_display!= null) {
    characterBox_display.id = 'box1-character'
}
// debugger
//下面执行 但是无效
//重新设定变量BoxHead就好了
var characterBoxHead = document.getElementById('head')
//添加点击显示characterBox事件
characterBoxHead.addEventListener(touchOrClick, displayCharacter)
//改成小按钮尺寸
characterBoxHead.style.height = '20px'
characterBoxHead.style.width = '20px'
characterBoxHead.style.minHeight = '20px'
characterBoxHead.style.minWidth = '20px'
// debugger
}
//显示characterBox
function displayCharacter() {
    //加入characterBox显示内容
characterBox.innerHTML = `
        <div id="head"><div id="head_img"></div></div>
        <div id="info">
            <div id="BasicInfo_info_name"></div>
            <div id="BasicInfo_info_signature"></div>
        </div>
        <div class="BasicInfo_exehibition"><img src="./files/setting/宵崎奏大联合.png" alt=""></div>
        <div class="BasicInfo_exehibition"><img src="./files/setting/腱鞘炎.png" alt=""></div>
        <div class="BasicInfo_exehibition  "><img src="./files/setting/after_training.png" alt=""></div>
        <div id="cancleCharacterBox"></div>
`
//加入内容后滚到顶部
hideTop()
//获取基本信息填写
getBasicInfo()
//把characterBox的id更改变成显示状态的style
characterBox.id = 'box1-character--display'
//把前面设置的小按钮数据清除
characterBoxHead.style.height = 'unset'
characterBoxHead.style.width = 'unset'
characterBoxHead.style.minHeight = 'unset'
characterBoxHead.style.minWidth = 'unset'
// characterBox.innerHTML =+ CharacterBoxChildren.shift()
document.getElementById('cancleCharacterBox').addEventListener(touchOrClick, function() {
    iCharacterBox = characterBox.childNodes.length
while (iCharacterBox >= 0) {
    if(characterBox.childNodes[2]!= undefined){
        characterBox.childNodes[2].remove()
        iCharacterBox--
    }else{
        hiddenCharacterBox()
        return
    }
}
})
}

