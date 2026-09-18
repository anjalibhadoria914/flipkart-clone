let slides = document.querySelectorAll(".slider img");
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
}

setInterval(showSlide, 3000);