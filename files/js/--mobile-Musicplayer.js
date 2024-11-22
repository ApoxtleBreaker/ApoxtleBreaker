//music Mode
let  musicMode = 0
//进度条
let Musicplayer_music = document.getElementById('Musicplayer_analyzedMusic')
// Musicplayer_music = document.getElementById('Musicplayer_analyzedMusic')
//在服务器web环境获得文件地址前缀
MusicURL = Musicplayer_music.src

//初始化播放svg图标
// PlayingButton = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 15L8 18L8 6L13 9L13 9M13 9L18 12L18 12L13 15L13 15"><animate fill="freeze" attributeName="d" dur="0.6s" keyTimes="0;0.33;1" values="M13 15L8 18L8 6L13 9L13 9M13 9L18 12L18 12L13 15L13 15;M13 15L8 18L8 6L13 9L13 15M13 9L18 12L18 12L13 15L13 9;M9 18L7 18L7 6L9 6L9 18M15 6L17 6L17 18L15 18L15 6"/></path></svg>`
// StartButton = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#ffffff" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m1.99 7.234c-.292-.178-.6-.366-.88-.466a1.4 1.4 0 0 0-.586-.09a1.2 1.2 0 0 0-.632.24c-.368.278-.504.672-.569 1.01c-.061.314-.084.711-.109 1.144l-.003.046c-.015.276-.026.553-.026.807s.01.531.026.807l.003.046c.025.433.048.83.109 1.145c.065.337.2.731.57 1.008c.18.136.392.223.63.24c.225.017.426-.031.588-.09c.278-.1.587-.287.879-.465l.048-.03a9 9 0 0 0 1.113-.789l.04-.033c.301-.245.599-.488.811-.735c.254-.295.433-.648.433-1.104s-.18-.809-.433-1.104c-.212-.247-.51-.49-.81-.735l-.04-.033a10 10 0 0 0-.582-.445a10 10 0 0 0-.532-.345z"/></svg>`
// LastButton = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#ffffff" d="M3 5.8A1.8 1.8 0 0 1 4.8 4h1.4A1.8 1.8 0 0 1 8 5.8v12.4A1.8 1.8 0 0 1 6.2 20H4.8A1.8 1.8 0 0 1 3 18.2zm18.462-1.687A1 1 0 0 1 22 5v14a1 1 0 0 1-1.573.82l-10-7a1 1 0 0 1 0-1.64l10-7a1 1 0 0 1 1.035-.067"/></svg>`
// NextMusic = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#ffffff" fill-rule="evenodd" d="M2.538 4.113a1 1 0 0 1 1.035.068l10 7a1 1 0 0 1 0 1.638l-10 7A1 1 0 0 1 2 19V5a1 1 0 0 1 .538-.887M16 5.8A1.8 1.8 0 0 1 17.8 4h1.4A1.8 1.8 0 0 1 21 5.8v12.4a1.8 1.8 0 0 1-1.8 1.8h-1.4a1.8 1.8 0 0 1-1.8-1.8z" clip-rule="evenodd"/></svg>`

PlayingButton = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 15" id="Layer_15"><path d="M23,6H9A3,3,0,0,0,6,9V23a3,3,0,0,0,3,3H23a3,3,0,0,0,3-3V9A3,3,0,0,0,23,6ZM24,23a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V9A1,1,0,0,1,9,8H23a1,1,0,0,1,1,1Z"/></g></svg>`
StartButton = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 13" id="Layer_13"><path d="M25.11,13.72l-12.16-7A2.14,2.14,0,0,0,9.73,8.55v14a2.14,2.14,0,0,0,3.21,1.85l12.16-7a2.14,2.14,0,0,0,0-3.71Zm-1,2-12.16,7a.14.14,0,0,1-.21-.12v-14a.13.13,0,0,1,.07-.12l.07,0a.14.14,0,0,1,.07,0l12.16,7a.14.14,0,0,1,0,.24Z"/></g></svg>`
LastButton = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 12" id="Layer_12"><path d="M22.55,7.36a2.12,2.12,0,0,0-2.14,0l-12.16,7a2.14,2.14,0,0,0,0,3.71l12.16,7a2.14,2.14,0,0,0,3.21-1.85v-14A2.12,2.12,0,0,0,22.55,7.36Zm-.93,15.9a.13.13,0,0,1-.07.12.13.13,0,0,1-.14,0l-12.16-7a.14.14,0,0,1,0-.25l12.16-7a.14.14,0,0,1,.07,0l.07,0a.13.13,0,0,1,.07.12Z"/><path d="M5.8,6.6a1,1,0,0,0-1,1V24.24a1,1,0,0,0,2,0V7.6A1,1,0,0,0,5.8,6.6Z"/></g></svg>`
NextMusic = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 14" id="Layer_14"><path d="M22.08,14.15h0l-12.16-7A2.14,2.14,0,0,0,6.7,9V23a2.14,2.14,0,0,0,3.21,1.85l12.16-7a2.14,2.14,0,0,0,0-3.71Zm-1,2-12.16,7A.14.14,0,0,1,8.7,23V9a.13.13,0,0,1,.07-.12l.07,0a.14.14,0,0,1,.07,0l12.16,7a.13.13,0,0,1,.07.12A.13.13,0,0,1,21.08,16.12Z"/><path d="M24.52,7a1,1,0,0,0-1,1V24.64a1,1,0,0,0,2,0V8A1,1,0,0,0,24.52,7Z"/></g></svg>`
function alertTest(){
    alert("Hello World!")
}
//添加音乐索引函数 => ADD.js
function addMusic(fileUrl,cover,name,artist) {
    if(fileUrl==null || fileUrl=="" || fileUrl==" ") {
        return;
    }else{
        if(MusicURL+fileUrl+'.mp3'){
            musicArray.push(MusicURL+fileUrl+'.mp3')
        }else{
            alert("Audio File not found");
            return;
        }
    }
    if(cover != null && cover != "" && cover != " "){
        if(`${MusicURL}/cover/${cover}.png`){
            musicArrayCover.push(`${MusicURL}/cover/${cover}.png`)

        }else{
            musicArrayCover.push(`${MusicURL}/cover/--UNSET.png`)
        }
    }else{
        musicArrayCover.push(`${MusicURL}/cover/--UNSET.png`)
    }
    if(name != null && name != "" && name != " "){
        musicArray_name.push(name)
    }else{
        musicArray_name.push("Unknown")
    }
    if(artist != null && artist != "" && artist != " "){
        musicArray_artist.push(artist)
    }else{
        musicArray_artist.push("Unknown")
    }
    if(musicArray==''&& musicArrayCover==''&& musicArray_name==''&& musicArray_artist==''){
        return
    }
}

//音乐索引目标id
let musicIndex = 0
//先让初始化加载完毕再延后加载音乐匹配数据
setTimeout(() => {
    updateMusicSetting()
}, 1000);
//更新显示数据
function updateMusicSetting(){
    document.getElementById('audioAnalyser-message-img').src = musicArrayCover[musicIndex]
    document.getElementById('audioAnalyser-message-name-text').innerHTML = `  ${musicArray_name[musicIndex]}`//  ${musicArray_name[musicIndex]}
    document.getElementById('audioAnalyser-message-artist-text').innerHTML = `  ${musicArray_artist[musicIndex]}`//  ${musicArray_artist[musicIndex]}
    Musicplayer_music.src = musicArray[musicIndex]

    const titleText = document.getElementById('audioAnalyser-message-name-text')
    const artistText = document.getElementById('audioAnalyser-message-artist-text')
    const titleBox = document.getElementById('audioAnalyser-message-name')
    const artistBox = document.getElementById('audioAnalyser-message-artist')
    if(titleText.offsetWidth > titleBox.offsetWidth){
        textScrollSpeed_title = titleText.offsetWidth/1000*12
        titleText.style.animationDuration = `${textScrollSpeed_title}s`  
        titleText.style.animationName = `titleMove` 
    }else{
        titleText.style.animationDuration = `0s`
        titleText.style.animationName = ` ` 
    }
    if(artistText.offsetWidth > artistBox.offsetWidth){
        textScrollSpeed_artist = artistText.offsetWidth/1000*10
        artistText.style.animationDuration = `${textScrollSpeed_artist}s`
        titleText.style.animationName = `titleMove` 
    }else{
        artistText.style.animationDuration = `0s`
        titleText.style.animationName = ` ` 
    }
    console.log(document.getElementById('audioAnalyser-message-name-text').offsetWidth)
    console.log(document.getElementById('audioAnalyser-message-name').offsetWidth)
}
//结束自动切换下一首
document.getElementById('Musicplayer_analyzedMusic').addEventListener('ended',nextMusic)

//播放
function playMusic() {
    // updateMusicSetting()
    // Musicplayer_music.src = musicArray[musicIndex]
    //暂停状态 
    if(Musicplayer_music.paused){
        // 先更新数据X 时间会归0
        // updateMusicSetting()
        // 更新播放器图标从|>到||
        document.getElementById('musicStatrbutton').innerHTML = PlayingButton
        //音乐播放
        Musicplayer_music.play()
        //示波器显示
        MusicPogressBar()
        analyserMusic()
    }else{    
        // 更新播放器图标从||到|>
        document.getElementById('musicStatrbutton').innerHTML = StartButton   
        //音乐暂停
        Musicplayer_music.pause()
        // 示波器暂停(关闭)
        analyser.pause()
    }
    // uploaderMusicMode()
}
//下一首
function nextMusic(){ 
    //不管到哪都重置时间
    Musicplayer_music.currentTime = 0
    //如果是最后一首，则从头开始
    if(musicIndex == musicArray.length-1){
        musicIndex = 0
    }else{
        //下一首
        musicIndex++
    }
    //优化测试: 这部分判断好像不需要
    // if(Musicplayer_music.paused){
    //     document.getElementById('musicStatrbutton').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 15L8 18L8 6L13 9L13 9M13 9L18 12L18 12L13 15L13 15"><animate fill="freeze" attributeName="d" dur="0.6s" keyTimes="0;0.33;1" values="M13 15L8 18L8 6L13 9L13 9M13 9L18 12L18 12L13 15L13 15;M13 15L8 18L8 6L13 9L13 15M13 9L18 12L18 12L13 15L13 9;M9 18L7 18L7 6L9 6L9 18M15 6L17 6L17 18L15 18L15 6"/></path></svg>'
    //     Musicplayer_music.play()
    //     updateMusicSetting()
    //     analyserMusic()
    // }
        updateMusicSetting()
        Musicplayer_music.play()
        // uploaderMusicMode()   

        analyserMusic()
        MusicPogressBar()
    }
//上一首
function lastMusic(){ 
    Musicplayer_music.currentTime = 0
    if(musicIndex == 0){
        musicIndex = musicArray.length-1
    }else{
        musicIndex--
    }
    //优化测试: 这部分判断好像不需要
    // if(Musicplayer_music.paused){
    //     document.getElementById('musicStatrbutton').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 15L8 18L8 6L13 9L13 9M13 9L18 12L18 12L13 15L13 15"><animate fill="freeze" attributeName="d" dur="0.6s" keyTimes="0;0.33;1" values="M13 15L8 18L8 6L13 9L13 9M13 9L18 12L18 12L13 15L13 15;M13 15L8 18L8 6L13 9L13 15M13 9L18 12L18 12L13 15L13 9;M9 18L7 18L7 6L9 6L9 18M15 6L17 6L17 18L15 18L15 6"/></path></svg>'
    //     Musicplayer_music.play()
    //     updateMusicSetting()
    //     analyserMusic()
    // }
    updateMusicSetting()
    Musicplayer_music.play()
    // uploaderMusicMode()
    analyserMusic()
    MusicPogressBar()
}


let dataArray, analyser
// // 定义数组和音频分析器
function analyserMusic(){
    const audCon = new AudioContext() // 创建音频上下文
    const source = audCon.createMediaElementSource(Musicplayer_music) // 创建音频源节点
    // 创建音频分析器
    analyser = audCon.createAnalyser()
    // 快速傅里叶变换的长度必须为2的整数幂
    analyser.fftSize = 512 // 这里把快速傅里叶变换的长度设置为512
    // 连接音频源节点到音频分析器上
    source.connect(analyser)
    // 连接音频分析器到音频终端上
    analyser.connect(audCon.destination)
    // 创建数组，用于接收分析器节点的分析数据
    // Uint8Array 数组类型表示一个 8 位无符号整型数组
    // frequencyBinCount是fftSize值的一半作为可视化音频的数组长度
    dataArray = new Uint8Array(analyser.frequencyBinCount)
    draw()
}
let randomColor_state = 'color'
let ayaColor = 'rgb(15,36,125)'
let crazy_rainbow = 'crazy_rainbow'
let rainbow = 'rainbow'
let color = 'color'
function analyserColor(state) {
    var state0 = randomColor_state
    if(state == 'crazy_rainbow'){
        randomColor_state = 'crazy_rainbow'
        console.log(`state: ${state0} -> ${state}`)
    }
    if(state == 'rainbow'){
        randomColor_state = 'rainbow'
        console.log(`state: ${state0} -> ${state}`)
    }
    if(state == 'color'){
        randomColor_state = 'color'
        console.log(`state: ${state0} -> ${state}`)
    }
    if(state != 'color' && state != 'crazy_rainbow' && state != 'rainbow'){
        console.log(`
|unsupported state '${state}'
|plese input 'analyserColor(state)'or'analyserColor('state')' to change color state
|state: 'crazy_rainbow' | 'rainbow'  |   color   
|you can change circle color by 'colorSet('color')'`)
                console.log(`
|不支持的状态 '${state}'
|请输入 'analyserColor(state)'或'analyserColor('state')' 更改颜色
|状态: 'crazy_rainbow' | 'rainbow'  |   color   
|你可以更改默认颜色值 通过 'colorSet('color')'`)
                        }
}
function colorSet(color){
    ayaColor = color    
    console.log(`color is '${color}' now`)
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';    
    for (var i = 0; i < 6; i++) {
    if(randomColor_state == 'crazy_rainbow'){
        color += letters[Math.floor(Math.random() * 16)];    
    }
    if(randomColor_state == 'rainbow'){
        color += letters[Math.floor(Math.random() * 32)*0.5];    
    }
}
    return color;
}
  // 把分析出的波形绘制到canvas上
  function draw() {
    // 动画帧，按帧绘制canvas
    requestAnimationFrame(draw)
    // 清空画布
    const { width, height } = canvas
    con.clearRect(0, 0, width, height)
    // 让分析器节点分析出数据到数组中
    analyser.getByteFrequencyData(dataArray)
    // 设置canvas上下文绘制的颜色
    if(randomColor_state == 'color'){
        con.fillStyle = ayaColor   
    }else{
        con.fillStyle = randomColor()
    }
    var grd=con.createLinearGradient(0,0,width,0);
    // var grd=con.createRadialGradient(width  ,height/2,15,90,height/2,width/2);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");
    
    // con.fillStyle=grd;

    // len表示获取分析到的音频数据数组长度的
    // 这里除以2.5是剔除不经常出现的高频的部分
    const len = dataArray.length / 2.3
    // barWidth表示每个波形矩形的宽度
    // 这里除以2是为了绘制对称的波形图
    const barWidth = width / len / 2

    for (let i = 0; i < len; i++) {
      // data是8位数组的每个数据，因为是一个字节，即data的值都是 <= 255
      const data = dataArray[i] 
      // barHeight表示每个波形矩形的高度，值为单位长度乘canvas容器的高
      const barHeight = (data / 255) * height
      // 绘制点y
      const y = height - barHeight
      // 绘制点x1
      const x1 = i * barWidth + width / 2 
      // 绘制点x2
      const x2 = width / 2 - (i + 1) * barWidth
      // 绘制右半部分波形图
    //   密集度宽度
      con.fillRect(x1, y, barWidth - 0, barHeight)
      // 绘制左半部分波形图
      con.fillRect(x2, y, barWidth - 0, barHeight)
        }
  }

// var musicMode = 0
// let musicMode = '1'
// musicModeSwitch()
document.getElementById('musicModeSwitch').addEventListener(touchOrClick,musicModeSwitch)
document.getElementById('musicBox').style.display = 'none'
function musicModeSwitch(){
    if(musicMode == 0){
        musicMode = 1
        //隐藏mainBox
        document.getElementById('mianBox').setAttribute('class','hidden')
        //隐藏characterBox按钮
        // document.getElementById('box1-character').setAttribute('class','hidden')
        //如果是打开状态 先关闭
        if(document.getElementById('cancleCharacterBox')!= null){
            document.getElementById('cancleCharacterBox').click()
        }
        //显示musicBox
        document.getElementById('musicBox').style.display = 'block'
        document.getElementById('musicBox').innerHTML = `<div id="M_content"></div>`
        document.getElementById('M_content').innerHTML = `
            <div id="musicplayer">
                <div id="audioAnalyser-box"><canvas id="Musicplayer_audioAnalyser"></canvas></div>
                <div id="audioAnalyser-pogressBar-box">
                    <div id="audioAnalyser-pogressAll"></div>
                    <div id="audioAnalyser-pogressNow"></div>
                    <div id="audioAnalyser-pogressTimeText">00:00</div>
                </div>
                <div id="audioAnalyser-message">
                    <span id="audioAnalyser-message-img-box"><img id="audioAnalyser-message-img" src="./files/audio/music/cover/UNSET.png" alt=""></span>
                    <span id="audioAnalyser-message-name">  <span id="audioAnalyser-message-name-text">title  </span></span>
                    <span id="audioAnalyser-message-artist">  <span id="audioAnalyser-message-artist-text">artist </span></span>
                </div>
                <div id="musicplayerControl">
                    <button id="musicLastbutton" class="musicplayerButton" onclick="lastMusic()">上一个</button>
                    <button id="musicStatrbutton" class="musicplayerButton" onclick="playMusic()">播放</button>
                    <button id="musicNextbutton" class="musicplayerButton" onclick="nextMusic()">下一个</button>
                </div>
                <div id="musicplayerControl_sub">
                    <button class="musicplayerButton_sub">播放模式</button>
                    <button class="musicplayerButton_sub">列表</button>
                    <button class="musicplayerButton_sub">音量</button>
                </div>
            </div>`
        document.body.style.scrollbarWidth = 'none'
        updateMusicSetting()
        setTimeout(() => {
            window.scrollTo({
                top: Scroll_mianTop,
                left: 0,
                behavior: 'smooth'
            });
        }, 300);
        musicModeSet()

                



        // debugger
        // setTimeout(() => {
        //     uploaderMusicMode()
        // }, 1000)


    }else{
        musicMode = 0
        document.getElementById('mianBox').setAttribute('class','')
        document.getElementById('musicBox').style.display = 'none'

        // document.getElementById('content').innerHTML = `<div id="D_content"></div>`
        
        // document.getElementById('Linkgooo_box1-links').setAttribute('class',' ')
        // document.getElementById('box1-character').setAttribute('class',' ')
        // document.getElementById('Linkgooo_box1-links').style.display = 'block'
        // document.getElementById('box1-character').style.display = 'flex'
        // document.getElementById('box2').style.width = '90%'
        // document.getElementById('box2').innerHTML = box2
        // document.getElementById('audioAnalyser-message-img').style.display = 'block'
        // document.getElementById('audioAnalyser-message-name').style.display = 'block'
        // document.getElementById('audioAnalyser-message-artist').style.display = 'block'
        // document.getElementById('audioAnalyser-pogressBar-box').setAttribute('class','hidden')
    }
}

//   设置音乐模式内容
let canvas,con
function musicModeSet(){
    canvas = document.getElementById('Musicplayer_audioAnalyser')
    con = canvas.getContext('2d')

    document.getElementById("audioAnalyser-pogressAll").addEventListener("click", changeProcess);
    document.getElementById('musicStatrbutton').innerHTML = StartButton
    document.getElementById('musicLastbutton').innerHTML = LastButton
    document.getElementById('musicNextbutton').innerHTML = NextMusic
}
// function uploaderMusicMode(){
//      //testmode
//      document.getElementById('audioAnalyser-message--musicmode-img').src = document.getElementById('audioAnalyser-message-img').src
//      document.getElementById('audioAnalyser-message--musicmode-name').innerHTML=document.getElementById('audioAnalyser-message-name').innerText
//      document.getElementById('audioAnalyser-message--musicmode-artist').innerHTML=document.getElementById('audioAnalyser-message-artist').innerText
// }

MusicPogressBarTimeIndex = 1
let MusicplayerNow = 0
function setPogressTime(){
    //计算此时时间
    const MusicplayerNowA = Musicplayer_music.currentTime
    const MusicplayerNow_s = MusicplayerNowA%60
    const MusicplayerNow_min = (MusicplayerNowA-MusicplayerNow_s)/60
    // MusicplayerNow = `${Math.floor(MusicplayerNow_min)}:${Math.floor(MusicplayerNow_s)}`
    MusicplayerNow = `${Math.floor(MusicplayerNow_min)}:${MusicplayerNow_s.toFixed(MusicPogressBarTimeIndex)}`
    //计算总时间
    const MusicplayerDurationA = Musicplayer_music.duration
    const MusicplayerDuration_s = MusicplayerDurationA%60
    const MusicplayerDuration_min = (MusicplayerDurationA-MusicplayerDuration_s)/60
    const MusicplayerDuration = `${Math.floor(MusicplayerDuration_min)}:${MusicplayerDuration_s.toFixed(MusicPogressBarTimeIndex)}`
    //写入时间
    document.getElementById('audioAnalyser-pogressTimeText').innerHTML = `${MusicplayerNow} / ${MusicplayerDuration}`
    //更新进度条
    document.getElementById('audioAnalyser-pogressNow').style.width = (MusicplayerNowA/Musicplayer_music.duration)*100+'%'
    // console.log('当前进度:'+(MusicplayerNowA/Musicplayer_music.duration)*100+'%')   //调试 
}
function MusicPogressBar(){
    setInterval(setPogressTime,10)
}


//点击进度条跳转
//!!!点击位置和实际位置任有偏移  原因位置  暂时乘系数k=1.25归位 但是音频会不对位置
//!!!屎山改着改着就正常了  不要动了

function changeProcess(e) {
    //获取点击元素的宽度
    var element = document.getElementById("audioAnalyser-pogressAll");
    var width = element.clientWidth;

    //getBoundingClientRect() 获取元素的位置
    var rect = element.getBoundingClientRect();

    //计算鼠标点击位置相对于元素的 X 坐标
    var clientX = (e.clientX - rect.left)*1.25; // 确保得到的是鼠标相对于元素左边缘的距离

    // console.log('鼠标相对于点击元素的X坐标:', clientX);//调试
    
    //计算进度
    var process = clientX /width;
    // var process_U =(clientX /width)*1.25;
    Musicplayer_music.currentTime = process * Musicplayer_music.duration;
    // MusicplayerNow = Musicplayer_music.currentTime;
    setPogressTime();
}

