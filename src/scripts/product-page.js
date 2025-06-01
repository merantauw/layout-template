let mySwiper = null;
let mySwiper2 = null;

function initSliders() {
    if (mySwiper !== null) {
        mySwiper.destroy();
        mySwiper = null;
    }

    if (mySwiper2 !== null) {
        mySwiper2.destroy();
        mySwiper2 = null;
    }

    const isMobile = window.innerWidth < 769;

    // --- Слайдер миниатюр (mySwiper) ---
    mySwiper = new Swiper(".mySwiper", {
        direction: isMobile ? 'horizontal' : 'vertical',
        spaceBetween: 10,
        slidesPerView: isMobile ? 3.5 : 4,
        watchSlidesProgress: true,
        mousewheel: true,
        loop: false,
        grabCursor: true,
        slideToClickedSlide: true,
        freeMode: {
            enabled: true,
            sticky: true,
            momentumBounce: false
        },
        resistance: true,
        resistanceRatio: 0,
    });

    // --- Большой слайдер (mySwiper2) — создаём только один раз ===
    if (!mySwiper2) {
        mySwiper2 = new Swiper(".mySwiper2", {
            direction: 'horizontal',
            spaceBetween: 30,
            mousewheel: true,
            loop: false,
            thumbs: {
                swiper: mySwiper,
            }
        });
    } else {
        mySwiper2.params.thumbs.swiper = mySwiper;
        mySwiper2.update();
    }
}

// === Функция изменения структуры DOM на мобильных устройствах ===
function rearrangeProductLayout() {
    const wrapperContainer = document.querySelector('.product__wrapper-container');
    const priceBlock = document.querySelector('.product__price');

    if (!wrapperContainer || !priceBlock) return;

    const isMobile = window.innerWidth < 1025;

    const sliderInner = wrapperContainer.querySelector('.product__slider-inner');
    const infoBlock = wrapperContainer.querySelector('.product__info');

    if (isMobile) {
        if (!wrapperContainer.contains(priceBlock)) {
            if (sliderInner && infoBlock) {
                wrapperContainer.insertBefore(priceBlock, infoBlock);
            }
        }
    } else {
        const originalParent = priceBlock.dataset.originalParent;
        if (originalParent && originalParent !== wrapperContainer) {
            document.querySelector(originalParent)?.appendChild(priceBlock);
        }
    }
}

// === Запоминаем оригинального родителя .product__price ===
const originalParent = document.querySelector('.product__price').parentNode;
if (originalParent) {
    document.querySelector('.product__price').dataset.originalParent =
        '.' + [...originalParent.classList].join('.');
}

// === Объединённая функция запуска ===
function initApp() {
    initSliders();
    rearrangeProductLayout();
}

// === Слушатели событий ===
window.addEventListener('load', initApp);
window.addEventListener('resize', () => {
    setTimeout(initApp, 200);
});
