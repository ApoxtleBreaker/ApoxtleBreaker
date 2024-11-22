function IsPhone() {
    //获取浏览器navigator对象的userAgent属性（浏览器用于HTTP请求的用户代理头的值）
    var info = navigator.userAgent;
    //通过正则表达式的test方法判断是否包含“Mobile”字符串
    var isPhone = /mobile/i.test(info);
    //如果包含“Mobile”（是手机设备）则返回true
    return isPhone;
}
redirect()
function redirect(){
    if (IsPhone() == true) {
        console.log("你正在使用手机设备！");
        alert("你正在使用手机设备！");
        confirm("接下来将跳转至测试版移动端页面");
        window.location.href = "./mobile.index.html";
        document.body.style.width = window.innerWidth + "px";

    } else {
        // window.location.href = "./index.html";
        //如果是PC设备，则执行以下代码
        //alert("你正在使用PC设备！");
    }
}