const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

// 第一次与第二次点击的时间间隔小于 800ms 时，创建一个爱心
loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e)
      clickTime = 0
    } else {
      clickTime = new Date().getTime()
    }
  }
})

const createHeart = (e) => {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  // 获取鼠标点击的位置
  const x = e.clientX
  const y = e.clientY

  const leftOffset = e.target.offsetLeft
  const topOffset = e.target.offsetTop

  // 获取爱心在父元素中的位置
  const xInside = x - leftOffset
  const yInside = y - topOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  loveMe.appendChild(heart)

  times.innerHTML = ++timesClicked

  // 1s 后移除爱心
  setTimeout(() => heart.remove(), 1000)
}
