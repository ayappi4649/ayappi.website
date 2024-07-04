// frog.js

document.addEventListener("DOMContentLoaded", function() {
    const skyElement = document.querySelector('.bush');
    const skyWidth = skyElement.offsetWidth;
    const skyHeight = skyElement.offsetHeight;

    function createGrass() {
        const grass = document.createElement('img');
        grass.src = 'rest_image/grass.png'; // Ensure you have this image in your directory
        grass.className = 'grass';
        grass.style.position = 'absolute';
        grass.style.bottom = '0px';
        grass.style.left = `${skyWidth}px`;

        // Random size for the grass images between 25px and 45px
        const randomSize = Math.random() * 20 + 25; // Random size between 25px and 45px
        grass.style.width = `${randomSize}px`;
        grass.style.height = 'auto';

        skyElement.appendChild(grass);

        // Consistent speed for grass movement
        const speed = 1.5; // Consistent speed

        function moveGrass() {
            const currentLeft = parseFloat(grass.style.left);
            if (currentLeft < -50) {
                grass.remove();
            } else {
                grass.style.left = `${currentLeft - speed}px`;
                requestAnimationFrame(moveGrass);
            }
        }

        moveGrass();
    }

    function scheduleGrassCreation() {
        createGrass();
        const randomDelay = Math.random() * 5000 + 2000; // Random delay between 2 and 7 seconds
        setTimeout(scheduleGrassCreation, randomDelay);
    }

    scheduleGrassCreation();
});
