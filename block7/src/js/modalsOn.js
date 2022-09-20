const chatButton = document.querySelector('.report-button');
const modalReport = document.querySelector('.modal-report');
const callButton = document.querySelector('.order-button');
const modalOrder = document.querySelector('.modal-order');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

const container = document.querySelector('.flexbox-container');


chatButton.addEventListener('click', function () {
  modal.classList.toggle('hidden');
  container.classList.toggle('container-visually ');

});

callButton.addEventListener('click', function () {
   modal.classList.toggle('hidden');
 });

 closeButton.addEventListener('click', function () {
  modal.classList.toggle('hidden');
  container.classList.toggle('container-visually');

});