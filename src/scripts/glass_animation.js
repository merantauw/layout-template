let loadedGlassImages = [];

function preloadGlassImages(imagePaths, callback) {
    let loadedImagesCount = 0;
    const imagesArray = [];

    imagePaths.forEach((path, index) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
            loadedImagesCount++;
            if (loadedImagesCount === imagePaths.length) {
                callback(imagesArray);
            }
        };
        img.onerror = () => {
            console.error(`Ошибка загрузки изображения: ${path}`);
        };
        imagesArray.push(img);
    });
}

const glassAnimationFrames = [];
for (let i = 1; i <= 51; i++) {
    const paddedFrame = String(i).padStart(2, '0');
    glassAnimationFrames.push(`assets/images/avif/glass_white/00${paddedFrame}.avif`);
}

preloadGlassImages(glassAnimationFrames, (images) => {
    loadedGlassImages = images;
});