document.addEventListener('DOMContentLoaded', function() {
    function moveTagsBlock() {
        // Получаем ширину окна
        const windowWidth = window.innerWidth;

        // Проверяем, меньше ли ширина окна 1024px
        if (windowWidth < 1024) {
            // Находим блок с классом article__tags
            const tagsBlock = document.querySelector('.article__tags');

            // Находим первый параграф с классом article__content-text
            const firstParagraph = document.querySelector('.article__content-text');

            // Проверяем, существуют ли оба элемента
            if (tagsBlock && firstParagraph) {
                // Вставляем блок с классом article__tags после первого параграфа
                firstParagraph.insertAdjacentElement('afterend', tagsBlock);
            }
        }
    }

    // Вызываем функцию при загрузке страницы
    moveTagsBlock();

    // Вызываем функцию при изменении размера окна
    window.addEventListener('resize', moveTagsBlock);
});