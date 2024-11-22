var Scroll_mianTop = document.getElementById("mianBox").offsetTop
var Scroll_box1Top = document.getElementById("box1-character").offsetTop

//加载时隐藏导航栏
window.onload = function() {
    window.scrollTo({
        top: Scroll_mianTop,
        left: 0,
        behavior: 'smooth'
    });
};
//鼠标移出box1-character时，滚动到顶部 小窗可以看到头像
document.getElementById('box1-character').addEventListener('mouseout', function() {
    document.getElementById('box1-character').scrollTo({
        top: Scroll_box1Top,
        behavior:'smooth'
    });
});

//点击导航栏显示扩展顶部
document.getElementById('header').addEventListener('click', scrollToTop);
function scrollToTop() {
    //回到导航栏顶端
    document.getElementById('top').setAttribute('class', '');
    window.scrollTo({
        top: document.getElementById('header').offsetTop,
    });
    //从导航栏顶端滑到扩展顶部
    window.scrollTo({
        top: document.getElementById('top').offsetTop,
        behavior:'smooth'
    });
    //显示后删除监听导航栏的动画
    document.getElementById('header').removeEventListener('click', scrollToTop);
}

//点击扩展顶部隐藏顶部并回到导航栏
function hideTop() {
    window.scrollTo({
        top: document.getElementById('header').offsetTop,
        behavior:'smooth'
    });
    setTimeout(() => {
        document.getElementById('top').setAttribute('class', 'hidden');
        document.getElementById('header').addEventListener('click', scrollToTop);
        //页面回滚后再恢复监听 防止反复滑动抽搐
    }, 500);
}
document.getElementById('top').addEventListener('click', hideTop);
//M键复位
backToWindowTopKey = 'm'
document.addEventListener('keydown', function(event){
    if (event.key === backToWindowTopKey) {
        event.preventDefault()
    window.scrollTo({
        top: Scroll_mianTop,
        left: 0,
        behavior: 'smooth'
    });}
})

