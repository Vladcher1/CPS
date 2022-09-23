import '../scss/main.scss';
import '../scss/modal.scss';
import '../scss/fullscreen.scss';
import '../scss/pricelist.scss';
import '../scss/footer.scss';
import '../scss/modal-report.scss';
import './modalsOn.js';
import './openTechRepair.js';
import '../scss/techRepair.scss';
import './menuOn.js';


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

const brands = document.querySelector('.brands')
const brandsList = brands.querySelector('.brands__list')
const divSwiperWrapper = brandsList.querySelector('div')
const brand = brandsList.querySelectorAll('li')
const swiperSlide = document.querySelectorAll('.swiper-slide')
const brandsButton = document.querySelector('.brands-button')
const brandsButtonText = brandsButton.querySelector('p')
const icon = document.querySelector('.brands-button-rotate')
const swiperPagination2 = document.querySelector('.swiper-pagination2');

const mediaQuery = window.matchMedia('(max-width: 767px)')

if (!mediaQuery.matches) {
  swiper.destroy()
  brandsList.classList.remove('swiper')
  brandsList.classList.remove('brands__list')
  divSwiperWrapper.classList.remove('swiper-wrapper')
  divSwiperWrapper.classList.add('brands__list')

  for (let elem of brand) {
    elem.classList.add('brand')
    elem.classList.remove('swiper-slide')
  }
}

const button = document.querySelector('.brands-button')
const hiddenBrand = divSwiperWrapper.children
const media1120 = window.matchMedia('(min-width: 1120px)')
const media768 = window.matchMedia('(min-width: 768px)')


// код начинается тут

if (media768.matches && !media1120.matches) {
  for (let i = 0; i < 6; i++) {
    hiddenBrand[i].classList.remove('hidden')
  }
} else if (media1120.matches) {
  for (let i = 0; i < 8; i++) {
    hiddenBrand[i].classList.remove('hidden')
  }
} else if (mediaQuery.matches) {
  for (let i = 0; i < hiddenBrand.length - 1; i++) {
    hiddenBrand[i].classList.remove('hidden')
  }
}

let amountOfElements1 = function (count) {
  if (brandsList.classList.contains('button-close')) {
    brandsList.classList.add('button-open')
    brandsList.classList.remove('button-close')

    for (let i = 0; i < hiddenBrand.length; i++) {
      hiddenBrand[i].classList.remove('hidden')
      brandsButtonText.textContent = 'Скрыть'
    }
  } else {
    brandsList.classList.add('button-close')
    brandsList.classList.remove('button-open')

    for (let i = count; i < hiddenBrand.length; i++) {
      hiddenBrand[i].classList.add('hidden')
      brandsButtonText.textContent = 'Показать всё'
    }
  }
}

button.addEventListener('click', function () {
  if (media768.matches && !media1120.matches) {
    amountOfElements1(6)
  } else {
    amountOfElements1(8)
  }
})

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

if (!mediaQuery.matches) {
  mySwiper.destroy()
  brandsList.classList.remove('swiper')
  brandsList.classList.remove('brands__list')
  divSwiperWrapper.classList.remove('swiper-wrapper')
  divSwiperWrapper.classList.add('brands__list')
swiperPagination2.classList.add('hidden');

  for (let elem of brand) {
    elem.classList.add('brand')
    elem.classList.remove('swiper-slide')
  }
}

