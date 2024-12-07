document.addEventListener('DOMContentLoaded', function() {
    const goodsLists = document.querySelectorAll('.goods__list');
    const scrollSpeed = 3;

    goodsLists.forEach(goodsList => {
        function handleWheel(event) {
            const scrollLeft = goodsList.scrollLeft;
            const scrollWidth = goodsList.scrollWidth;
            const clientWidth = goodsList.clientWidth;

            if (event.deltaY !== 0) {
                if (event.deltaY > 0 && scrollLeft + clientWidth >= scrollWidth) {
                    return;
                } else if (event.deltaY < 0 && scrollLeft <= 0) {
                    return;
                }

                event.preventDefault();
                goodsList.scrollLeft += event.deltaY * scrollSpeed;
            }
        }

        goodsList.addEventListener('wheel', handleWheel);
    });
});