document_base_url=base_url+'files/document/';
function readJSON(i)  {
    fetch(document_base_url+ 'main.json')
    .then(response => {
        // //响应状态
        // if (!response.ok) {
        //     throw new Error('响应错误');
        // }
        //解析json数据
    return response.json();
}) 
.then(jsonData => {
     //访问数据并写入
    const Sum = jsonData.Sum;
    content = jsonData[1].content
    //好烦啊 回头再写 不知道能不能这么写
    document.getElementById('content').innerHTML = content;
    document.getElementById('name_jp').innerHTML = jsonData.name.name_jp;
    document.getElementById('name_jp_2').innerHTML = jsonData.name.name_jp_2;
    document.getElementById('name_en').innerHTML = jsonData.name.name_en;
    document.getElementById('information').innerHTML = jsonData.information;
    document.getElementById('tags').innerHTML = `                       
                <span>${jsonData.tags[0]}</span>
                <span>${jsonData.tags[1]}</span>
                <span>${jsonData.tags[2]}</span>
                <span>${jsonData.tags[3]}</span>`
    console.log(jsonData);
    console.log("读取json文件成功");
})}