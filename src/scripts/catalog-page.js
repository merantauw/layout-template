document.addEventListener('DOMContentLoaded', function () {
    function initAccordion() {
        const accordionButtons = document.querySelectorAll('[data-accordion-button]');
        accordionButtons.forEach(accordionButton => {
            accordionButton.removeEventListener('click', toggleAccordion);
            accordionButton.addEventListener('click', toggleAccordion);
        });
    }

    function toggleAccordion(event) {
        const accordionItem = event.target.closest('[data-accordion-item]');
        const accordionContent = accordionItem.querySelector('[data-accordion-content]');
        const accordionHeader = accordionItem.querySelector('[data-accordion-button]');

        if (accordionContent && accordionHeader) {
            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null;
                accordionHeader.classList.remove('active');
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                accordionHeader.classList.add('active');
            }
        }
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                initAccordion();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Инициализация аккордеона при первой загрузке страницы
    initAccordion();
});