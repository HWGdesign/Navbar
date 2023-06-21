const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');

const showMenu = () => {
  navbar.classList.toggle('active');
  hamburger.classList.toggle('active');
};

hamburger.addEventListener('click', showMenu);

navLink.forEach((n) => n.addEventListener('click', showMenu));
