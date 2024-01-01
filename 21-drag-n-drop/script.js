// 最需要学习的一集
const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// 移动这个 fill 元素也就是图片
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// 所有的 empty 都要监听这四个事件
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}

function dragStart() {
  this.className += ' hold'
  // 让原有的消失，只保留鼠标拖拽的
  setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd() {
  this.className = 'fill'
}

function dragOver(e) {
  e.preventDefault()
}

// enter 后加上 hovered 类，离开后移除
function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}

function dragLeave() {
  this.className = 'empty'
}

function dragDrop() {
  this.className = 'empty'
  this.append(fill)
}
