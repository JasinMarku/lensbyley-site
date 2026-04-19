/* gallery.js — Lightbox for Selected Work grid */
(function () {
  var lightbox  = document.getElementById('lightbox');
  if (!lightbox) return;

  var img       = lightbox.querySelector('.lightbox-img');
  var closeBtn  = lightbox.querySelector('.lightbox-close');
  var backdrop  = lightbox.querySelector('.lightbox-backdrop');

  function open(src) {
    img.src = src;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    img.src = '';
  }

  document.querySelectorAll('.gallery-item').forEach(function (btn) {
    btn.addEventListener('click', function () {
      open(this.dataset.src);
    });
  });

  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
})();
