base_url = document.location.href.split('Yanjer/')[0]+'Yanjer/';
//http://127.0.0.1:5516/creative%20project/ApoxtleBreaker_Yanjer/

function getBasicInfo() {

var BasicInfo_var_list = ['BasicInfo_info_name','BasicInfo_info_signature','D_content']

BasicInfo_info_name='鄢桀蚀荼-YanjerTS'
BasicInfo_info_signature='圣洁月梨,雨雾白鹿,落忆枫音,魂归星墟'
D_content =`
            <div id="contentBox">
                <div class="wave_contentBox_title">鄢桀蚀荼个人主页锐意制作中...</div>
                <div class="contentBox_page">
                    <div class="contentBox_page_title">关于我</div>
                    <div class="contentBox_page_content">
                        <p>鄢桀蚀荼-YanjerTS</p>
                        <p>生成测试内容</p>
                        <p>生成测试内容</p>
                        <p>生成测试内容</p>
                        <p>生成测试内容</p>
                        <p>生成测试内容</p>
                        <p>生成测试内容</p>
                        <p>生成测试内容</p>
                        <p>生成测试内容</p>
                        <p>生成测试内容</p>
                        <p>生成测试内容</p>
                        
                </div>
            </div>
            `
BasicInfo_var_list.forEach(variable => {
    var BasicInfo_script = `document.getElementById("${variable}").innerHTML = ${variable}`
    document.body.appendChild(document.createElement('script')).textContent = BasicInfo_script;
});
}
getBasicInfo()

//等效于
//document.getElementById("info_name").innerHTML = info_name;
//document.getElementById("info_signature").innerHTML = info_signature;
//用这个js执行把生成的js语句块插入html的js区域并执行生成的js语句块