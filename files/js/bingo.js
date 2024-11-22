Bingo_info = "圣洁月梨,雨雾白鹿,落忆枫音,魂归星墟"
Bingo_head_img = "YanjerTS"


document.getElementById("info").addEventListener("click", function() {
    this.setAttribute("info", Bingo_info)
    bingo(this) 

});
document.getElementById("head_img").addEventListener("click", function() {
    this.setAttribute("info", Bingo_head_img)
    bingo(this)
});


function getPosition(a){
    var e = event || window.event;
    x = e.screenX
    y = e.screenY
    if(a == 'x'){
        return x
    }
    if(a == 'y'){
        return y
    }
}    
function bingo(bingo) {
    ediv = document.body.appendChild(document.createElement('bingo'))
    x =  getPosition('x')
    y =  getPosition('y')
    ediv.innerHTML = bingo.getAttribute("info")
    console.log(bingo.info)
    console.log(bingo)
    // ediv.style.z-index = '999';
    ediv.style.position = "fixed"
    ediv.style.top = y + "px"
    ediv.style.left = x + "px"
    ediv.style.backgroundColor = "rgba(255,255,255,0.8)"
    ediv.style.color = "black"
    ediv.style.padding = "5px"
    ediv.style.borderRadius = "5px"
    ediv.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)"
    ediv.style.fontSize = "16px"
    ediv.style.width = "fit-content"
    ediv.style.zindex = '999'
    setTimeout(function() {
        document.body.getElementsByTagNameNS("*", "bingo")[0].remove()
    }, 2000)
}
