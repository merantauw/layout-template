document.addEventListener('DOMContentLoaded', function () {
    const seoView = document.getElementById('seoView');
    const showSeoBtn = document.getElementById('showSeoBtn');
    const hideSeoBtn = document.getElementById('hideSeoBtn');

    showSeoBtn.addEventListener('click', () => {
        seoView.classList.add('full');
    });

    hideSeoBtn.addEventListener('click', () => {
        seoView.classList.remove('full');
    });
});