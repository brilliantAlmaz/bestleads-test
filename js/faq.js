const items = document.querySelectorAll('.faq__item');
let heights = [];
let heightsQuest = [];

items.forEach((item, index) => {
   heights.push(item.querySelector('.faq__quest').clientHeight + item.querySelector('.faq__answer').clientHeight + 2 * 20 + 16);
   heightsQuest.push(item.querySelector('.faq__quest').clientHeight + 2 * 20);
   item.style.height = item.querySelector('.faq__quest').clientHeight + 2 * 20 + 'px';
})

window.addEventListener('resize', () => {
   heights = [];
   heightsQuest = [];

   items.forEach((item, index) => {
      heights.push(item.querySelector('.faq__quest').clientHeight + item.querySelector('.faq__answer').clientHeight + 2 * 20 + 16);
      heightsQuest.push(item.querySelector('.faq__quest').clientHeight + 2 * 20);
      item.style.height = item.querySelector('.faq__quest').clientHeight + 2 * 20 + 'px';
   })
})

items.forEach((item, index) => {
   item.addEventListener('click', () => {
      item.classList.toggle("active");
      if (item.classList.contains('active')) {
         item.style.height = heights[index] + 'px';
      }
      else {
         item.style.height = heightsQuest[index] + 'px';

      }
   })
})