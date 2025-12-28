//自由配置项
// 主窗口消失时切换到副窗口的百分比
const DownFadeout = 10;
// 副窗口显示时切换回主窗口的百分比
const UpFadein = 40;



// 焦点状态管理
let currentFocus = 'main'; // 默认主窗口为焦点
let isScrolling = false; // 防止滚动过程中重复触发
let lastScrollTop = 0; // 记录上次滚动位置，用于判断滚动方向

// 计算元素在视口中的显示百分比
function getElementVisibilityPercent(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.bottom < 0 || rect.top > windowHeight) {
        return 0;
    }
    
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const elementHeight = rect.height;
    
    return (visibleHeight / elementHeight) * 100;
}

// 切换焦点状态
function switchFocus(newFocus) {
    if (currentFocus === newFocus || isScrolling) return;
    
    currentFocus = newFocus;
    isScrolling = true;
    
    // 根据焦点状态执行滚动
    if (newFocus === 'sub') {
        scrollToSub();
    } else if (newFocus === 'main') {
        scrollToTop();
    }
    
    // 滚动完成后重置状态
    setTimeout(() => {
        isScrolling = false;
    }, 800); // 平滑滚动动画时间
}

// 下滑监听 - 主窗口焦点时触发
function handleScrollDown() {
    if (currentFocus !== 'main' || isScrolling) return;
    
    const mainVisibility = getElementVisibilityPercent(mainContainer);
    
    // 主窗口消失DownFadeout时切换到副窗口%时切换到副窗口
    if (mainVisibility <= (100 - DownFadeout)) {
        switchFocus('sub');
        // 切换到副窗口后，移除下滑监听，添加上滑监听
        removeScrollListener();
        addScrollUpListener();
    }
}

// 上滑监听 - 副窗口焦点时触发
function handleScrollUp() {
    if (currentFocus !== 'sub' || isScrolling) return;
    
    const subVisibility = getElementVisibilityPercent(subContainer);

    // 副窗口显示UpFadein时切换回主窗口
    if (subVisibility >= UpFadein) {
        switchFocus('main');
        // 切换回主窗口后，移除上滑监听，添加下滑监听
        removeScrollListener();
        addScrollDownListener();
    }
}

// 滚动事件处理
function onScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
    lastScrollTop = currentScrollTop;
    
    // 根据当前焦点状态和滚动方向执行相应逻辑
    if (scrollDirection === 'down' && currentFocus === 'main') {
        handleScrollDown();
    } else if (scrollDirection === 'up' && currentFocus === 'sub') {
        handleScrollUp();
    }
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 监听器管理
let currentScrollListener = null;

function addScrollDownListener() {
    removeScrollListener();
    currentScrollListener = debounce(onScroll, 100);
    window.addEventListener('scroll', currentScrollListener);
}

function addScrollUpListener() {
    removeScrollListener();
    currentScrollListener = debounce(onScroll, 100);
    window.addEventListener('scroll', currentScrollListener);
}

function removeScrollListener() {
    if (currentScrollListener) {
        window.removeEventListener('scroll', currentScrollListener);
        currentScrollListener = null;
    }
}

// 滚动函数
scrollToSub = () => {
    window.scrollTo({
        top: mainContainer.offsetHeight,
        left: 0,
        behavior: "smooth"
    });
}

scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

// 初始化 - 默认主窗口焦点，添加下滑监听
addScrollDownListener();
