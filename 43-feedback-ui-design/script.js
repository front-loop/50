const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

// 最开始 active 的是 Satisfied
let selectedRating = 'Satisfied'

// <div class="rating">
//   <img src="xx.png" alt="">
//   <small>xx</small>
// </div>
ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
    // 点击的父节点有 rating 类，且存在下一个兄弟节点
    // 这个判断的是 img
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerHTML
  } else if (
    e.target.parentNode.classList.contains('rating') &&
    e.target.previousSibling &&
    e.target.previousElementSibling.nodeName === 'IMG'
  ) {
    // 点击的父节点有 rating 类，且存在上一个兄弟节点，且上一个兄弟节点是 img
    // 这个判断的是 small
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.innerHTML
  }
})

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `
})

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
  }
}
