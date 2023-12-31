const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

// 每 30ms 执行一次 blurring 函数
let int = setInterval(blurring, 30)

function blurring() {
  load++
  if (load > 99) {
    clearInterval(int)
  }
  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  // 主要用到的就是 blur 属性，设置模糊半径，越大越模糊
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// 抽象出一个函数用于将一个范围内的数映射到另一个范围内
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) / (in_max - in_min) * (out_max - out_min) + out_min
}
