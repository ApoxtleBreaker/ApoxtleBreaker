//标题更改
const title = document.createElement(`title`)
title.innerHTML = '字符生成器-YanjerUnicodeCharacter'
document.head.append(title)
//css引入
const link = document.createElement(`link`)
link.rel = 'stylesheet'
//// improtant debug
link.href = './main.css'//test定位
link.href = './files/expend/YanjerUnicodeCharacter/main.css'//expend定位
//// improtant debug
document.head.append(link)

document.body.innerHTML=`
输入太大范围会卡顿 需要时间加载 耐心等待<br>
42603~42606你可以看到动物细胞的有丝分裂<br>
1421和1422两个螺旋体像某个系统的相机还是相册图标
`

//<div id="bg"></div>
const bg = document.createElement(`div`)
bg.id = 'bg'
document.body.append(bg)

// <dialog id="rangeDoalog" open>
//<div id="rangeDiv">
//<span>请输入你要生成的范围：</span>
//<input id="numberStart" type="number" placeholder="开始(默认为0)">~
//<input id="numberEnd" type="number" placeholder="结束">
//<button id="confirmRange">确定</button>
//</div>
//</dialog>
const RangeDialog = document.createElement(`dialog`)
RangeDialog.id = 'rangeDialog'
RangeDialog.open = true
const rangeDiv = document.createElement(`div`)
rangeDiv.id = 'rangeDiv'
const span = document.createElement(`span`)
span.innerHTML = '请输入你要生成的范围：'
const numberStart = document.createElement(`input`)
numberStart.id = 'numberStart'
numberStart.type = 'number'
numberStart.placeholder = '开始(默认为0)'
const numberEnd = document.createElement(`input`)
numberEnd.id = 'numberEnd'
numberEnd.type = 'number'
numberEnd.placeholder = '结束'
const confirmRange = document.createElement(`button`)
confirmRange.id = 'confirmRange'
confirmRange.innerHTML = '确定'
rangeDiv.append(span,numberStart,numberEnd,confirmRange)
RangeDialog.append(rangeDiv)
document.body.append(RangeDialog)


{
let numberStart,numberEnd
document.getElementById('confirmRange').addEventListener('click',()=>{
    if(document.getElementById('numberStart').value == ''){
      numberStart = 0
      return
    }else{
        if(document.getElementById('numberStart').value % 1 != 0){
            alert('请输入整数')
            return
        }else{
            numberStart = document.getElementById('numberStart').value
        }
    }
    if(document.getElementById('numberEnd').value == ''){
        alert('请输入最终数字')
        return
    }else{
        if(document.getElementById('numberEnd').value % 1 != 0){
            alert('请输入整数')
            return
        }else{
            numberEnd = document.getElementById('numberEnd').value
        }
    }
    console.log(`范围：${numberStart}~${numberEnd}`)
    summon(numberStart,numberEnd)
    RangeDialog.close()
})
function summon(start,end){
    if(start == undefined || end == undefined){
        console.log('请先确定范围')
        alert('请先确定范围')
        return
    }
    if(start > end){
        console.log('开始数字不能大于结束数字')
        alert('开始数字不能大于结束数字')
        return
    }
    let chrDiv = document.createElement(`div`)
    chrDiv.setAttribute('class','chrDiv')
    let range = document.createElement(`span`)
    range.innerHTML = `范围：${start}~${end}`
    range.setAttribute('class','range')
    chrDiv.append(range)
    for(let i=start;i<end;i++){
        let character = document.createElement(`span`)
        character.setAttribute('class','character')
        character.innerHTML = String.fromCharCode(i)
        character.addEventListener('click',()=>{
            //复制到剪贴板
            let input = document.createElement('input')
            input.value = String.fromCharCode(i)
            document.body.append(input)
            input.select()
            document.execCommand('copy')
            input.remove()
            alert(`
已复制'${String.fromCharCode(i)}'到剪贴板
对应数字：${i}
Unicode编码：${i.toString(16)}
            `)
        })

        chrDiv.append(character)
    }
    document.body.append(chrDiv)

}

}
