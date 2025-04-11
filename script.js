// const navToggle = document.querySelector('.nav-hamburger');
// const navLinks = document.querySelector('.nav-links');

// navToggle.addEventListener('click', () => {
//   navLinks.classList.toggle('show');
// });

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    console.log('Hamburger clicked!');
    navLinks.classList.toggle('show');
  });
}

