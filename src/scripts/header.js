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

    function toggleHeaderClass() {
        if (window.scrollY > 117) {
            header.classList.add("active");
            headerWrapper.classList.add("active");
            if (placeholder) placeholder.style.display = "block";
        } else {
            header.classList.remove("active");
            headerWrapper.classList.remove("active");
            if (placeholder) placeholder.style.display = "none";
        }
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