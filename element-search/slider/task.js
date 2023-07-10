const images = Array.from(document.querySelectorAll(".slider__item"));
const nextArrow = document.querySelector(".slider__arrow_next");
const backArrow = document.querySelector(".slider__arrow_prev");
const dots = Array.from(document.getElementsByClassName("slider__dot"));


function removeActive(slide) {
    images[slide].classList.remove("slider__item_active");
    dots[slide].classList.remove("slider__dot_active");
}

function addActive(slide) {
    images[slide].classList.add("slider__item_active");
    dots[slide].classList.add("slider__dot_active");
}

nextArrow.onclick = () => {
    let currentImg = images.findIndex((item) => item.classList.contains("slider__item_active"));
    removeActive(currentImg)
    currentImg++;
    if (currentImg >= images.length) {
        currentImg = 0;
    }
    addActive(currentImg);
}

backArrow.onclick = () => {
    let currentImg = images.findIndex((item) => item.classList.contains("slider__item_active"));
    removeActive(currentImg)
    currentImg--;
    if (currentImg < 0) {
        currentImg = images.length - 1;
    }
    addActive(currentImg);
}

dots.forEach(function (dot, i) {
    dot.onclick = () => {
        let currentImg = images.findIndex((item) => item.classList.contains("slider__item_active"));
        removeActive(currentImg);
        currentImg = i;
        addActive(currentImg);
    }
})
