Linkgooo_allLinks = ['[Bili](main)','https://space.bilibili.com/1979641484','[Bili](MusicGame)','https://space.bilibili.com/1385605237','抖音','https://www.douyin.com/user/MS4wLjABAAAAtEKKUEiiVOQ6iCnh19-v9WUU86c3bsbWz4gLfP_rtwE','Github','https://github.com/ApoxtleBreaker','Twitter','https://x.com/ApoxtleBreaker','QQ','tencent://AddContact/?fromId=0&fromSubId=1&subcmd=all&uin=1215582857&website=www.oicqzone.com','粉丝群','https://qm.qq.com/q/sU5i5BxLTa','音游群','https://qm.qq.com/q/gfWghTWQp2','Steam','https://steamcommunity.com/id/ApoxtleNeverDie/']

let Linkgooo_links_herf = []
let Linkgooo_links_display_content = []

im = 0
while (Linkgooo_allLinks.length > im) {
Linkgooo_links_display_content.push(Linkgooo_allLinks[im])
im++
Linkgooo_links_herf.push(Linkgooo_allLinks[im])
im++
}
console.log(Linkgooo_links_display_content)
console.log(Linkgooo_links_herf)

Linkgooo_divbox = '<div class="Linkgooo_links"></div>'

for (var i = 0; i < Linkgooo_links_display_content.length; i++   ) {
console.log(Linkgooo_links_display_content.length)
var Linkgooo_innerdiv = document.getElementById('Linkgooo_box1-links').innerHTML += Linkgooo_divbox
}
var Linkgooo_links = document.getElementsByClassName("Linkgooo_links")

i1 = 0
while (Linkgooo_links.length > i1) {
    Linkgooo_links[i1].setAttribute("Data_Link", Linkgooo_links_herf[i1])
    Linkgooo_links[i1].innerHTML = Linkgooo_links_display_content[i1]
    i1++
}



i2 = 0
while (Linkgooo_links.length > i2) {
    Linkgooo_links[i2].addEventListener("click", function () {
        const Linkgooo_Link = document.createElement('a')
        Linkgooo_Link.href = this.getAttribute("Data_Link");
        Linkgooo_Link.target = "_blank";
        Linkgooo_Link.click();
        Linkgooo_Link.remove();
        Linkgooo_links[i2].setAttribute("Data_Link", '')
    });
    i2++
}

