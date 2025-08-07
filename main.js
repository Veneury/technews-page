document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase', {
  origin: 'top',
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out'
});
ScrollReveal().reveal('.news-cards div', {
  interval: 200,
  distance: '50px',
  origin: 'bottom',
  duration: 800
});

ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});
