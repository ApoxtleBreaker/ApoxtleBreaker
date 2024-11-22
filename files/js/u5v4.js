var button = document.getElementById('button')
const audio = document.querySelector('audio')
const canvas = document.getElementById('Musicplayer_audioAnalyser')
const con = canvas.getContext('2d')

// // 初始化canvas的尺寸
canvas.width = document.getElementById('Musicplayer_audioAnalyser').offsetWidth // 窗口的内部宽度
canvas.height = document.getElementById('Musicplayer_audioAnalyser').offsetHeight //窗口的内部高度
document.body.style.backgroundColor = '#FFFF0000' // 背景颜色设置为黑色

// // 定义数组和音频分析器
let dataArray, analyser

function playMusic() {
    // 初始化
    audio.play()
    const audCon = new AudioContext() // 创建音频上下文
    const source = audCon.createMediaElementSource(audio) // 创建音频源节点
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
function stopMusic(){
    if(audio.paused){
        audio.play()
        // analyser.resume()
        playMusic()
    }else{
    audio.pause()
    analyser.pause()
}}
function nextMusic(){
    // i++
    // audio.src = musicArray[i]
   audio.src = musicArray[musicIndex+1]
}

let randomColor_state = 'color'
let ayaColor = 'skyblue'

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
    // len表示获取分析到的音频数据数组长度的
    // 这里除以2.5是剔除不经常出现的高频的部分
    const len = dataArray.length / 2.5
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
      con.fillRect(x1, y, barWidth - 2, barHeight)
      // 绘制左半部分波形图
      con.fillRect(x2, y, barWidth - 2, barHeight)
    }
  }


// audio.onplay = () => {
//   // 初始化
//   const audCon = new AudioContext() // 创建音频上下文
//   const source = audCon.createMediaElementSource(audio) // 创建音频源节点
//   // 创建音频分析器
//   analyser = audCon.createAnalyser()
//   // 快速傅里叶变换的长度必须为2的整数幂
//   analyser.fftSize = 512 // 这里把快速傅里叶变换的长度设置为512
//   // 连接音频源节点到音频分析器上
//   source.connect(analyser)
//   // 连接音频分析器到音频终端上
//   analyser.connect(audCon.destination)
//   // 创建数组，用于接收分析器节点的分析数据
//   // Uint8Array 数组类型表示一个 8 位无符号整型数组
//   // frequencyBinCount是fftSize值的一半作为可视化音频的数组长度
//   dataArray = new Uint8Array(analyser.frequencyBinCount)
// }

// // 把分析出的波形绘制到canvas上
// (function draw() {
//   // 动画帧，按帧绘制canvas
//   requestAnimationFrame(draw)
//   // 清空画布
//   const { width, height } = canvas
//   con.clearRect(0, 0, width, height)
//   // 让分析器节点分析出数据到数组中
//   analyser.getByteFrequencyData(dataArray)
//   // 设置canvas上下文绘制的颜色
//   con.fillStyle = 'skyblue'
//   // len表示获取分析到的音频数据数组长度的
//   // 这里除以2.5是剔除不经常出现的高频的部分
//   const len = dataArray.length / 2.5
//   // barWidth表示每个波形矩形的宽度
//   // 这里除以2是为了绘制对称的波形图
//   const barWidth = width / len / 2
//   for (let i = 0; i < len; i++) {
//     // data是8位数组的每个数据，因为是一个字节，即data的值都是 <= 255
//     const data = dataArray[i] 
//     // barHeight表示每个波形矩形的高度，值为单位长度乘canvas容器的高
//     const barHeight = (data / 255) * height
//     // 绘制点y
//     const y = height - barHeight
//     // 绘制点x1
//     const x1 = i * barWidth + width / 2
//     // 绘制点x2
//     const x2 = width / 2 - (i + 1) * barWidth
//     // 绘制右半部分波形图
//     con.fillRect(x1, y, barWidth - 2, barHeight)
//     // 绘制左半部分波形图
//     con.fillRect(x2, y, barWidth - 2, barHeight)
//   }
// })()