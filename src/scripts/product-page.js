/*
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
            document.querySelector(originalParent).appendChild(priceBlock);
        }
    }
}

const originalParent = document.querySelector('.product__price').parentNode;
document.querySelector('.product__price').dataset.originalParent =
    '.' + [...originalParent.classList].join('.');

window.addEventListener('load', rearrangeProductLayout);
window.addEventListener('resize', () => {
    setTimeout(rearrangeProductLayout, 100);
});

function initSwiper() {
    // Если уже был создан — уничтожаем
    if (mySwiper !== undefined && mySwiper !== null) {
        mySwiper.destroy();
        mySwiper = null;
    }

    const isMobile = window.innerWidth < 769;

    mySwiper = new Swiper(".mySwiper", {
        direction: isMobile ? 'horizontal' : 'vertical',
        spaceBetween: 10,
        freeMode: true,
        loop: true,
        watchSlidesProgress: true,
    });
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', () => {
    setTimeout(initSwiper, 200);
});*/

let mySwiper = null;
let mySwiper2 = null;

function initSliders() {
    // Уничтожаем предыдущие экземпляры, если есть
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
        slidesPerView: isMobile ? 2 : 4,
        freeMode: true,
        loop: false,
        watchSlidesProgress: true,
        updateOnWindowResize: true,

        on: {
            setTranslate: function (translate) {
                const maxTranslate = this.maxTranslate();
                const minTranslate = this.minTranslate();

                if (translate > minTranslate) {
                    this.setTranslate(minTranslate);
                } else if (translate < maxTranslate) {
                    this.setTranslate(maxTranslate);
                }
            }
        }
    });

    // --- Большой слайдер (mySwiper2) — создаём только один раз ===
    if (!mySwiper2) {
        mySwiper2 = new Swiper(".mySwiper2", {
            direction: 'horizontal',
            spaceBetween: 30,
            loop: true,
            mousewheel: true,
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