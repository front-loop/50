const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

// 当滚动到一定位置时，给 nav 添加 active 类
function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}
