const chatButton = document.querySelector('.report-button');
const modalReport = document.querySelector('.modal-report');
const callButton = document.querySelector('.order-button');
const modalOrder = document.querySelector('.modal-order');

console.log(callButton)


chatButton.addEventListener('click', function () {
  console.log('click');
  modalReport.classList.toggle('hidden');
});

callButton.addEventListener('click', function () {
   console.log('click');
   modalOrder.classList.toggle('hidden');
 });