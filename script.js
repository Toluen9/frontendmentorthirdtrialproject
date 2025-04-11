const navToggle = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

