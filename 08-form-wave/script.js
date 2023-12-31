const labels = document.querySelectorAll('.form-control label')

// 把整句话的 label 切分为单个字母 span
// 每一个延迟时间不同，形成波浪效果
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})
