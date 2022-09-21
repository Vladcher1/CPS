const techRepair = document.querySelector('.tech-repair');
const techContainer = document.querySelector('.tech-container');
const listElements = techContainer.children;
const media768 = window.matchMedia('(min-width: 768px)')
const media1120 = window.matchMedia('(min-width: 1120px)')
const buttonClose = techRepair.querySelector('.second-title');
const icon = techRepair. querySelector('.second-title-icon');
console.log(icon);
if (media768.matches && !media1120.matches) {
for (let i = 3; i <= listElements.length - 1; i++ ){

   listElements[i].classList.add('hidden');
}
} 

buttonClose.addEventListener('click', function () {
   if (icon.classList.contains('button-not-rotate')) {
     icon.classList.add('button-rotate')
     icon.classList.remove('button-not-rotate')
   //   buttonClose.textContent = 'Скрыть';
   } else {
     icon.classList.add('button-not-rotate')
     icon.classList.remove('button-rotate')
   //   buttonClose.textContent = 'Показать всё';
   }
 })

