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


window.addEventListener('resize', function () {
  let brandsList = document.querySelector('.brands__list'); 
const mediaQuery = window.matchMedia('(max-width: 768px)');



swiper.destroy(true, true);
brandsList.classList.remove('swiper');
  });

