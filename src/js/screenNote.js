// 窗口数据类
class WindowData {
    constructor() {
        this.content = ""
        this.title = ""
        this.x = 100
        this.y = 100
        this.width = 400
        this.height = 300
        this.isFolded = false
        this.isFullScreen = false
        this.originalWidth = 400
        this.originalHeight = 300
        this.originalX = 100
        this.originalY = 100
        this.positionMode = "absolute" // 定位模式：absolute 或 fixed
        this.animationDuration = 300 // 动画持续时间（毫秒）
        this.animationType = "scaleUpFade" // 动画类型
    }
    
    setContent(content) {
        this.content = content
    }
    
    setTitle(title) {
        this.title = title
    }
    
    setPosition(x, y) {
        this.x = x
        this.y = y
    }
    
    setSize(width, height) {
        this.width = width
        this.height = height
    }
    
    setPositionMode(mode) {
        if (mode === "absolute" || mode === "fixed") {
            this.positionMode = mode
        }
    }
    
    setAnimation(duration, type = "scaleUpFade") {
        this.animationDuration = duration
        this.animationType = type
    }
}

// 窗口元素类
class ScreenNote {
    constructor(windowData) {
        this.data = windowData || new WindowData()
        this.element = null
        this.titleElement = null
        this.contentElement = null
        this.buttonContainer = null
        this.closeBtn = null
        this.foldBtn = null
        this.fullScreenBtn = null
        this.isDragging = false
        this.dragOffset = { x: 0, y: 0 }
        this.isAnimating = false
        
        this.createElement()
        this.setupEventListeners()
        this.setupAnimation()
    }
    
    createElement() {
        // 创建主窗口元素
        this.element = document.createElement("div")
        this.element.className = "screen-note"
        
        // 创建标题栏
        const titleBar = document.createElement("div")
        titleBar.className = "title-bar"
        
        // 创建标题
        this.titleElement = document.createElement("h3")
        this.titleElement.className = "note-title"
        this.titleElement.textContent = this.data.title
        
        // 创建按钮容器
        this.buttonContainer = document.createElement("div")
        this.buttonContainer.className = "window-buttons"
        
        // 创建三个窗口控制按钮
        this.closeBtn = document.createElement("button")
        this.closeBtn.className = "window-btn close-btn"
        this.closeBtn.innerHTML = "×"
        this.closeBtn.title = "关闭"
        
        this.foldBtn = document.createElement("button")
        this.foldBtn.className = "window-btn fold-btn"
        this.foldBtn.innerHTML = "−"
        this.foldBtn.title = "折叠"
        
        this.fullScreenBtn = document.createElement("button")
        this.fullScreenBtn.className = "window-btn fullscreen-btn"
        this.fullScreenBtn.innerHTML = "□"
        this.fullScreenBtn.title = "全屏"
        
        // 添加按钮到容器
        this.buttonContainer.appendChild(this.closeBtn)
        this.buttonContainer.appendChild(this.foldBtn)
        this.buttonContainer.appendChild(this.fullScreenBtn)
        
        // 添加标题和按钮到标题栏
        titleBar.appendChild(this.titleElement)
        titleBar.appendChild(this.buttonContainer)
        
        // 创建内容区域
        this.contentElement = document.createElement("div")
        this.contentElement.className = "note-content"
        this.contentElement.innerHTML = this.data.content
        
        // 组装窗口
        this.element.appendChild(titleBar)
        this.element.appendChild(this.contentElement)
        
        // 设置样式
        this.updateElementStyle()
    }
    
    setupAnimation() {
        // 添加动画样式类
        this.element.classList.add('window-animation')
        
        // 设置动画初始状态
        this.element.style.opacity = '0'
        this.element.style.transform = 'scale(0.3) translateY(50px)'
        this.element.style.transition = `all ${this.data.animationDuration}ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`
    }
    
    playOpenAnimation() {
        if (this.isAnimating) return
        
        this.isAnimating = true
        
        // 强制重绘
        this.element.offsetHeight
        
        // 开始动画
        requestAnimationFrame(() => {
            this.element.style.opacity = '1'
            this.element.style.transform = 'scale(1) translateY(0)'
            
            // 动画结束后重置状态
            setTimeout(() => {
                this.element.style.transition = ''
                this.isAnimating = false
            }, this.data.animationDuration)
        })
    }
    
    playCloseAnimation() {
        if (this.isAnimating) return
        
        this.isAnimating = true
        
        // 设置过渡效果
        this.element.style.transition = `all ${this.data.animationDuration}ms cubic-bezier(0.6, -0.28, 0.735, 0.045)`
        
        // 开始关闭动画
        requestAnimationFrame(() => {
            this.element.style.opacity = '0'
            this.element.style.transform = 'scale(0.3) translateY(-30px)'
            
            // 动画结束后移除元素
            setTimeout(() => {
                if (this.element && this.element.parentNode) {
                    this.element.parentNode.removeChild(this.element)
                }
                this.isAnimating = false
            }, this.data.animationDuration)
        })
    }
    
    updateElementStyle() {
        // 根据定位模式设置position属性
        this.element.style.position = this.data.positionMode
        this.element.style.left = this.data.x + "px"
        this.element.style.top = this.data.y + "px"
        this.element.style.width = this.data.width + "px"
        this.element.style.height = this.data.height + "px"
        this.element.style.backgroundColor = "#f0f0f0"
        this.element.style.border = "2px solid #ccc"
        this.element.style.borderRadius = "8px"
        this.element.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)"
        this.element.style.zIndex = "1000"
        
        // 标题栏样式
        const titleBar = this.element.querySelector(".title-bar")
        if (titleBar) {
            titleBar.style.backgroundColor = "#e0e0e0"
            titleBar.style.padding = "8px"
            titleBar.style.borderRadius = "6px 6px 0 0"
            titleBar.style.display = "flex"
            titleBar.style.justifyContent = "space-between"
            titleBar.style.alignItems = "center"
            titleBar.style.cursor = "move"
        }
        
        // 标题样式
        if (this.titleElement) {
            this.titleElement.style.margin = "0"
            this.titleElement.style.fontSize = "16px"
            this.titleElement.style.fontWeight = "bold"
        }
        
        // 按钮容器样式
        if (this.buttonContainer) {
            this.buttonContainer.style.display = "flex"
            this.buttonContainer.style.gap = "4px"
        }
        
        // 按钮样式
        const buttons = [this.closeBtn, this.foldBtn, this.fullScreenBtn]
        buttons.forEach(btn => {
            if (btn) {
                btn.style.width = "24px"
                btn.style.height = "24px"
                btn.style.border = "none"
                btn.style.borderRadius = "4px"
                btn.style.cursor = "pointer"
                btn.style.fontSize = "16px"
                btn.style.fontWeight = "bold"
                btn.style.display = "flex"
                btn.style.alignItems = "center"
                btn.style.justifyContent = "center"
                btn.style.transition = "all 0.2s ease"
                
                // 添加悬停效果
                btn.addEventListener('mouseenter', () => {
                    btn.style.transform = 'scale(1.1)'
                })
                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = 'scale(1)'
                })
            }
        })
        
        // 不同按钮的颜色
        if (this.closeBtn) {
            this.closeBtn.style.backgroundColor = "#ff5f57"
            this.closeBtn.style.color = "white"
        }
        if (this.foldBtn) {
            this.foldBtn.style.backgroundColor = "#ffbd2e"
            this.foldBtn.style.color = "white"
        }
        if (this.fullScreenBtn) {
            this.fullScreenBtn.style.backgroundColor = "#28ca42"
            this.fullScreenBtn.style.color = "white"
        }
        
        // 内容区域样式
        if (this.contentElement) {
            this.contentElement.style.padding = "16px"
            this.contentElement.style.overflow = "auto"
            this.contentElement.style.height = (this.data.height - 60) + "px"
        }
        
        // 折叠状态处理
        if (this.data.isFolded) {
            this.contentElement.style.display = "none"
            this.element.style.height = "40px"
        } else {
            this.contentElement.style.display = "block"
            this.element.style.height = this.data.height + "px"
        }
    }
    
    setupEventListeners() {
        // 关闭按钮事件 - 使用动画关闭
        this.closeBtn.addEventListener("click", () => {
            this.playCloseAnimation()
        })
        
        // 折叠按钮事件
        this.foldBtn.addEventListener("click", () => {
            this.toggleFold()
        })
        
        // 全屏按钮事件
        this.fullScreenBtn.addEventListener("click", () => {
            this.toggleFullScreen()
        })
        
        // 拖拽功能
        const titleBar = this.element.querySelector(".title-bar")
        if (titleBar) {
            titleBar.addEventListener("mousedown", (e) => {
                if (e.target === titleBar || e.target === this.titleElement) {
                    this.startDrag(e)
                }
            })
        }
        
        document.addEventListener("mousemove", (e) => {
            if (this.isDragging) {
                this.drag(e)
            }
        })
        
        document.addEventListener("mouseup", () => {
            this.stopDrag()
        })
    }
    
    startDrag(e) {
        if (this.isAnimating) return
        
        this.isDragging = true
        this.dragOffset.x = e.clientX - this.data.x
        this.dragOffset.y = e.clientY - this.data.y
        this.element.style.cursor = "grabbing"
        this.element.style.transition = '' // 拖拽时禁用过渡
    }
    
    drag(e) {
        if (!this.isDragging) return
        
        this.data.x = e.clientX - this.dragOffset.x
        this.data.y = e.clientY - this.dragOffset.y
        
        this.element.style.left = this.data.x + "px"
        this.element.style.top = this.data.y + "px"
    }
    
    stopDrag() {
        this.isDragging = false
        this.element.style.cursor = "default"
    }
    
    close() {
        this.playCloseAnimation()
    }
    
    toggleFold() {
        this.data.isFolded = !this.data.isFolded
        
        if (this.data.isFolded) {
            this.contentElement.style.display = "none"
            this.element.style.height = "40px"
            this.foldBtn.innerHTML = "+"
            this.foldBtn.title = "展开"
        } else {
            this.contentElement.style.display = "block"
            this.element.style.height = this.data.height + "px"
            this.foldBtn.innerHTML = "−"
            this.foldBtn.title = "折叠"
        }
    }
    
    toggleFullScreen() {
        this.data.isFullScreen = !this.data.isFullScreen
        
        if (this.data.isFullScreen) {
            // 保存原始状态
            this.data.originalWidth = this.data.width
            this.data.originalHeight = this.data.height
            this.data.originalX = this.data.x
            this.data.originalY = this.data.y
            
            // 设置为全屏
            this.data.width = window.innerWidth
            this.data.height = window.innerHeight
            this.data.x = 0
            this.data.y = 0
            
            this.fullScreenBtn.innerHTML = "❐"
            this.fullScreenBtn.title = "退出全屏"
        } else {
            // 恢复原始状态
            this.data.width = this.data.originalWidth
            this.data.height = this.data.originalHeight
            this.data.x = this.data.originalX
            this.data.y = this.data.originalY
            
            this.fullScreenBtn.innerHTML = "□"
            this.fullScreenBtn.title = "全屏"
        }
        
        this.updateElementStyle()
    }
    
    setContent(content) {
        this.data.setContent(content)
        if (this.contentElement) {
            this.contentElement.innerHTML = content
        }
    }
    
    setTitle(title) {
        this.data.setTitle(title)
        if (this.titleElement) {
            this.titleElement.textContent = title
        }
    }
    
    setPosition(x, y) {
        this.data.setPosition(x, y)
        this.element.style.left = x + "px"
        this.element.style.top = y + "px"
    }
    
    setPositionMode(mode) {
        this.data.setPositionMode(mode)
        this.element.style.position = mode
    }
    
    setSize(width, height) {
        this.data.setSize(width, height)
        this.element.style.width = width + "px"
        this.element.style.height = height + "px"
        this.contentElement.style.height = (height - 60) + "px"
    }
    
    setAnimation(duration, type = "scaleUpFade") {
        this.data.setAnimation(duration, type)
        this.element.style.transition = `all ${duration}ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`
    }
    
    appendTo(parent) {
        if (typeof parent === 'string') {
            parent = document.querySelector(parent)
        }
        if (!parent) {
            parent = document.body
        }
        parent.appendChild(this.element)
        
        // 播放打开动画
        setTimeout(() => {
            this.playOpenAnimation()
        }, 10)
        
        return this
    }
}

// 辅助函数：创建新窗口
function createWindow(options = {}) {
    const windowData = new WindowData()
    
    if (options.title) windowData.setTitle(options.title)
    if (options.content) windowData.setContent(options.content)
    if (options.x !== undefined) windowData.x = options.x
    if (options.y !== undefined) windowData.y = options.y
    if (options.width) windowData.width = options.width
    if (options.height) windowData.height = options.height
    if (options.positionMode) windowData.setPositionMode(options.positionMode)
    if (options.animationDuration) windowData.setAnimation(options.animationDuration, options.animationType)
    
    const window = new ScreenNote(windowData)
    return window
}

// 示例用法
function egScreenNote() {
    const window = createWindow({
        title: "示例窗口",
        content: "<p>这是一个弹窗内容</p><p>可以包含HTML内容</p>",
        x: 100,
        y: 100,
        width: 400,
        height: 300,
        positionMode: "absolute" // 可选：absolute 或 fixed
    })
    
    window.appendTo(document.body)
}

// ========== 你原有的代码部分（保持不变） ==========

class data {
    constructor() {
        this.title = ""
        this.content = ""
        this.x = 0
        this.y = 0
        this.width = 800
        this.height = 600
        this.positionMode = "absolute"
    }
    setData(title, content, x, y, width, height, positionMode) {
        this.title = title
        this.content = content
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.positionMode = positionMode
    }
    setPosition(x , y) {
        this.x = x
        this.y = y
    }
}

function newScreenNote(data) {
    const window = createWindow({
        title: data.title,
        content: data.content,
        x: data.x,
        y: data.y,
        width: data.width,
        height: data.height,
        positionMode: data.positionMode // 可选：absolute 或 fixed
    })
    window.appendTo(document.body)
}

function newData(title, content, x, y, width, height, positionMode) {
    let a = new data()
    a.setData(title, content, x, y, width, height, positionMode)
    return a
}

function dataRedmonal(d){
    d.setPosition(rdm.N(0))
}

let w = 300;
let h = 100;

let dataArr = [
    // 输出位
    newData("💨猎空","炸弹来咯",200,200,w,h,"absolute"),
    newData("⚔️源氏","尝尝龙神之剑",200,200,w,h,"absolute"),
    newData("🏹半藏","巨龙啊 吞噬我的敌人",200,300,w,h,"absolute"), // 保留你示例中y=300
    newData("🚀法老之鹰","天降正义",200,200,w,h,"absolute"),
    newData("💀黑百合","没人可以躲过我的眼睛",200,200,w,h,"absolute"),
    newData("🔫士兵76","我看到你们了",200,200,w,h,"absolute"),
    newData("🤠卡西迪","午时已到",200,200,w,h,"absolute"),
    newData("🧨狂鼠","小心手雷",200,200,w,h,"absolute"),
    newData("⛏️托比昂","熔火核心",200,200,w,h,"absolute"),
    newData("🤖堡垒","（机械轰鸣与电子杂音）",200,200,w,h,"absolute"),
    newData("🎭艾什","鲍勃，别傻愣着",200,200,w,h,"absolute"),
    newData("🕶️黑影","关灯了",200,200,w,h,"absolute"),
    newData("🪶回声","我的设计尚未完成！",200,200,w,h,"absolute"), // 无敌方用我方

    // 重装位
    newData("🐵温斯顿","（原始暴怒怒吼）",200,200,w,h,"absolute"),
    newData("🛡️莱因哈特","吃我一锤",200,200,w,h,"absolute"),
    newData("🎮D.Va","这太不平衡了",200,200,w,h,"absolute"),
    newData("🛡️查莉娅","准备开火",200,200,w,h,"absolute"),
    newData("🐷路霸","（猪叫声）",200,200,w,h,"absolute"),
    newData("🤖奥丽莎","停止抵抗",200,200,w,h,"absolute"),
    newData("⚛️西格玛","混沌即是宇宙的真谛！",200,200,w,h,"absolute"), // 无敌方用我方
    newData("👑渣客镇女王","该狩猎了！",200,200,w,h,"absolute"), // 无敌方用我方

    // 支援位
    newData("👼天使","英雄不朽",200,200,w,h,"absolute"),
    newData("🎧卢西奥","来点音乐",200,200,w,h,"absolute"),
    newData("🧘禅雅塔","遁入智瞳",200,200,w,h,"absolute"),
    newData("🏹安娜","释放你的怒火吧",200,200,w,h,"absolute"),
    newData("🩹巴蒂斯特","火力全开",200,200,w,h,"absolute"),
    newData("🧪莫伊拉","让你的灵魂屈服",200,200,w,h,"absolute"), // 无敌方用我方
    newData("🔮秩序之光","敌人布置了传送面板",200,200,w,h,"absolute"),
    newData("🛡️布里吉塔","英雄集结",200,200,w,h,"absolute") // 无敌方用我方
];

function showAllData() {
    dataArr.forEach((d) =>{
        d.setPosition(rdm.N(0, window.innerWidth - d.width), rdm.N(0, window.innerHeight - d.height))
    })
    let l = dataArr.length -1
    let t = setInterval(() => {
       if(l >= 0){
        newScreenNote(dataArr[l--])
       }else{
        console.log("所有窗口已显示") 
        clearInterval(t)
       }
    }, 1000);
}


