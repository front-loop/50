const password = document.getElementById('password')
const background = document.getElementById('background')

// 根据输入的密码长度，设置背景模糊度，越长越清晰
password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const blurValue = 20 - length * 2
  background.style.filter = `blur(${blurValue}px)`
})
