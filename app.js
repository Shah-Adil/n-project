
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    menu.classList.toggle('menu-effect');
})

window.addEventListener('scroll', () => {
    nav.classList.remove('nav-open');
    menu.classList.remove('menu-effect');
});