let 墨水屏 = () => {
    return document.body.style.filter = "grayscale(100%)";
}
let 护眼模式 = () => {
    return document.body.style.filter = "brightness(90%) sepia(20%)";
}
let 超低亮度模式 = () => {
    return document.body.style.filter = "brightness(50%)";
}



let 谁叫你不注意眼睛 = () => {
    return document.body.style.filter = "blur(5px)";
}

let eye = (n) =>{
switch(n){
    case 1:
        墨水屏();
        console.log("墨水屏模式");
        break;
    case 2:
        护眼模式();
        console.log("护眼模式");
        break;
    case 3:
        超低亮度模式();
        console.log("超低亮度模式");
        break;
    case 4:
        谁叫你不注意眼睛();
        console.log("谁叫你不注意眼睛");
        break;
    default:
        break;
}}