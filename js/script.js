document.addEventListener("DOMContentLoaded", init);

function init() {
    const now = new Date();
    let color;
    showTime(now);

    const hour = now.getHours();
    document.querySelector("#hour").innerText = hour;

    showMessage(hour);
}

function showTime(now) {
    document.querySelector("#time").innerText = now.getHours().toString().padStart(2, "0") + ":" +
        now.getMinutes().toString().padStart(2, "0") + ":" + now.getSeconds().toString().padStart(2, "0");
}

function showMessage(hour) {
    const message = getMessage(hour);
    const color = getColor(hour)
    element = document.querySelector("#message")
    element.innerText = message;
    element.style.color = color;
}

function getColor(hour) {
    if (hour < 6) {
        return "#6A3100"
    } else if (hour < 12) {
        return "#EEA922";
    } else if (hour < 18) {
        return "#EEA922"
    } else {
        return "#6A3100";
    }
}

function getMessage(hour) {
    if (hour < 6) {
        color = "dark"
        return "donkere ⏾ magische reis";
    } else if (hour < 12) {
        color = "yellow"
        return "warme ✹ magische reis";
    } else if (hour < 18) {
        color = "yellow"
        return "warme ✹ magische reis!";
    } else {
        return "donkere ⏾ magische reis ";
    }
}

const carrousel = document.querySelector(".carrousel__container");
const slide = document.querySelector(".carrousel__slide");

function handleCarouselMove(positive = true) {
    const slideWidth = slide.clientWidth;
    carrousel.scrollLeft = positive ? carrousel.scrollLeft + slideWidth : carrousel.scrollLeft - slideWidth;
}

const faqQuestions = document.querySelectorAll('.option__item');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        faqQuestions.forEach(item => {
            if (item !== question) {
                item.classList.remove('active');
                item.nextElementSibling.style.maxHeight = null;
            }
        });

        question.classList.toggle('active');

        const answer = question.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}

