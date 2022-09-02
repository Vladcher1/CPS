let swiper = new Swiper('.swiper', {
    // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 'auto' ,
   spaceBetween: 16,

 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
  });





// let brandsList = document.querySelector('.brands__list'); //swiper
// let wrapper = document.querySelector('div');
// let buttons = document.querySelectorAll('li');
//  const windowSize = window.matchMedia("(max-width: 768px)");

//  console.log(wrapper);


// window.addEventListener('resize', function () {

//   let brandsList = document.querySelector('.brands__list'); 
// const mediaQuery = window.matchMedia('(max-width: 768px)');

//   if (!mediaQuery.matches) {
//     swiper.destroy();
//   } 

//   });



// убираем классы слайдера и добавляем brand элементам списка, убрать brands__list у ул и добавить диву внизу

let brands = document.querySelector('.brands');
let brandsList = brands.querySelector('.brands__list');
let div = brandsList.querySelector('div');
let brand = div.querySelectorAll('li');
let pagination = brands.querySelector('.swiper-pagination');

window.addEventListener('resize', function () {
  const mediaQuery = window.matchMedia('(max-width: 768px)');

  if (!mediaQuery.matches) { 
  swiper.destroy();
  brandsList.classList.remove('swiper');
  brandsList.classList.remove('brands__list');
  div.classList.remove('swiper-wrapper');
  div.classList.add('brands__list');
  brand.classList.remove('swiper-slide');
  brand.classList.add('brand');
  }
});

console.log(brand);
