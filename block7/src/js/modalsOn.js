const chatButton = document.querySelector('.report-button')
const callButton = document.querySelector('.order-button')
const modalList = document.querySelectorAll('.modal')
const closeButtons = document.querySelectorAll('.close-button')

modalOrder = modalList[0]
modalReport = modalList[1]

closeButtonreport = closeButtons[1];
closeButtonOrder = closeButtons[0]

console.log(closeButtonreport)

chatButton.addEventListener('click', function () {
  modalOrder.classList.remove('hidden')
})

callButton.addEventListener('click', function () {
  modalReport.classList.remove('hidden')
})

closeButtonreport.addEventListener('click', function () {
  if (!modalReport.classList.contains('hidden')) {
    modalReport.classList.add('hidden')
  }
})

closeButtonOrder.addEventListener('click', function () {
  if (!modalOrder.classList.contains('hidden')) {
    modalOrder.classList.add('hidden')
  }
})
