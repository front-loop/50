const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

// 开关状态改变时调用 doTheTrick()
toggles.forEach((toggle) => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
  // 三个都选中时，取消这第三个选中的状态
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false
    }

    if (cheap === theClickedOne) {
      good.checked = false
    }

    if (fast === theClickedOne) {
      cheap.checked = false
    }
  }
}
