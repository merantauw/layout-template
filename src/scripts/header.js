document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');

    document.querySelector('[data-bs-target="#menuModal"]').addEventListener('show.bs.modal', function () {
        burger.classList.add('active');
    });

    document.querySelector('[data-bs-target="#menuModal"]').addEventListener('hide.bs.modal', function () {
        burger.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header.header--container");
    const headerWrapper = document.querySelector("div.header--wrapper");
    const placeholder = document.getElementById("header-placeholder");

    if (!header) return;

    let lastScrollY = window.scrollY;

    function toggleHeaderClass() {
        const currentScrollY = window.scrollY;
        const scrollThreshold = 117;

        // Скрываем header при скролле вниз, показываем только при скролле вверх или вверх до начала
        if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
            // Скроллим вниз и ниже порога → убираем active
            header.classList.remove("active");
            headerWrapper.classList.remove("active");
            if (placeholder) placeholder.style.display = "none";
        } else if (currentScrollY <= scrollThreshold || currentScrollY < lastScrollY) {
            // Скроллим вверх или выше порога → показываем header
            header.classList.add("active");
            headerWrapper.classList.add("active");
            if (placeholder) placeholder.style.display = "block";
        }

        lastScrollY = currentScrollY;
    }

    toggleHeaderClass();

    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                toggleHeaderClass();
                ticking = false;
            });
            ticking = true;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const currentPageUrl = window.location.href;

    const menuItems = document.querySelectorAll('a.btn.btn-outline-light');

    menuItems.forEach(link => {
        if (link.href) {
            const linkHref = new URL(link.href).pathname;
            const currentPath = new URL(currentPageUrl).pathname;

            if (currentPath.endsWith(linkHref)) {
                link.classList.add("active");
            }
        }
    });
});