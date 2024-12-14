document.getElementById("ArcID").addEventListener("click", function() {
    var id = document.getElementById("ArcID").innerText.match(/\d+/g).join("")
    console.log(id)
    navigator.clipboard.writeText(id)
    alert('已复制到剪贴板')
});