//内容数量
let ContentSum:number = document.getElementsByClassName("article-item").length
enum Type{
    Picture,//图片 //纯图片
    Video,//视频 //纯视频+标题+描述
    Audio,//音频 //纯音频
    Music,//音乐 //附带歌词等信息
    Article,//文章 //可选附带图片等信息 显示在中间 可格式化显示
    Post//说说 //可选附带图片等信息 显示在最后
}
interface Content {
    ID:number, //计数id
    Type:Type, //内容类型
    Date:string, //发布日期 yyyy-mm-dd hh:mm:ss
    Poster:string, //发布者
    Tag:string[], //标签
    Content:any[], //内容 //文字 + 图片/视频/音频/音乐  //文章:文字+其他数据+文字  按序排版
}
let AdminName:string = "YanjerTS"
const cnt1: Content = {
    ID: ContentSum++,
    Type: Type.Post,
    Date: new Date().toLocaleString(),
    Poster: AdminName,
    Tag: ['前端','TypeScript','自学'],
    Content: ['接触了一下TS才知道自己JS学的多烂 走一步算一步吧','https://picsum.photos/id/237/1000/600']
  };
const cnt2: Content = {
    ID: ContentSum++,
    Type: Type.Music,
    Date: new Date().toLocaleString(),
    Poster: AdminName,
    Tag: ['前端','TypeScript','自学'],
    Content: ['这是一段测试音频','aidoo.mp3','https://picsum.photos/id/237/1000/600','测试标题','测试歌手']
  };

let button = document.getElementById("addContent") as HTMLButtonElement | null
if(!button){console.log("没有找到按钮")}else{
    button.addEventListener("click",function(){addContent();alert("添加成功")})}
let contentList = document.getElementById("contentList") as HTMLDivElement | null
function addContent():void{
    if(!contentList){console.log("没有找到内容列表");return}else{
        contentList.innerHTML += addContentByType(cnt1)
        contentList.innerHTML += addContentByType(cnt2)
    }
}
function addContentByType(obj:Content){
    let content:string = `无内容`
    if(obj.Type === Type.Picture){
        content = `
            <div class="cntPctMsgBox">${obj.Content[0]}</div>
            <div class="cntPctImgBox">
            <img src="${obj.Content[1]}" alt="图片">
            </div>
            `
    }else if(obj.Type === Type.Video){
        content = `
            <div class="cntPctVidBox">
            <video src="${obj.Content[1]}" controls="controls" autoplay="autoplay" loop="loop" muted="muted"></video>
            <div class="cntPctMsgBox">${obj.Content[0]}</div>
            </div>
            `
    }else if(obj.Type === Type.Audio){
        content = `            
            <div class="cntAdoBox">
                <div class="cntAdoText">${obj.Content[0]}</div>
                <div class="audioCnt">
                    <audio src="${obj.Content[1]}" controls="controls"></audio>
                </div>
            </div>
            `
    }else if(obj.Type === Type.Music){
        content = `
            <div class="cntMscBox">
                <div class="cntMscText">${obj.Content[0]}</div>
                <div class="cntMucDisplay">
                    <div class="cntMucImgBox">
                        <img src="${obj.Content[2]}" alt="">
                    </div>
                    <div class="cntMucTitle">${obj.Content[3]}</div>
                    <div class="cntMucArtist">${obj.Content[4]}</div>
                    <audio src="${obj.Content[1]}" controls="controls"></audio>
                </div>
            </div>
            `
    }else if(obj.Type === Type.Article){
        content = `
        <div>   文章功能尚在测试中 敬请期待    </div>
        `
    }else  if(obj.Type === Type.Post){
        if(obj.Content[1] === undefined){
            obj.Content[1],obj.Content[2],obj.Content[3] = `undefined`,`undefined`,`undefined`
        }else if(obj.Content[2] === undefined){
            obj.Content[2],obj.Content[3] = `undefined`,`undefined`
        }else if(obj.Content[3] === undefined){
            obj.Content[3] = `undefined`
        }
        content = `
            <div class="cntPstBox">
                <div class="cntPstText">${obj.Content[0]}</div>
                <div class="cntPstImgBox">
                    <img src="${obj.Content[1]}" alt="">
                    <img src="${obj.Content[2]}" alt="">
                    <img src="${obj.Content[3]}" alt="">
                </div>
            </div>`
    }
    return content
}