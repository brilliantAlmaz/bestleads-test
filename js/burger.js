const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');


burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   headerMenu.classList.toggle('active');
})