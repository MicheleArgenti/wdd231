const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const business = document.getElementById('business');
const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');

gridButton.addEventListener('click', () => {
    business.style.gridTemplateColumns = "1fr 1fr 1fr";
});
listButton.addEventListener('click', () => {
    business.style.gridTemplateColumns = "1fr";
});
