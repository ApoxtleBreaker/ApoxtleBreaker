// const pzs = develop
const pzs = 'github'

githubLocation = window.location.href


document.getElementById('article-icon').addEventListener('click', function() {
    if(pzs === 'develop'){
        window.location.href = '../../page/article.html'
    }else{
        window.location.href = githubLocation + '/page/article.html'
    }

});

// document.getElementById('poem-icon').addEventListener('click', function() {
//     if(pzs === 'develop'){
//         window.location.href = '../../page/poem.html'
//     }else{
//         window.location.href = githubLocation + '/page/poem.html'
//     }

// });

document.getElementById('backup').addEventListener('click', function() {
    if(pzs === 'develop'){
        window.location.href = '../../-ApoxtleBreaker/index.html';
    }else{
        window.location.href = githubLocation + '/-ApoxtleBreaker/index.html';
    }
});