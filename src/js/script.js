const slides = document.querySelectorAll('.slides > .slide');

const timeout = 7000;

let slide = startFromSlide();

start();

function start() {
    setTimeout(run, timeout);
}

function run() {
    slider();
    setTimeout(run, timeout);
}

function slider() {
    increment();
    changeSlide();
}

function changeSlide() {
    slides[slide].classList.add('show');

    for (let i = 0; i < slides.length; i++) {
        if (i != slide) {
            slides[i].classList.remove('show');
        }
    }
}

function increment() {
    slide++;
    if (slide > slides.length - 1) {
        slide = 0;
    }
}

function startFromSlide() {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('show')) {
            return i;
        }
    }
}