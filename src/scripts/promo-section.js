function updateBackgroundImage() {
    const promoBlock = document.getElementById('promoBlock');
    if (promoBlock) {
        console.log('Window width:', window.innerWidth);
        if (window.innerWidth < 520) {
            console.log('Setting mobile background image');
            promoBlock.style.backgroundImage = "url('assets/images/webp/main-bg-mobs.webp')";
        } else {
            console.log('Setting desktop background image');
            promoBlock.style.backgroundImage = "url('assets/images/webp/main-bg.webp')";
        }
    } else {
        console.error('Element with id "promoBlock" not found');
    }
}
document.addEventListener('DOMContentLoaded', updateBackgroundImage);
window.addEventListener('resize', updateBackgroundImage);