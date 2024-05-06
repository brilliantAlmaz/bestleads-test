const sections = document.querySelectorAll('section');
const header = document.querySelector('header');

document.querySelectorAll('.container').forEach(i => {
   console.log(i.clientHeight);
})

function init() {
   sections.forEach(i => {
      let container = i.querySelector('.container').clientHeight;
      console.log(container)
      i.style.maxHeight = parseInt(window.innerHeight - header.clientHeight) + 'px';
      i.style.minHeight = parseInt(window.innerHeight - header.clientHeight) + 'px';
      if (i.clientHeight > container)
         i.style.padding = parseInt(i.clientHeight - container) / 2 + 'px 0';
      else {
         i.style.padding = '0px 0';

      }
      i.style.minWidth = window.innerWidth + 'px';
   })
   slider.style.transform = `translate(-${count * window.innerWidth}px)`;

}



if ("ontouchstart" in window) {
   window.addEventListener('touchmove', onWheel);
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


async function onWheel(e) {
   e = e || window.event;

   var delta = e.deltaY || e.detail || e.wheelDelta;

   var info = document.getElementById(delta);
   changeSection(delta);
   console.log(allowChange)
}

const slider = document.querySelector('#content');
console.log(slider)
const length = slider.querySelectorAll('.ii').length;
console.log(length)

let count = 0;

window.wow = new WOW({});
wow.init();
async function forceWowReanimation(element) {
   element.classList.remove('animated');
   element.style.removeProperty('animation-iteration-count');
   element.style.removeProperty('animation-delay');
   element.style.removeProperty('animation-iteration-count');
   element.style.removeProperty('animation-name');
   wow.applyStyle(element, true);
   setTimeout(function () {
      wow.show(element);
   }, 10);
}
let t;
let allowChange = false;
async function changeSection(direct) {
   if (allowChange) {
      if (direct > 0) {
         if (count < length - 1) {
            count++;
            slider.querySelectorAll('.ii')[count].querySelectorAll('.wow').forEach(i => {
               console.log(i);
               forceWowReanimation(i)
            })
         }
      }
      else {
         if (count > 0) {
            count--;
            slider.querySelectorAll('.ii')[count].querySelectorAll('.wow').forEach(i => {
               console.log(i);
               forceWowReanimation(i)
            })
         }

      }
      slider.style.transform = `translate(-${count * window.innerWidth}px)`;
      allowChange = false;
   } else {
      clearTimeout(t)
      t = setTimeout(() => {
         allowChange = true;
      }, 300);
   }
   // console.log(allowChange);




}

// 

function specialFunction() {
   const innerWidth = document.querySelector('.container').clientWidth -
      parseInt(window.getComputedStyle(document.querySelector('.container'), null).getPropertyValue('padding-left')) * 2
   let h1 = document.querySelector('h1');
   if (window.innerWidth < 900) {
      let h1 = document.querySelector('h1');
      h1.style.fontSize = 2.25 * innerWidth / (h1.textContent.length) + 'px';

   }
   else {
      h1.style.fontSize = '15rem';
   }

}
specialFunction();
window.addEventListener('resize', specialFunction)

let lol;
init();
window.addEventListener('resize', async () => {
   init();
   if (lol)
      clearTimeout(lol);
   lol = setTimeout(() => {
      init()
   }, 200);
});