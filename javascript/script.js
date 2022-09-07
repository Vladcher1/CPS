let swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


// убираем классы слайдера и добавляем brand элементам списка, убрать brands__list у ул и добавить диву внизу

const brands = document.querySelector(".brands");
const brandsList = brands.querySelector(".brands__list");
const divSwiperWrapper = brandsList.querySelector("div");
const brand = brandsList.querySelectorAll("li");
const swiperSlide = document.querySelectorAll(".swiper-slide");
const brandsButton = document.querySelector(".brands-button");
const brandsButtonText = brandsButton.querySelector("p");
const icon = document.querySelector('.brands-button-rotate');


// window.addEventListener("resize", function () {});


const mediaQuery = window.matchMedia("(max-width: 767px)");

if (!mediaQuery.matches) {
  swiper.destroy();
  brandsList.classList.remove("swiper");
  brandsList.classList.remove("brands__list");
  divSwiperWrapper.classList.remove("swiper-wrapper");
  divSwiperWrapper.classList.add("brands__list");

  for (let elem of brand) {
    elem.classList.add("brand");
    elem.classList.remove("swiper-slide");
  }
}





const button = document.querySelector(".brands-button");
const hiddenBrand = divSwiperWrapper.children;
const media1120 = window.matchMedia("(min-width: 1120px)");
const media768 = window.matchMedia("(min-width: 768px)");




let amountOfElements = function () {

  window.addEventListener('resize', function ()  {
  if ((media768.matches) && (!media1120.matches)){
    let elements = 6;

    // первые 6 элементов открыты
  for (let i = 0; i <= elements - 1; i++) {
    hiddenBrand[i].classList.remove("hidden");
  }

  // при нажатии на кнопку у всех элементов пропадает hidden
  button.addEventListener("click", function () {


    if (brandsList.classList.contains("button-close")) {
      brandsList.classList.add("button-open");
      brandsList.classList.remove("button-close");

      for (let i = 0; i < hiddenBrand.length; i++) {
        hiddenBrand[i].classList.remove("hidden");
        brandsButtonText.textContent = "Скрыть";
      }
    } else {
      brandsList.classList.add("button-close");
      brandsList.classList.remove("button-open");

      for (let i = 6; i < hiddenBrand.length; i++) {
        hiddenBrand[i].classList.add("hidden");
        brandsButtonText.textContent = "Показать всё";
      }
    }
  });
  // button.removeEventListener("click", function () {};

  } else if (media1120.matches){
    let elements = 8;


// первые 8 элементов открыты
for (let i = 0; i <= elements - 1; i++) {
  hiddenBrand[i].classList.remove("hidden");
}

// при нажатии на кнопку у всех элементов пропадает hidden
button.addEventListener("click", function () {

  if (icon.classList.contains("button-not-rotate")) {
    icon.classList.add("button-rotate");
    icon.classList.remove("button-not-rotate") } else {
      icon.classList.add("button-not-rotate");
      icon.classList.remove("button-rotate")
    }

  if (brandsList.classList.contains("button-close")) {
    brandsList.classList.remove("button-close");
    brandsList.classList.add("button-open");
    
    for (let i = 0; i < hiddenBrand.length; i++) {
      hiddenBrand[i].classList.remove("hidden");
      brandsButtonText.textContent = "Скрыть";
    }
  } else {
    brandsList.classList.add("button-close");
    brandsList.classList.remove("button-open");

    for (let i = 8; i < hiddenBrand.length; i++) {
      hiddenBrand[i].classList.add("hidden");
      brandsButtonText.textContent = "Показать всё";
    }
  }
});
  }


});
} 

amountOfElements(window);


if (mediaQuery.matches) {
  for (let i = 0; i < hiddenBrand.length; i++) {
    hiddenBrand[i].classList.remove("hidden");
  }
}
