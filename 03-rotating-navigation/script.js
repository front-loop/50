const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// 点击按钮，添加/删除 show-nav 类
open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))