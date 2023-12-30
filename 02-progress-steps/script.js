const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// 默认第一个 circle active
let currentActive = 1

// 点击下一个按钮，currentActive + 1，下一个 circle 也 active
next.addEventListener('click', () => {
  currentActive++
  // 后面没有更多 circle 了就不变了
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})

// 同 next
prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }
  update()
})

function update() {
  // 遍历所有 circle，小于 currentActive 的加上 active
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  // 更改 progress 的宽度
  // 如果五个 circle 里面就有四段 progress
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  // 设置按钮的禁用状态
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
