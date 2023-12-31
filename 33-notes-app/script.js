const addBtn = document.getElementById('add')

// Just like todo app
const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
  notes.forEach((note) => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  // 如果已有 text 传入，就不显示 textarea
  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
    `

  const editBtn = note.querySelector('.edit')
  const deleteBtn = note.querySelector('.delete')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('textarea')

  // marked 把 markdown 转换成 html
  // 也就是编辑模式和预览模式
  textArea.value = text
  main.innerHTML = marked(text)

  // 删除，编辑，每次都要更新 localStorage
   deleteBtn.addEventListener('click', () => {
    note.remove()
    updateLS()
  })

  // 切换编辑模式和预览模式
  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })

  // input 事件监听
  textArea.addEventListener('input', (e) => {
    const { value } = e.target
    main.innerHTML = marked(value)
    updateLS()
  })

  document.body.appendChild(note)
}

// 存！
function updateLS() {
  const notesText = document.querySelectorAll('textarea')
  const notes = []
  notesText.forEach((note) => notes.push(note.value))
  localStorage.setItem('notes', JSON.stringify(notes))
}
