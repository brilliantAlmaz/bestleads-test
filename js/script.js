const sections = document.querySelectorAll('section');
const header = document.querySelector('header');



function init() {
   sections.forEach(i => {
      i.style.height = window.innerHeight - header.clientHeight + 'px';
      i.style.padding = (i.clientHeight - i.querySelector('.container').clientHeight) / 2 + 'px 0';
      i.style.minWidth = window.innerWidth + 'px';
   })
}

if (document.addEventListener) {
   if ('onwheel' in document) {
      // IE9+, FF17+, Ch31+
      document.addEventListener("wheel", onWheel);
   } else if ('onmousewheel' in document) {
      // устаревший вариант события
      document.addEventListener("mousewheel", onWheel);
   } else {
      // Firefox < 17
      document.addEventListener("MozMousePixelScroll", onWheel);
   }
} else { // IE8-
   document.attachEvent("onmousewheel", onWheel);
}

function onWheel(e) {
   e = e || window.event;

   // wheelDelta не даёт возможность узнать количество пикселей
   var delta = e.deltaY || e.detail || e.wheelDelta;

   var info = document.getElementById('delta');
   console.log(delta);

   e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}
init();
window.addEventListener('resize', init)