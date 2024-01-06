const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    // x, y coordinates of the mouse
    const x = e.pageX
    const y = e.pageY

    // x, y coordinates of the button
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    // x, y coordinates of the mouse inside the button
    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    // 在点击处创建一个 circle
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})
