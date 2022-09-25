import '../scss/main.scss'
import '../scss/modal.scss'
import '../scss/fullscreen.scss'
import '../scss/pricelist.scss'
import '../scss/footer.scss'
import '../scss/modal-report.scss'
import './modalsOn.js'
import './openTechRepair.js'
import '../scss/techRepair.scss'
import './menuOn.js'
import './priceListTable.js'

let swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
})

// убираем классы слайдера и добавляем brand элементам списка, убрать brands__list у ул и добавить диву внизу

const icon = document.querySelector('.brands-button-rotate')
const swiperContainer = document.querySelector('.swiper')
const swiperWrapper = document.querySelector('.swiper-wrapper')
const swiperWrapperChildren = swiperWrapper.querySelectorAll('.swiper-slide')
const mediaQuery = window.matchMedia('(max-width: 767px)')
const brand = swiperWrapper.querySelectorAll('li')

// если не 320, тогда отключаем свайпер
if (!mediaQuery.matches) {
  swiper.destroy()
  swiperContainer.classList.remove('swiper')
  swiperWrapper.classList.add('brands__list')
  swiperWrapper.classList.remove('swiper-wrapper')
  swiperContainer.classList.remove('brands__list')

  for (let elem of brand) {
    elem.classList.add('brand')
    elem.classList.remove('swiper-slide')
  }
}

const button = document.querySelector('.brands-button')
const hiddenBrand = document.querySelectorAll('.brand')
const media1120 = window.matchMedia('(min-width: 1120px)')
const media768 = window.matchMedia('(min-width: 768px)')
const brandsButtonText = button.querySelector('p')

// показываем 6 элементов на 768
if (media768.matches && !media1120.matches) {
  for (let i = 0; i < 6; i++) {
    hiddenBrand[i].classList.remove('hidden')
  }
  // показываем 8 элементов на 1120
} else if (media1120.matches) {
  for (let i = 0; i < 8; i++) {
    hiddenBrand[i].classList.remove('hidden')
  }
  // при 320 убираем у всех hidden
} else if (mediaQuery.matches) {
  for (let i = 0; i < swiperWrapperChildren.length - 1; i++) {
    swiperWrapperChildren[i].classList.remove('hidden')
    swiperWrapper.classList.remove('brands__list')
  }
}

// функция которая открывает или закрывает окно при 768 +
let amountOfElements1 = function (count) {
  if (swiperWrapper.classList.contains('button-close')) {
    swiperWrapper.classList.add('button-open')
    swiperWrapper.classList.remove('button-close')

    for (let i = 0; i < hiddenBrand.length; i++) {
      hiddenBrand[i].classList.remove('hidden')
      brandsButtonText.textContent = 'Скрыть'
    }
  } else {
    swiperWrapper.classList.add('button-close')
    swiperWrapper.classList.remove('button-open')

    for (let i = count; i < hiddenBrand.length; i++) {
      hiddenBrand[i].classList.add('hidden')
      brandsButtonText.textContent = 'Показать всё'
    }
  }
}

// при нажатии на кнопку выбирает количество видимых элементов
button.addEventListener('click', function () {
  if (media768.matches && !media1120.matches) {
    amountOfElements1(6)
  } else {
    amountOfElements1(8)
  }
})

// при нажатии на кнопку переворачивается иконка
button.addEventListener('click', function () {
  if (icon.classList.contains('button-not-rotate')) {
    icon.classList.add('button-rotate')
    icon.classList.remove('button-not-rotate')
  } else {
    icon.classList.add('button-not-rotate')
    icon.classList.remove('button-rotate')
  }
})

let mySwiper = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
})

const swiperTechContainer = document.querySelector('.swiper2')
const swiperTechWrapper = swiperTechContainer.querySelector('.swiper-wrapper')
const swiperPaginationTech = document.querySelector('.swiper-pagination2')

// убираем свайпер у tech
if (!mediaQuery.matches) {
  mySwiper.destroy()
  swiperTechContainer.classList.remove('swiper2')
  swiperTechContainer.classList.remove('brands__list')
  swiperTechWrapper.classList.remove('swiper-wrapper')
  swiperTechWrapper.classList.add('brands__list')
  swiperPaginationTech.classList.add('hidden')

  for (let elem of brand) {
    elem.classList.add('brand')
    elem.classList.remove('swiper-slide')
  }
}
