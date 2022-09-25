const priceContainer = document.querySelector('.price')
const tableTitle = priceContainer.querySelector('.price__table-title')
const tableContainer = priceContainer.querySelector('.table-container')
const product = tableContainer.querySelector('.price__product')
const products = tableContainer.querySelectorAll('.price__product')
const tableTitleName = tableTitle.querySelector('.table-title__name')
const tableTitlePrice = tableTitle.querySelector('.table-title__price')
const tableTitleTime = tableTitle.querySelector('.table-title__time')

const productsName = tableContainer.querySelectorAll('.product__name')
const productsPrice = tableContainer.querySelectorAll('.product__price')
const productsTime = tableContainer.querySelectorAll('.product__time')
const mediaQuery = window.matchMedia('(max-width: 767px)')
const dividers = tableContainer.querySelectorAll('.block-divider')

// console.log(blocksName)
// нужно вставить в каждый блок внутри блок контейнера все три элемента из блока снаружи

if (mediaQuery.matches) {
  // создаю дивы с тайтлами

  // for (let i = 0; i < blocks.length - 1; i++) {
  const divName = document.createElement('div')
  divName.className = 'block-title-name'
  divName.innerHTML = 'Ремонтные услуги'

  const divPrice = document.createElement('div')
  divPrice.className = 'block-title-price'
  divPrice.innerHTML = 'Цена'

  const divTime = document.createElement('div')
  divTime.className = 'block-title-time'
  divTime.innerHTML = 'Срок'

  // скрываю первый блок вне контейнера
  tableTitle.classList.add('hidden')
  for (let divider of dividers) {
    divider.classList.add('hidden')
  }

  // ставлю новые дивы перед нужными блоками

  for (let i = 0; i < products.length -1; i++) {
    //  for (let element of blocks) {

      const divName = document.createElement('div')
      divName.className = 'block-title-name'
      divName.innerHTML = 'Ремонтные услуги'

      const divPrice = document.createElement('div')
      divPrice.className = 'block-title-price'
      divPrice.innerHTML = 'Цена'

      const divTime = document.createElement('div')
      divTime.className = 'block-title-time'
      divTime.innerHTML = 'Срок'

    productsName[i].before(divName)
    productsPrice[i].before(divPrice)
     productsTime[i].before(divTime)
     
  }
  //   }
}

let mySwiperPrice = new Swiper('.swiperPrice', {
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