const panels = document.querySelectorAll('.panel')

// 点击时，移除所有 active 类，再给当前点击的 panel 添加 active 类
// active 修改 flex-grow 属性，使得当前点击的 panel 变大
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
