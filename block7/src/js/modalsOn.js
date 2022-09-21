const chatButton = document.querySelector('.report-button');
const modalReport = document.querySelector('.modal-report');
const callButton = document.querySelector('.order-button');
const modalOrder = document.querySelector('.modal-order');
const modal = document.querySelector('.modal');
const modal1 = document.querySelector('.modal-1');
const closeButton = document.querySelector('.close-button');
console.log(modal1);
const container = document.querySelector('.flexbox-container');

// for (let modal of modals){
chatButton.addEventListener('click', function () {
  modal.classList.toggle('hidden');
  container.classList.toggle('container-visually');
});


callButton.addEventListener('click', function () {
   modal1.classList.toggle('hidden');
   
  container.classList.toggle('container-visually');
 });
// }


const chooseButton 
 closeButton.addEventListener('click', function () {
  modal.classList.toggle('hidden');
  container.classList.toggle('container-visually');

});