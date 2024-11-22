// debugger
// theme
//背景颜色
BGcolor = 'rgba(0, 0, 0, 0.371)'
//背景模糊  无则0
BGblur = 5//带单位px
// 进度条背景色
PgsBGcolor = 'rgba(255, 255, 255, 0.343)'
//进度条颜色
PgLineNowColor = 'rgb(42, 0, 193)'
//时间文字颜色
TimeTextColor = 'black'
//时间阴影颜色
TimeTextSDColor = 'black'
//控制器背景色
ControlColor = 'rgba(255, 255, 255, 0.327)'
//按钮<-边缘
ControlLastRadius = '100%'//无单位
//按钮<-颜色
ControlLastBGcolor = 'rgba(0, 0, 0, 0.455)'
//按钮||边缘
ControlStartRadius = '100%'//无单位
//按钮||颜色
ControlStartBGcolor = 'rgba(0, 0, 0, 0.455)'
//按钮->边缘
ControlNextRadius = '100%'//无单位
//按钮->颜色
ControlNextBGcolor = 'rgba(0, 0, 0, 0.455)'
//副控制器背景色
SubControlBGcolor = 'rgba(255, 255, 255, 0.321)'
//副控制器按钮颜色
SubControlBtnColor = "rgba(0, 0, 0, 0.455)"

//音乐颜色
setMusicColor(MusicColor1,BGblur,)
// function setMusicColor(BGcolor,){
    document.getElementById('audioAnalyser-message').style.backgroundColor = BGcolor
    document.getElementById('audioAnalyser-message').style.backdropFilter = `blur(${BGblur}px)`
    document.getElementById('audioAnalyser-message').style.webkitBackdropFilter = `blur(${BGblur}px)`
    document.getElementById('audioAnalyser-pogressBar-box').style.borderColor = PgsBGcolor
    document.getElementById('audioAnalyser-pogressNow').style.backgroundColor = PgLineNowColor
    document.getElementById('audioAnalyser-pogressTimeText').style.color = TimeTextColor
    document.getElementById('audioAnalyser-pogressTimeText').style.textShadow = `2px 2px 2px ${TimeTextSDColor}`
    document.getElementById('musicplayerControl').style.backgroundColor = ControlColor
    document.getElementById('musicLastbutton').style.borderRadius = ControlLastRadius
    document.getElementById('musicLastbutton').style.backgroundColor = ControlLastBGcolor
    document.getElementById('musicStatrbutton').style.borderRadius = ControlStartRadius
    document.getElementById('musicStatrbutton').style.backgroundColor = ControlStartBGcolor
    document.getElementById('musicNextbutton').style.borderRadius = ControlNextRadius
    document.getElementById('musicNextbutton').style.backgroundColor = ControlNextBGcolor
    document.getElementById('musicplayerControl_sub').style.backgroundColor = SubControlBGcolor
    document.getElementsByClassName('musicplayerButton_sub')[0].style.backgroundColor = SubControlBtnColor
    document.getElementsByClassName('musicplayerButton_sub')[1].style.backgroundColor = SubControlBtnColor
    document.getElementsByClassName('musicplayerButton_sub')[2].style.backgroundColor = SubControlBtnColor
    //!!!后续优化传三个参数 如果有三个就分别给三个 如果另外两个是undefined就给第一个的值

// }