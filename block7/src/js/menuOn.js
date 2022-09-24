const menuButton = document.querySelector('.page-header__icon-menu')
const modal = document.querySelector('.modal-menu')
const closeButton = document.querySelector('.modal-header__opened-menu')
console.log(closeButton)

menuButton.addEventListener('click', function () {
  modal.classList.remove('hidden')
})

closeButton.addEventListener('click', function () {
  modal.classList.add('hidden')
})

const media1440 = window.matchMedia('(min-width: 1440px)')

if (media1440.matches) {
  modal.classList.remove('hidden')
}
