const sections = document.querySelectorAll('section');
const header = document.querySelector('header');



function init() {
   sections.forEach(i => {
      i.style.height = window.innerHeight - header.clientHeight + 'px';
      i.style.padding = (i.clientHeight - i.querySelector('.container').clientHeight) / 2 + 'px 0';
      i.style.minWidth = window.innerWidth + 'px';
   })
}

init();
window.addEventListener('resize', init)