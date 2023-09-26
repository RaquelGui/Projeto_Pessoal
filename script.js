document.addEventListener('DOMContentLoaded', function () {
    const carrosselContainers = document.querySelectorAll('.carrosel-container');

    carrosselContainers.forEach(function (container) {
        const slides = container.querySelectorAll('.slide');
        const prevButton = container.querySelector('.prev-button');
        const nextButton = container.querySelector('.next-button');
        let currentIndex = 0;

        nextButton.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            updateCarrossel();
        });

        prevButton.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = slides.length - 1;
            }
            updateCarrossel();
        });

        function updateCarrossel() {
            slides.forEach((slide, index) => {
                if (index === currentIndex) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            });
        }
    });
});
