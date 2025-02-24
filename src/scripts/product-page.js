    var swiper = new Swiper(".mySwiper", {
    direction: 'vertical',
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    loop: true,
    watchSlidesProgress: true,
});
    var swiper2 = new Swiper(".mySwiper2", {
    direction: 'horizontal',
    spaceBetween: 30,
    loop: true,
    mousewheel: true,
    thumbs: {
    swiper: swiper,
},
});
