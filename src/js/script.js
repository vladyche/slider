const slides = document.querySelectorAll('.slides > .slide');
const next = document.querySelector('.navigation-btn > .next');
const prev = document.querySelector('.navigation-btn > .prev');

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const timeout = 7000;

let slide = startFromSlide();
let timeoutId;

start();

function run() {
    slider();
    setTimeout(run, timeout);
}

function slider() {
    animationOn();
    increment();
    changeSlide();
}

function nextSlide() {
    stop();
    animationOff();
    increment();
    changeSlide();
    start();
}

function prevSlide() {
    stop();
    animationOff();
    decrement();
    changeSlide();
    start();
}

function changeSlide() {
    slides[slide].classList.add('show');

    for (let i = 0; i < slides.length; i++) {
        if (i != slide) {
            slides[i].classList.remove('show');
        }
    }
}

function start() {
    timeoutId = setTimeout(run, timeout);
}

function stop() {
    clearTimeout(timeoutId);
}

function animationOff() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('na');
    }
}

function animationOn() {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('na')) {
            slides[i].classList.remove('na');
        }
    }
}

function increment() {
    slide++;
    if (slide > slides.length - 1) {
        slide = 0;
    }
}

function decrement() {
    slide--;
    if (slide < 0) {
        slide = slides.length - 1;
    }
}

function startFromSlide() {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('show')) {
            return i;
        }
    }
}