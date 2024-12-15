const jumpE = document.createElement("div");
jumpE.style.position = "fixed";
jumpE.style.top = "0";
jumpE.style.left = "0";
jumpE.style.width = "100%";
jumpE.style.height = "100%";
jumpE.style.backgroundColor = "rgba(255, 255, 255)";
jumpE.id = "jump";
// jumpE.style.backgroundImage = "url(./files/MusicGame/Arc_bg/world2.jpg)";
// jumpE.style.backgroundSize = "cover";
// jumpE.style.backgroundPositionY = "center"; 
const jumpChild = document.createElement("div");
jumpChild.style.position = "absolute";
jumpChild.style.top = "50%";
jumpChild.style.left = "50%";
jumpChild.style.transform = "translate(-50%, -50%)";
jumpChild.style.color = "black";
jumpChild.style.fontSize = "8em";
jumpChild.style.textAlign = "center";
jumpChild.style.whiteSpace = "wrap";
jumpChild.innerHTML = 
`源     神<br/>
谁寄吧爱玩谁玩`;
jumpE.appendChild(jumpChild);


window.onload = function() {
    document.body.appendChild(jumpE);
    setTimeout(() => {
        jumpE.remove()
    }, 3000);
}
