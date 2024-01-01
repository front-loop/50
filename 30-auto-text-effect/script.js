const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'

let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
  // 文本内容设置为 0 到 idx 的内容
  // idx 逐渐增加，实现动画
  textEl.innerText = text.slice(0, idx)
  idx++
  if (idx > text.length) {
    // 到头重来
    idx = 1
  }
  // 无限调用
  setTimeout(writeText, speed)
}

// 速度设置 1-10，10 最快，30ms 一次
speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value))
