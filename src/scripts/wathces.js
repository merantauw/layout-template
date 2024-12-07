document.addEventListener('DOMContentLoaded', function() {
    const regions = [
        { element: document.querySelector('.footer-watch:nth-child(1)'), timezone: 'Europe/London' },
        { element: document.querySelector('.footer-watch:nth-child(2)'), timezone: 'America/New_York' },
        { element: document.querySelector('.cyprus-watch'), timezone: 'Asia/Nicosia' },
        { element: document.querySelector('.footer-watch:nth-child(4)'), timezone: 'America/Toronto' },
        { element: document.querySelector('.footer-watch:nth-child(5)'), timezone: 'Europe/Madrid' }
    ];


    function updateWatches() {
        regions.forEach(region => {
            const currentTime = new Date().toLocaleString('en-US', { timeZone: region.timezone });
            const date = new Date(currentTime);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const isAm = hours < 12;
            const displayHours = hours % 12 || 12;
            const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
            const period = isAm ? 'AM' : 'PM';


            const regionTimeElem = region.element.querySelector('.region-time');
            regionTimeElem.textContent = `${displayHours}:${displayMinutes} ${period}`;


            const hourAngle = ((hours % 12) + minutes / 60) * 30;
            const minuteAngle = minutes * 6;

            const watchArrow = region.element.querySelector('.watch-arrow');
            watchArrow.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
        });
    }

    function syncTimeUpdate() {
        const now = new Date();
        const msToNextMinute = (60 - now.getSeconds()) * 1000;

        updateWatches();

        setTimeout(function() {
            updateWatches();
            setInterval(updateWatches, 60000);
        }, msToNextMinute);
    }

    syncTimeUpdate();
});