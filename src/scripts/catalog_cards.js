document.addEventListener('DOMContentLoaded', function() {
    const leftScrollButton = document.querySelector('.left-scroll');
    const rightScrollButton = document.querySelector('.right-scroll');
    const catalog = document.querySelector('.catalog');

    leftScrollButton?.addEventListener('click', () => {
        catalog.scrollBy({
            left: -420,
            behavior: 'smooth'
        });
    });

    rightScrollButton?.addEventListener('click', () => {
        catalog.scrollBy({
            left: 420,
            behavior: 'smooth'
        });
    });
});
