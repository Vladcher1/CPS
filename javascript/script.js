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

const brands = document.querySelector('.brands');
const brandsList = brands.querySelector('.brands__list');
const divSwiperWrapper = brandsList.querySelector('div');
const brand = brandsList.querySelectorAll('li');
const swiperSlide = document.querySelectorAll('.swiper-slide');



window.addEventListener('resize', function () {
});

 const mediaQuery = window.matchMedia('(max-width: 768px)');

  if (!mediaQuery.matches) { 
  swiper.destroy();
  brandsList.classList.remove('swiper');
  brandsList.classList.remove('brands__list');
  divSwiperWrapper.classList.remove('swiper-wrapper');
  divSwiperWrapper.classList.add('brands__list');


  for ( let elem of brand){
    elem.classList.add('brand');
    elem.classList.remove('swiper-slide');
    }
}


// нужно накинуть элементам класс hidden - после 10 элемента например
// при нажатии на кнопку открыть, на кнопку накидывается 
// класс button-open и убирается класс button-close

// button-open - содержимое кнопки меняется на скрыть 
// и у всех элементов списка убирается класс hidden

// button-close - содержимое по умолчанию, у всех элементов списка после 10 класс hidden 


const button = document.querySelector('.brands-button');

console.log(brands);
button.addEventListener('click', function () {
  brandsList.classList.add('button-open');
  brandsList.classList.remove('button-close');

  

  //for (let i = 10; i<= )
console.log('работает');
});
