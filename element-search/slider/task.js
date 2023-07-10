const images = Array.from(document.querySelectorAll(".slider__item"));
const nextArrow = document.querySelector(".slider__arrow_next");
const backArrow = document.querySelector(".slider__arrow_prev");
const dots = Array.from(document.getElementsByClassName("slider__dot"));

let currentImg = 0;

function removeActive() {
    images[currentImg].classList.remove("slider__item_active");
    dots[currentImg].classList.remove("slider__dot_active");
}

function addActive() {
    images[currentImg].classList.add("slider__item_active");
    dots[currentImg].classList.add("slider__dot_active");
}

nextArrow.onclick = () => {
    removeActive()
    currentImg++;
    if (currentImg >= images.length) {
        currentImg = 0;
    }
    addActive();
}

backArrow.onclick = () => {
    removeActive()
    currentImg--;
    if (currentImg < 0) {
        currentImg = images.length - 1;
    }
    addActive();
}

dots.forEach(function (dot, i) {
    dot.onclick = () => {
        removeActive();
        currentImg = i;
        addActive();
    }
})
