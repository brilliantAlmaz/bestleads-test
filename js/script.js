document.querySelector('#main').style.minHeight = document.querySelector('.main__image').clientHeight + 100 + 'px';
document.querySelectorAll('.services__btns .btn').forEach(i => {
   i.style.width = Math.max(document.querySelectorAll('.services__btns .btn')[0].clientWidth, document.querySelectorAll('.services__btns .btn')[1].clientWidth) + 'px';
})

const servicesSwiper = new Swiper('#services .swiper ', {
   loop: false,
   spaceBetween: 30
});

servicesSwiper.on('slideChange', () => {
   document.querySelector('.services-dev-btn').classList.toggle('inactive');
   document.querySelector('.services-add-btn').classList.toggle('inactive');
})

document.querySelector('.services-dev-btn').addEventListener('click', () => {
   servicesSwiper.slideNext();
   document.querySelector('.services-dev-btn').classList.toggle('inactive');
   document.querySelector('.services-add-btn').classList.toggle('inactive');
})

document.querySelector('.services-add-btn').addEventListener('click', () => {
   servicesSwiper.slidePrev();
   document.querySelector('.services-dev-btn').classList.toggle('inactive');
   document.querySelector('.services-add-btn').classList.toggle('inactive');
})

document.querySelectorAll('#services .swiper-slide').forEach(i => {
   i.style.height = Math.max(document.querySelectorAll('#services .swiper-slide')[0].clientHeight, document.querySelectorAll('#services .swiper-slide')[1].clientHeight) + 'px';
})


const reviewsSwiper = new Swiper('#reviews .swiper', {
   loop: false,
   navigation: {
      nextEl: '#reviews .swiper-button-next',
      prevEl: '#reviews .swiper-button-prev',
   },
   spaceBetween: 60,
   slidesPerView: 3
})

document.querySelectorAll('#reviews .swiper-slide').forEach(i => {
   document.querySelector('.rev-pagination').insertAdjacentHTML('beforeend', "<li></li>")
})
let reviewsCount = 0;
let reviewsLength = document.querySelectorAll('#reviews .swiper-slide').length;
document.querySelectorAll('.rev-pagination li')[reviewsCount].classList.add('active');

reviewsSwiper.on('slideChange', () => {
   if (reviewsCount < reviewsLength) {
      reviewsCount++;
   }
   else {
      reviewsCount = 0;
   }
   document.querySelectorAll('.rev-pagination li').forEach(j => {
      j.classList.remove('active');
   })
   document.querySelectorAll('.rev-pagination li')[reviewsCount].classList.add('active');
})
function checkVisible(elm) {
   var rect = elm.getBoundingClientRect();
   var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
   return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
document.querySelector('.content').style.top = document.querySelector('header').clientHeight + 'px';


const sections = document.querySelectorAll('section');
const wrappers = document.querySelectorAll('.ii');
sections.forEach((i, index) => {
   wrappers[index].style.height = sections[index].clientHeight + 'px';
   wrappers[index].style.minHeight = sections[index].clientHeight + 'px';
   wrappers[index].style.width = window.innerWidth + 'px'
   wrappers[index].style.maxWidth = window.innerWidth + 'px'
   wrappers[index].style.top = document.querySelector('header').clientHeight + 'px';
   sections[index].style.height = sections[index].clientHeight + 'px';
   sections[index].style.minHeight = sections[index].clientHeight + 'px';
   sections[index].style.width = window.innerWidth + 'px'
   sections[index].style.maxWidth = window.innerWidth + 'px'

})

document.addEventListener('scroll', () => {
   wrappers.forEach((item, index) => {
      if (index < wrappers.length - 1)
         if (item.offsetTop <= pageYOffset) {
            item.querySelector('section').style.position = 'fixed';
            if (window.innerHeight < item.clientHeight)
               item.querySelector('section').style.top = window.innerHeight - item.clientHeight + 'px';

         }
         else {
            item.querySelector('section').style.position = 'relative';
            item.querySelector('section').style.top = 0 + 'px';


         }

   })
   if (pageYOffset > 500) {
      document.querySelector('header').classList.add('scrolled')
   }
   else {
      document.querySelector('header').classList.remove('scrolled')

   }

   console.log(document.querySelectorAll('.ii')[1].offsetTop)
   console.log(pageYOffset)
})
