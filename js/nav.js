/* nav.js — Mobile toggle + transparent-on-hero scroll behavior */
(function () {
  var nav = document.querySelector('.site-nav');
  var toggle = document.querySelector('.nav-toggle');

  if (!nav) return;

  function openMenu() {
    nav.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Mobile toggle
  if (toggle) {
    toggle.addEventListener('click', function () {
      if (nav.classList.contains('nav-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on link click
    nav.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
        closeMenu();
      }
    });
  }

  // Transparent-on-hero: becomes solid after scrolling past 20px
  if (nav.dataset.transparent === 'true') {
    function handleScroll() {
      if (window.scrollY > 20) {
        nav.classList.add('is-scrolled');
      } else {
        nav.classList.remove('is-scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }
})();
