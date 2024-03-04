const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth;
let currentIndex = 0;

function slideNext() {
    currentIndex++;
    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }
    updateSlider();
}

function slidePrev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    }
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

setInterval(slideNext, 3000);