let messages = new Map();
messages.set('莱伊提丰', '这两位更是剧情完全不认识 但是发色是对方的瞳色 而且社区氛围已经渲染到这了 反正我就是喜欢');

class chrBox extends HTMLElement {
    constructor() {
        super();
        this.classList.add('chr-box');
        
        // 获取chr属性并按逗号或分号分割角色名
        let chrNames = this.getAttribute('chr').split(/[,;，；]/).map(name => name.trim()).filter(name => name);
        
        // 创建主容器
        let mainContainer = document.createElement('div');
        mainContainer.classList.add('chr-main-container');
        
        // 创建main容器（只创建一个）
        let mainBox = document.createElement('div');
        mainBox.classList.add('chr-main-box');
        
        // 创建message元素（只创建一个）
        let message = document.createElement('p');
        // 如果只有一个角色，使用该角色的消息；如果有多个角色，显示组合消息
        if (chrNames.length === 1) {
            message.textContent = messages.get(chrNames[0]) || 'undefined message';
        } else {
            message.textContent = messages.get(this.getAttribute('msg')) || 'undefined message';
        }
        
        // 创建head容器（根据角色名个数创建对应数量）
        let headContainer = document.createElement('div');
        headContainer.classList.add('chr-head-container');
        
        chrNames.forEach((chrName) => {
            let chrImgPath = `./assets/img/${chrName}.png`;
            
            let chrHead = document.createElement('div');
            chrHead.classList.add('chr-head');
            
            let chrImg = document.createElement('img');
            chrImg.classList.add('chr-img');
            chrImg.src = chrImgPath;
            chrImg.alt = chrName;
            
            let chrNameElement = document.createElement('h2');
            chrNameElement.classList.add('chr-name');
            chrNameElement.textContent = chrName;
            
            // 组装head元素
            chrHead.appendChild(chrImg);
            chrHead.appendChild(chrNameElement);
            headContainer.appendChild(chrHead);
        });
        
        // 组装主容器
        mainContainer.appendChild(headContainer);  // 添加head容器
        mainContainer.appendChild(mainBox);  // 添加main容器
        mainBox.appendChild(message);  // main容器中只添加一个message
        
        this.appendChild(mainContainer);
    }
}

customElements.define('chr-box', chrBox);