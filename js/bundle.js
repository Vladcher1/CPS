!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);r(2),r(3),r(4),r(5),r(6),r(7),r(8),r(9),r(10),r(11),r(12);function n(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=new Swiper(".swiper",{direction:"horizontal",loop:!1,slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),a=document.querySelector(".brands-button-rotate"),s=document.querySelector(".swiper"),c=document.querySelector(".swiper-wrapper"),l=c.querySelectorAll(".swiper-slide"),d=window.matchMedia("(max-width: 767px)"),u=c.querySelectorAll("li");if(!d.matches){i.destroy(),s.classList.remove("swiper"),c.classList.add("brands__list"),c.classList.remove("swiper-wrapper"),s.classList.remove("brands__list");var m,p=n(u);try{for(p.s();!(m=p.n()).done;){var f=m.value;f.classList.add("brand"),f.classList.remove("swiper-slide")}}catch(e){p.e(e)}finally{p.f()}}var v=document.querySelector(".brands-button"),b=document.querySelectorAll(".brand"),y=window.matchMedia("(min-width: 1120px)"),h=window.matchMedia("(min-width: 768px)"),w=v.querySelector("p");if(h.matches&&!y.matches)for(var L=0;L<6;L++)b[L].classList.remove("hidden");else if(y.matches)for(var S=0;S<8;S++)b[S].classList.remove("hidden");else if(d.matches)for(var g=0;g<l.length-1;g++)l[g].classList.remove("hidden"),c.classList.remove("brands__list");var _=function(e){if(c.classList.contains("button-close")){c.classList.add("button-open"),c.classList.remove("button-close");for(var t=0;t<b.length;t++)b[t].classList.remove("hidden"),w.textContent="Скрыть"}else{c.classList.add("button-close"),c.classList.remove("button-open");for(var r=e;r<b.length;r++)b[r].classList.add("hidden"),w.textContent="Показать всё"}};v.addEventListener("click",(function(){h.matches&&!y.matches?_(6):_(8)})),v.addEventListener("click",(function(){a.classList.contains("button-not-rotate")?(a.classList.add("button-rotate"),a.classList.remove("button-not-rotate")):(a.classList.add("button-not-rotate"),a.classList.remove("button-rotate"))}));var q=new Swiper(".swiper2",{direction:"horizontal",loop:!1,slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination2",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),x=document.querySelector(".swiper2"),E=x.querySelector(".swiper-wrapper"),A=document.querySelector(".swiper-pagination2");if(!d.matches){q.destroy(),x.classList.remove("swiper2"),x.classList.remove("brands__list"),E.classList.remove("swiper-wrapper"),E.classList.add("brands__list"),A.classList.add("hidden");var k,M=n(u);try{for(M.s();!(k=M.n()).done;){var O=k.value;O.classList.add("brand"),O.classList.remove("swiper-slide")}}catch(e){M.e(e)}finally{M.f()}}},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t){var r=document.querySelector(".report-button"),n=document.querySelector(".order-button"),o=document.querySelectorAll(".modal"),i=document.querySelectorAll(".close-button");modalOrder=o[0],modalReport=o[1],closeButtonreport=i[1],closeButtonOrder=i[0],console.log(closeButtonreport),r.addEventListener("click",(function(){modalOrder.classList.remove("hidden")})),n.addEventListener("click",(function(){modalReport.classList.remove("hidden")})),closeButtonreport.addEventListener("click",(function(){modalReport.classList.contains("hidden")||modalReport.classList.add("hidden")})),closeButtonOrder.addEventListener("click",(function(){modalOrder.classList.contains("hidden")||modalOrder.classList.add("hidden")}))},function(e,t){var r=document.querySelector(".tech-repair"),n=document.querySelector(".tech-container"),o=r.querySelector(".brands__list"),i=n.children,a=window.matchMedia("(min-width: 768px)"),s=window.matchMedia("(min-width: 1120px)"),c=r.querySelector(".second-title"),l=r.querySelector(".second-title-icon"),d=c.querySelector("p");if(console.log(o),a.matches&&!s.matches)for(var u=3;u<=i.length-1;u++)i[u].classList.add("hidden");a.matches&&!s.matches&&c.addEventListener("click",(function(){if(o.classList.contains("button-close")){o.classList.remove("button-close"),o.classList.add("button-open"),l.classList.add("button-rotate"),l.classList.remove("button-not-rotate"),d.textContent="Скрыть";for(var e=0;e<=i.length;e++)i[e].classList.remove("hidden")}else if(o.classList.contains("button-open")){o.classList.add("button-close"),o.classList.remove("button-open"),l.classList.add("button-not-rotate"),l.classList.remove("button-rotate"),d.textContent="Показать всё";for(var t=3;t<=i.length-1;t++)i[t].classList.add("hidden")}}))},function(e,t,r){},function(e,t){var r=document.querySelector(".page-header__icon-menu"),n=document.querySelector(".modal-menu"),o=document.querySelector(".modal-header__opened-menu");console.log(o),r.addEventListener("click",(function(){n.classList.remove("hidden")})),o.addEventListener("click",(function(){n.classList.add("hidden")})),window.matchMedia("(min-width: 1440px)").matches&&n.classList.remove("hidden")},function(e,t){function r(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,a=!0,s=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==o.return||o.return()}finally{if(s)throw i}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o=document.querySelector(".price"),i=o.querySelector(".price__table-title"),a=o.querySelector(".table-container"),s=(a.querySelector(".price__product"),a.querySelectorAll(".price__product")),c=(i.querySelector(".table-title__name"),i.querySelector(".table-title__price"),i.querySelector(".table-title__time"),a.querySelectorAll(".product__name")),l=a.querySelectorAll(".product__price"),d=a.querySelectorAll(".product__time"),u=window.matchMedia("(max-width: 767px)"),m=a.querySelectorAll(".block-divider");if(u.matches){var p=document.createElement("div");p.className="block-title-name",p.innerHTML="Ремонтные услуги";var f=document.createElement("div");f.className="block-title-price",f.innerHTML="Цена";var v=document.createElement("div");v.className="block-title-time",v.innerHTML="Срок",i.classList.add("hidden");var b,y=r(m);try{for(y.s();!(b=y.n()).done;){b.value.classList.add("hidden")}}catch(e){y.e(e)}finally{y.f()}for(var h=0;h<s.length;h++){var w=document.createElement("div");w.className="block-title-name",w.innerHTML="Ремонтные услуги";var L=document.createElement("div");L.className="block-title-price",L.innerHTML="Цена";var S=document.createElement("div");S.className="block-title-time",S.innerHTML="Срок",c[h].before(w),l[h].before(L),d[h].before(S)}}var g=new Swiper(".swiper-price",{direction:"horizontal",loop:!1,slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination-price",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),_=document.querySelector(".swiper-price"),q=document.querySelector(".swiper-pagination-price");if(!u.matches){g.destroy(),_.classList.remove("swiper2"),a.classList.remove("swiper-wrapper"),q.classList.add("hidden");var x,E=r(s);try{for(E.s();!(x=E.n()).done;){x.value.classList.remove("swiper-slide")}}catch(e){E.e(e)}finally{E.f()}}}]);
//# sourceMappingURL=bundle.js.map