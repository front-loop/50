const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']
const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

// 点击创建一个 toast div 元素，放到右下角，就这么简单
function createNotification(message = null, type = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())
  notif.innerText = message ? message : getRandomMessage()
  toasts.appendChild(notif)
  setTimeout(() => {
    // 3s 后把自己删掉
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}
