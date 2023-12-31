const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

// 开关状态改变时调用 doTheTrick()
toggles.forEach((toggle) => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
  // 不能同时选中三个
  if (good.checked && cheap.checked && fast.checked) {
    // 好不能快
    if (good === theClickedOne) {
      fast.checked = false
    }
    // 快不能省
    if (cheap === theClickedOne) {
      good.checked = false
    }
    // 省不能好
    if (fast === theClickedOne) {
      cheap.checked = false
    }
  }
}
