const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  // 视口高度的 4/5
  const triggerBottom = (window.innerHeight / 5) * 4

  boxes.forEach((box) => {
    // 相对于视口顶部的距离
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
