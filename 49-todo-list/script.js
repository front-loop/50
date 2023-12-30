const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

// 先看本地存的有没有
const todos = JSON.parse(localStorage.getItem('todos'))

// 有的话逐个添加进去
if (todos) {
  todos.forEach((todo) => addTodo(todo))
}

// 提交表单时添加 todo
form.addEventListener('submit', (e) => {
  e.preventDefault()
  addTodo()
})

function addTodo(todo) {
  let todoText = input.value

  // 如果是从本地存储中读取的 todo，就用 todo.text
  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const todoEl = document.createElement('li')

    // 已有的且已完成的加上 completed 类
    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText

    // 左键点击切换 completed 类
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      // 每次更新都要调用一次
      updateLS()
    })

    // 右键点击删除
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      // Element.remove() 删除节点
      todoEl.remove()
      updateLS()
    })

    todosUL.appendChild(todoEl)
    // 别忘了清空输入框
    input.value = ''
    updateLS()
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll('li')

  // 存！
  const todos = []
  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
    })
  })
  localStorage.setItem('todos', JSON.stringify(todos))
}
