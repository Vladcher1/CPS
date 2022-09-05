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
const brandsButton = document.querySelector('.brands-button');
const brandsButtonText = brandsButton.querySelector('p');


window.addEventListener('resize', function () {
});

 const mediaQuery = window.matchMedia('(max-width: 767px)');

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
let hiddenBrand = divSwiperWrapper.children;
const media1120 = window.matchMedia('(min-width: 1120px)');

window.addEventListener('resize', function () {
});

if (mediaQuery.matches){
  for (let i = 0; i <hiddenBrand.length; i++ ){
    hiddenBrand[i].classList.remove('hidden');
  }
}
// если размер больше 1120
if (media1120.matches){

// первые 8 элементов открыты
for (let i = 0; i<= 7; i++){
  hiddenBrand[i].classList.remove('hidden');
};

// при нажатии на кнопку у всех элементов пропадает hidden
button.addEventListener('click', function () {
  if(brandsList.classList.contains('button-close')){
  brandsList.classList.add('button-open');
  brandsList.classList.remove('button-close');

  for (let i = 0; i< hiddenBrand.length; i++){

    hiddenBrand[i].classList.remove('hidden');
    brandsButtonText.textContent = 'Скрыть';

  };
  } else {
    brandsList.classList.add('button-close');
  brandsList.classList.remove('button-open');

  for (let i = 8; i< hiddenBrand.length; i++){

    hiddenBrand[i].classList.add('hidden');
    brandsButtonText.textContent = 'Показать всё';
  };
  }
 }); 
} else{

// первые 6 элементов открыты
for (let i = 0; i<= 5; i++){
  hiddenBrand[i].classList.remove('hidden');
};

// при нажатии на кнопку у всех элементов пропадает hidden
button.addEventListener('click', function () {
  if(brandsList.classList.contains('button-close')){
  brandsList.classList.add('button-open');
  brandsList.classList.remove('button-close');

  for (let i = 0; i< hiddenBrand.length; i++){

    hiddenBrand[i].classList.remove('hidden');
    brandsButtonText.textContent = 'Скрыть';

  };
  } else {
    brandsList.classList.add('button-close');
  brandsList.classList.remove('button-open');

  for (let i = 6; i< hiddenBrand.length; i++){

    hiddenBrand[i].classList.add('hidden');
    brandsButtonText.textContent = 'Показать всё';
  };
  }
 }); 
}