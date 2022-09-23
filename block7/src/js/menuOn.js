const menuButton = document.querySelector('.page-header__icon-menu');
const modal = document.querySelector('.modal-3');
const closeButton = document.querySelector('.modal-header__opened-menu');
console.log(closeButton);

menuButton.addEventListener('click', function () {

   modal.classList.toggle('hidden');
})

menuButton.addEventListener('click', function () {

   modal.style.display = "block";
})

closeButton.addEventListener('click', function () {

   modal.style.display = "none";
})