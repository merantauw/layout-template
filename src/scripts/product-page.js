document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            this.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Show the selected tab content
            document.getElementById(tabId).classList.add('active');
        });
    });
});


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
