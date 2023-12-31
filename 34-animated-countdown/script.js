const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  nums.forEach((num) => {
    num.classList.value = ''
  })
  nums[0].classList.add('in')
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1

    // 注意这个绑定事件，每次动画结束触发
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        // nextElementSibling 返回当前元素的下一个兄弟元素
        num.nextElementSibling.classList.add('in')
      } else {
        // 没有下一个了就显示最后的信息
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

// 重新开始
replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})
