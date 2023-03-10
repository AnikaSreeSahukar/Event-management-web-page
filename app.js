const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    console.log("click");
});

document.addEventListener("mouseup", (e) => {
    if (!navbar.contains(e.target) && navbar.classList.contains("open")) {
        navbar.classList.toggle("open");
    }
    if (!modal.contains(e.target) && modal.classList.contains("open")) {
        modal.classList.toggle("open");
    }
});

const cta = document.querySelector('.cta')
const modal = document.querySelector('.modal')
const submit = document.querySelector('.submit')

cta.addEventListener("click", () => {
    modal.classList.toggle('open');
});

submit.addEventListener("click", () => {
    modal.classList.toggle('open');
});
