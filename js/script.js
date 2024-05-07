const sections = document.querySelectorAll('section');
const header = document.querySelector('header');

document.querySelectorAll('.container').forEach(i => {
   console.log(i.clientHeight);
})
let d;
let r;
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
   d = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight);
   document.querySelector('head').insertAdjacentHTML('beforeend', `<style>:root{--radius:${d}px}</style>`);
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

   changeSection(delta);
}

$(function () {
   $('#content').swipe({
      swipe: async function (event, direction) {
         let direct = 0;
         if (direction == 'up') {
            direct = 1
         }
         else if (direction == 'down') {
            direct = -1;
         }
         if (allowChange) {
            if (direct > 0) {
               if (count < length - 1) {
                  count++;
                  slider.querySelectorAll('.ii')[count].querySelectorAll('.wow').forEach(i => {
                     console.log(i);
                     animateStart();
                     timerAnimate = setTimeout(() => {
                        document.querySelector('.el').style.transition = "none"
                        document.querySelector('.el-2').style.transition = "none"
                        document.querySelector('.el').classList.remove('active')
                        document.querySelector('.el-2').classList.remove('active');
                        slider.style.transform = `translate(-${count * window.innerWidth}px)`;
                        document.querySelector('.animation-block').style.zIndex = -1;
                     }, 1500);
                     forceWowReanimation(i)

                  })
               }
            }
            else {
               if (count > 0) {
                  count--;
                  slider.querySelectorAll('.ii')[count].querySelectorAll('.wow').forEach(i => {
                     console.log(i);
                     animateStart();
                     timerAnimate = setTimeout(() => {
                        document.querySelector('.el').style.transition = "none"
                        document.querySelector('.el-2').style.transition = "none"
                        document.querySelector('.el').classList.remove('active')
                        document.querySelector('.el-2').classList.remove('active');
                        slider.style.transform = `translate(-${count * window.innerWidth}px)`;
                        document.querySelector('.animation-block').style.zIndex = -1;
                     }, 1500);
                     forceWowReanimation(i)

                  })
               }

            }

            allowChange = false;
         } else {
            clearTimeout(t)
            t = setTimeout(() => {
               allowChange = true;
            }, 300);
         }
      },

   });
});

const slider = document.querySelector('#content');
console.log(slider)
const length = slider.querySelectorAll('.ii').length;
console.log(length)

let count = 0;

window.wow = new WOW({});
wow.init();

let timerAnimate;
async function animateStart() {
   clearTimeout(timerAnimate)
   document.querySelector('.animation-block').style.zIndex = 10;

   document.querySelector('.el').style.transition = "all 1s ease 0s"
   document.querySelector('.el-2').style.transition = "all 1s ease 0.3s"
   document.querySelector('.el').classList.add('active')
   document.querySelector('.el-2').classList.add('active');
   // timerAnimate = setTimeout(() => {
   //    document.querySelector('.el').style.transition = "none"
   //    document.querySelector('.el-2').style.transition = "none"
   //    document.querySelector('.el').classList.remove('active')
   //    document.querySelector('.el-2').classList.remove('active');
   // }, 1000);
}
async function forceWowReanimation(element) {
   element.classList.remove('animated');
   element.style.removeProperty('animation-iteration-count');
   element.style.removeProperty('animation-delay');
   element.style.removeProperty('animation-iteration-count');
   element.style.removeProperty('animation-name');
   wow.applyStyle(element, true);
   setTimeout(function () {
      wow.show(element);
   }, 1500);
}
let t;
let allowChange = false;
let timerWOW;
async function changeSection(direct) {
   if (allowChange) {
      if (direct > 0) {
         if (count < length - 1) {
            count++;
            slider.querySelectorAll('.ii')[count].querySelectorAll('.wow').forEach(i => {
               console.log(i);
               animateStart();
               timerAnimate = setTimeout(() => {
                  document.querySelector('.el').style.transition = "none"
                  document.querySelector('.el-2').style.transition = "none"
                  document.querySelector('.el').classList.remove('active')
                  document.querySelector('.el-2').classList.remove('active');
                  slider.style.transform = `translate(-${count * window.innerWidth}px)`;
                  document.querySelector('.animation-block').style.zIndex = -1;
               }, 1500);
               forceWowReanimation(i)

            })
         }
      }
      else {
         if (count > 0) {
            count--;
            slider.querySelectorAll('.ii')[count].querySelectorAll('.wow').forEach(i => {
               console.log(i);
               animateStart();
               timerAnimate = setTimeout(() => {
                  document.querySelector('.el').style.transition = "none"
                  document.querySelector('.el-2').style.transition = "none"
                  document.querySelector('.el').classList.remove('active')
                  document.querySelector('.el-2').classList.remove('active');
                  slider.style.transform = `translate(-${count * window.innerWidth}px)`;
                  document.querySelector('.animation-block').style.zIndex = -1;
               }, 1500);
               forceWowReanimation(i)

            })
         }

      }

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



