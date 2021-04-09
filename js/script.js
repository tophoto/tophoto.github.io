// const navigation = document.querySelector('.navigation')
// document.querySelector('.toggle').onclick = function(){
//    this.classList.toggle('active')
//    navigation.classList.toggle('active')
// }

// var swiper = new Swiper('.swiper-container', {
//    effect: 'coverflow',
//    grabCursor: true,
//    centeredSlides: true,
//    slidesPerView: 'auto',
//    coverflowEffect: {
//    rotate: 0,
//    stretch: 0,
//    depth: 150,
//    modifier: 3,
//    slideShadows: true,
//    },
//    loop: true,
// });

// var swiper = new Swiper('.swiper-container', {
//    direction: 'vertical',
//    pagination: {
//      el: '.swiper-pagination',
//      clickable: true,
//    },
//  });

var swiper = new Swiper('.swiper-container', {
   effect: 'flip',
   grabCursor: true,
   pagination: {
     el: '.swiper-pagination',
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
});