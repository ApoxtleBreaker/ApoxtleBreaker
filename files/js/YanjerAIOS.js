hitHead = 0
let ProtectYanjerMode = '0'
document.getElementById("head_img").addEventListener("click", function() {
    hitHead ++
    if (hitHead == 10) {
        alert('再敲把你脑袋拔下来！')
    }
    if (hitHead == 30) {
        alert('你很闲吗？')
    }
    if (hitHead == 50) {
        alert('YanjerAIOS-systemProtectionMode Start')
    }
    if (hitHead > 50 && hitHead < 80) {
        alert('interferenct!!!')
        setAttackModeTimeout()
    }
    if (hitHead == 80) {
        alert('YanjerAIOS-system awaken ApoxtleBreaker')
        alert('ApoxtleBreaker-AttackMode Start!')
    }
    if (hitHead > 80 && hitHead < 90) {
        alert('interferenct!!!')
        console.log('Just a trick')
        document.getElementById("head_img").addEventListener("click", function() {
            const Defance_Link = document.createElement('a')
            Defance_Link.href = 'https://n.sinaimg.cn/sinakd2021112s/192/w1024h768/20210112/ccdd-khmynua7325209.jpg';
            Defance_Link.target = "_default";
            Defance_Link.click();
            Defance_Link.remove();
        });
    }
    if (hitHead == 108){
        alert('Game Over')
    }
    if (hitHead == 109) {
        alert('ApoxtleBreaker% I havr no time to play with you, silly girl!')
        if (ProtectYanjerMode == '1'){
            Attack();
        }else{
            document.getElementById("head_img").remove()
        }
    }
    
});

function Attack(){
    while(1 == 1){
        const AttackBox = document.createElement('div')
        AttackBox.style.position = "fixed";
        AttackBox.style.top = "0";
        AttackBox.style.left = "0";
        AttackBox.style.width = "90px";
        AttackBox.style.height = "90px";
            const AttackImg = document.createElement('img')
            AttackImg.src = "https://n.sinaimg.cn/sinakd2021112s/192/w1024h768/20210112/ccdd-khmynua7325209.jpg";
            AttackImg.style.width = "100%";
            AttackImg.style.height = "100%";
            AttackBox.appendChild(AttackImg);
            document.body.appendChild(AttackBox);
            for(let i = 0; i < 99999; i++){
                AttackBox.style.top = Math.random() * 1000 + "px";
                AttackBox.style.left = Math.random() * 1000 + "px";
                AttackBox.style.transform = "rotate(" + Math.random() * 360 + "deg)";
                AttackBox.style.opacity = Math.random();
                AttackBox.style.filter = "blur(" + Math.random() * 10 + "px)";
                AttackBox.style.backgroundColor = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 0.5 + ")";
                AttackBox.style.zIndex = Math.random() * 1000;
                setTimeout(function() {
                    AttackBox.remove()
                }, 10124)
            }
    }
}

function setAttackModeTimeout(){
    console.warn('YanjerAIOS-systemProtectionMode-Alpha')
    ProtectYanjerMode = '1'
    setTimeout(function() {
        ProtectYanjerMode = '0'
        console.log('Wran Off')
    }, 60000)
}