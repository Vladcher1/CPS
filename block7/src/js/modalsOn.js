const chatButton = document.querySelector('.report-button')
const callButton = document.querySelector('.order-button')
const modal = document.querySelector('.modal')
const modal1 = document.querySelector('.modal-1')
const closeButton = document.querySelector('.close-button')
const closeButtonOrder = document.querySelector('.close-button-order')

chatButton.addEventListener('click', function () {
  modal.classList.toggle('hidden')
})

callButton.addEventListener('click', function () {
  modal1.classList.toggle('hidden')
})

closeButton.addEventListener('click', function () {
  if (!modal.classList.contains('hidden')) {
    modal.classList.toggle('hidden')
  }
})

closeButtonOrder.addEventListener('click', function () {
  if (!modal1.classList.contains('hidden')) {
    modal1.classList.add('hidden')
  }
})

