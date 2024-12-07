document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const header = document.querySelector('.header');
    const headerInner = document.querySelector('.header-inner');
    const headerLogo = document.querySelector('.header-logo');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdown = document.querySelector('.dropdown');
    const headerLinkRight = document.querySelector('.header-link-right');
    const body = document.body;

    mobileMenuButton.addEventListener('click', function() {
        header.classList.toggle('expanded');
        headerInner.classList.toggle('expanded');
        headerLogo.classList.toggle('expanded');
        dropdown.classList.toggle('expanded');
        dropdownMenu.classList.toggle('expanded');
        headerLinkRight.classList.toggle('expanded');

        mobileMenuButton.classList.toggle('expanded');
        body.classList.toggle('body-no-scroll');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modalBackground = document.querySelector('.modalBackground');
    const modalActive = document.querySelector('.modalActive');
    const openModalButton = document.querySelector('[data-modal]');
    const closeModalButton = document.querySelector('.modalClose');
    const body = document.body;
    const openModal = () => {
        modalBackground.style.display = 'block';
        body.classList.toggle('body-no-scroll');
    };
    const closeModal = () => {
        modalBackground.style.display = 'none';
        body.classList.toggle('body-no-scroll');
    };

    openModalButton.addEventListener('click', function(event) {
        event.preventDefault();
        openModal();
    });
    closeModalButton.addEventListener('click', function(event) {
        event.stopPropagation();
        closeModal();
    });
    modalBackground.addEventListener('click', function(event) {
        if (event.target === modalBackground) {
            closeModal();
        }
    });
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
