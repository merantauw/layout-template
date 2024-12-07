document.addEventListener('DOMContentLoaded', function() {
    const leftScrollButtonBlog = document.querySelector('.left-scroll-blog');
    const rightScrollButtonBlog = document.querySelector('.right-scroll-blog');
    const blogCardsContainer = document.getElementById('blogCardsContainer');

    leftScrollButtonBlog.addEventListener('click', () => {
        blogCardsContainer.scrollBy({
            left: -420,
            behavior: 'smooth'
        });
    });

    rightScrollButtonBlog.addEventListener('click', () => {
        blogCardsContainer.scrollBy({
            left: 420,
            behavior: 'smooth'
        });
    });
});