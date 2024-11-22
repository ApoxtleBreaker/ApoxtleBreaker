
// musicIndex = document.getElementById("Value_musicIndex"); //number
// MusicPlayKey = document.getElementById("MusicPlayKey");
// MusicLastKey = document.getElementById("MusicLastKey");
// MusicNextKey = document.getElementById("MusicNextKey");
// MusicBackKey = document.getElementById("MusicBackKey");
// MusicAdvanceKey = document.getElementById("MusicAdvanceKey");
// MusicBackTime = document.getElementById("MusicBackTime");
// MusicAdvanceTime = document.getElementById("MusicAdvanceTime");


//musicMode 音乐模式 0关 1开
//musicIndex 音乐序号 0-length
//musicPlayKey 播放键 空格键
//musicLastKey 上一首键 左箭头
//musicNextKey 下一首键 右箭头
//musicBackKey 后退键 减号

displayMusicSetting()
function displayMusicSetting(){
    document.getElementById("musicSettingDisplayBox").innerHTML = `
            <p>音乐序号(1开始) ${musicIndex+1}</p>
            <p>开始/暂停播放 ${MusicPlayKey}</p>
            <p>上一首 ${MusicLastKey}</p>
            <p>下一首 ${MusicNextKey}</p>
            <p>后退'n' ${MusicBackKey}</p>
            <p>后退时间n: ${MusicBackTime}s</p>
            <p>前进'm' ${MusicAdvanceKey}</p>
            <p>前进时间m: ${MusicAdvanceTime}s</p>
            <p>页面归位 ${backToWindowTopKey}</p>
            <p style="color:red">提示:</p>
            <p style="color:red">没显示的为空格键 如果要设置空格也请输入" "不要引号</p>
            <p style="color:red">ArrowX方向是键盘上的方向键</p>
            <p style="color:red"> Down Up Left Right</p>

    `
}

function saveMusicSetting(){
    const musicSetting = []
    musicSetting.push(musicIndex)
    musicSetting.push("'"+MusicPlayKey+"'")
    musicSetting.push("'"+MusicLastKey+"'")
    musicSetting.push("'"+MusicNextKey+"'")
    musicSetting.push("'"+MusicBackKey+"'")
    musicSetting.push("'"+MusicAdvanceKey+"'")
    musicSetting.push("'"+MusicBackTime+"'")
    musicSetting.push("'"+MusicAdvanceTime+"'")
    musicSetting.push("'"+backToWindowTopKey+"'")
    console.log(musicSetting)
    alert("save your music setting")
    alert(musicSetting)
}
function loadMusicSetting(){
    document.getElementById("musicSettigInputBox").innerHTML = `
            <input type="text" id="musicSettigInput">
        `
        document.getElementById('top').removeEventListener('click', hideTop);        
    var e = document.getElementById("musicSettigInput")
    e.style.display = "bloack"
    e.style.height = "20%"
    e.style.width = "50%"
    e.style.position = "absolute"
    e.style.top = "50%"
    e.style.left = "4vw"
    // a.id = "musicSetting_input"
    var musicSetting = []
    setTimeout(() => {
        console.log(e)
        console.log(e.value)
        musicSetting = e.value
        document.getElementById('top').addEventListener('click', hideTop)
        displayMusicSetting()
    }, 10000)
    //0, ,ArrowDown,ArrowUp,ArrowLeft,ArrowRight,5,5
    //0,' ','ArrowDown','ArrowUp','ArrowLeft','ArrowRight','5','5'
    console.log(musicSetting)
    musicIndex = musicSetting[0]
    MusicPlayKey = musicSetting[1]
    MusicLastKey = musicSetting[2]
    MusicNextKey = musicSetting[3]
    MusicBackKey = musicSetting[4]
    MusicAdvanceKey = musicSetting[5]
    MusicBackTime = musicSetting[6]
    MusicAdvanceTime = musicSetting[7]
    backToWindowTopKey = musicSetting[8]
}