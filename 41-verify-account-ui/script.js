const codes = document.querySelectorAll('.code')

codes[0].focus()

// 依次输入验证码，输入一个后，自动聚焦到下一个输入框
codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = ''
      setTimeout(() => codes[idx + 1].focus(), 10)
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10)
    }
  })
})
