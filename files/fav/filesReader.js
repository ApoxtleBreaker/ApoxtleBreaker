/**
 * 读取文件并写入
 * @author YanjerTS <https://github.com/ApoxtleBreaker>
 * @license CC-1.0
 * @param {any} fileName  文件名
 * @param {any} inputAim  写入目标元素id
 * @example 
 * readArticle('personalSpace.html','ctn-personalSpace')//读取personalSpace.html并写入ctn-personalSpace
 */ 
function readArticle(fileName,inputAim){
    //本级url
    let url = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/';
    console.log(url)
    let aim = inputAim
    fetch(`${url}${fileName}`)
    .then(response => {return response.text()})
    .then(data => {
        async function InputContent(data,aim){
            let article = await data
            // console.log(article)
            document.getElementById(aim).innerHTML = article
        }
        InputContent(data,aim)
    })
}
readArticle(`gallery.html`,'ctn-gallery');