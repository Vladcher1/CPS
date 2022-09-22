const techRepair = document.querySelector('.tech-repair')
const techContainer = document.querySelector('.tech-container')
const list = techRepair.querySelector('.brands__list')
const listElements = techContainer.children
const media768 = window.matchMedia('(min-width: 768px)')
const media1120 = window.matchMedia('(min-width: 1120px)')
const buttonClose = techRepair.querySelector('.second-title')
const icon = techRepair.querySelector('.second-title-icon')
const buttonCloseText = buttonClose.querySelector('p')
console.log(list)

// по умолчанию все элементы после 3 скрыты
if (media768.matches && !media1120.matches) {
  for (let i = 3; i <= listElements.length - 1; i++) {
    listElements[i].classList.add('hidden')
  }
}

// при нажатии на кнопку раскрыть все открываются все
// элементы
buttonClose.addEventListener('click', function () {
  if (list.classList.contains('button-close')) {
    list.classList.remove('button-close')
    list.classList.add('button-open')
    icon.classList.add('button-rotate')
    icon.classList.remove('button-not-rotate')
    buttonCloseText.textContent = 'Скрыть'

    for (let i = 0; i <= listElements.length; i++) {
      listElements[i].classList.remove('hidden')
    }
  } else if (list.classList.contains('button-open')) {
    list.classList.add('button-close')
    list.classList.remove('button-open')
    icon.classList.add('button-not-rotate')
    icon.classList.remove('button-rotate')
    buttonCloseText.textContent = 'Показать всё'

    for (let i = 3; i <= listElements.length - 1; i++) {
      listElements[i].classList.add('hidden')
    }
  }
})
