//动态加载JS和CSS
Element.prototype.loadJS = function(url) {
    let script = document.createElement('script');
    script.src =  `./src/js/${url}`;
    this.appendChild(script);
}

Element.prototype.loadLink = function(url) {
    let link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    this.appendChild(link);
}
//如果动态加载初始CSS会有闪烁现象，改为直接在HTML中加载 额外css才用动态加载
// document.body.loadLink('./assets/css/index.css');

//窗口自适应
let scrollToTop = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    })
}
let resize = () => {
    // document.body.style.height = window.innerHeight + "px"
    document.body.style.width = window.innerWidth + "px"
}
document.addEventListener("DOMContentLoaded", function() {resize();scrollToTop()})
document.addEventListener("load", function() {resize();scrollToTop()})
window.addEventListener("resize", resize)


//动态加载
document.addEventListener("DOMContentLoaded", function() {
    document.body.loadJS('-YANJER-MAIN.js');
    document.body.loadJS('tagNames.js');    
    document.body.loadJS('randomBg.js');
    document.body.loadJS('scroll.js');
    document.body.loadJS('eyeProtection.js');
    document.body.loadJS('sonPageJump.js');
    document.body.loadJS('screenNote.js');
})