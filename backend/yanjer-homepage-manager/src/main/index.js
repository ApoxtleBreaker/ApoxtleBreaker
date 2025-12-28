document.addEventListener('DOMContentLoaded', function() {
    let link = document.createElement('a');
    link.href = './pages/article/articleManager.html';
    link.textContent = '文章管理';
    link.id = 'articleManagerLink';
    document.body.appendChild(link);
    document.querySelector('#articleManagerLink').click();
});