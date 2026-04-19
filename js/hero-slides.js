/* hero-slides.js — Crossfade hero slideshow */
(function () {
  var slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;

  var current = 0;
  slides[current].classList.add('is-active');

  setInterval(function () {
    slides[current].classList.remove('is-active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('is-active');
  }, 5000);
})();
