const slides = document.querySelectorAll('.slides > .slide');
const miniatures = document.querySelectorAll('.miniatures-list > .item');
const next = document.querySelector('.navigation-btn > .next');
const prev = document.querySelector('.navigation-btn > .prev');

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const timeout = 7000;

let slide = startFromSlide();
let timeoutId;

start();
miniaturesInitialize();

function start() {
    timeoutId = setTimeout(run, timeout);
}

function stop() {
    clearTimeout(timeoutId);
}

function run() {
    slider();
    timeoutId = setTimeout(run, timeout);
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

function changeSlide() {
    slides[slide].classList.add('show');
    miniatures[slide].classList.add('current');

    for (let i = 0; i < slides.length; i++) {
        if (i != slide) {
            slides[i].classList.remove('show');
            miniatures[i].classList.remove('current');
        }
    }
}

function startFromSlide() {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('show')) {
            return i;
        }
    }
}

function miniaturesInitialize() {
    for (let i = 0; i < miniatures.length; i++) {
        miniatures[i].addEventListener('click', function () {
            stop();
            animationOff();

            slide = i;

            changeSlide();
            start();
        });
    }
}