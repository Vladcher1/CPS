const priceContainer = document.querySelector('.price')
const blockTitle = priceContainer.querySelector('.block')
const blockContainer = priceContainer.querySelector('.block-container')
const block = blockContainer.querySelector('.block')
const blocks = blockContainer.querySelectorAll('.block')
const blockNameTitle = blockTitle.querySelector('.block-name')
const blockPriceTitle = blockTitle.querySelector('.block-price')
const blockTimeTitle = blockTitle.querySelector('.block-time')

const blocksName = blockContainer.querySelectorAll('.block-name')
const blocksPrice = blockContainer.querySelectorAll('.block-price')
const blocksTime = blockContainer.querySelectorAll('.block-time')
const mediaQuery = window.matchMedia('(max-width: 767px)')
const dividers = blockContainer.querySelectorAll('.block-divider')

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
  blockTitle.classList.add('hidden')
  for (let divider of dividers) {
    divider.classList.add('hidden')
  }

  // ставлю новые дивы перед нужными блоками

  for (let i = 0; i < blocks.length -1; i++) {
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

    blocksName[i].before(divName)
    blocksPrice[i].before(divPrice)
     blocksTime[i].before(divTime)
     
  }
  //   }
}

// let mySwiper2 = new Swiper('.swiper3', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 'auto',
//   spaceBetween: 16,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination3',
//     clickable: true
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar'
//   }
// })

console.log(blocks[1])
console.log(blocksName)