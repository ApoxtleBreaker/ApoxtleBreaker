//我自己的另一个项目 
//https://github.com/ApoxtleBreaker/YANJER-JS-PACK.git
//特殊定制版

//快捷随机数

const rdm = new Object()

/**
 * 获取帮助
 * @returns 帮助字符串
 */
rdm.help = function(){
    return`
    Yanjer随机库：
    rdm.help：随机库帮助
    rdm.N(min, max)：对范围随机取整数
    rdm.P()：0-100%随机取整数
    rdm.PN()：0-100随机取整数
    rdm.PF()：0-1随机取小数
    rdm.color()：随机颜色
    rdm.help()：随机库帮助

    `
}
/**
 * 对范围随机取整数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机整数
 */
rdm.N = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 *  0-100%随机取整数
 * @returns {string} 随机整百分率
 */
rdm.P = function() {
    return `${Math.floor(Math.random() * 101)}%`;
}

/**
 *  0-100随机取整数
 * @returns {number} 随机整数
 */
rdm.PN = function() {
    return Math.floor(Math.random() * 101);
}

/**
 *  0-1随机取小数
 * @returns {number} 随机小数
 */
rdm.PF = function() {
    return Math.random();
}

/**
 * 随机数字id(小->最大16位 快)
 * @param {number} length 长度
 * @returns {string} 随机数字id
 */
rdm.Nid = function(length) {
    if(length>16){length = 16};
    let r = String(Math.random()).split('.')[1].substring(0, length)
    if(r.length < length){
        r += String(Math.random()).split('.')[1].substring(0, length - r.length)
    }
    return r;
}

/**
 * 随机数字id(大->无限制 中)
 * @param {number} length 长度
 * @returns {string} 随机数字id
 */
rdm.NidM = function(length) {
    if(length <= 16 || length == undefined){
        return String(Math.random()).split('.')[1].substring(0, length);
    }else{
        let n = Math.floor(length/16),end=length%16,result=new String();
        for(let i = 0; i < n; i++){
            result += String(rdm.Nid(16));
            console.log(result);
            console.log(result.length);
        }
        result += String(rdm.Nid(end));
        console.log(result);
        console.log(result.length);
        return result;
    }
}

/**
 * 时间随机数
 * @param {number | string} timeL 时间长度 full时为年到毫秒，其他时为年到截取位置
 * @param {number} extraL 时间轴以外长度
 * @returns {string} 随机时间随机数
 */
rdm.Tid = function(timeL, extraL) {
    let time = new Date().toISOString().match(/\d+/g).join('')
    if(timeL !== 'full'){
        time = time.slice(0, timeL);
    }
    let extra = rdm.Nid(extraL);
    return `${time}${extra}`; 
}

/**
 * 随机字符串(无限制)
 * @param {number} length 长度
 * @returns {string} 随机字符串
 */
rdm.Sid = function(length) {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += str.charAt(Math.floor(Math.random() * str.length));
    }
    return result;
}
/**
 * 随机复杂字符串(无限制)
 * @param {number} length 长度
 * @returns {string} 随机字符串
 */
rdm.Xid = function(length) {
    let x = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\/-_~!@#$%^&*()_+{}[]|\;:"<>,.?';
    let result = '';
        result += x.charAt(Math.floor(Math.random() * x.length));
    for (let i = 0; i < length - 1; i++) {
        result += x.charAt(Math.floor(Math.random() * x.length));
    }
    return result;
}
//随机颜色
rdm.color = function() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16);
    }
    // console.log(
    // `%c ${color}: %c ${color}`,
    // `color: ${color};`,
    // `background-color: ${color};`
// );
    return color;
}

//随机角度
rdm.angle = function() {
    return `${rdm.N(0, 360)}deg`;
}



class yDate extends Date{
    constructor(date){
        super(date);
    }
    formatToDay(){
        let year = this.getFullYear();
        let month = this.getMonth() + 1;
        let day = this.getDate();
        if(month < 10){
            month = '0' + month;
        }
        if(day < 10){
            day = '0' + day;
        }
        return `${year}-${month}-${day}`;
    }        
}






