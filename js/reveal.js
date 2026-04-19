/* reveal.js — Homepage-only scroll-triggered reveal motion.
   - IntersectionObserver adds .is-in to [data-reveal] elements on entry
   - Testimonial quotes are split into word spans so they can "bloom" in */
(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Split testimonial quotes into per-word spans ---- */
  var quotes = document.querySelectorAll('.testimonial-quote');
  quotes.forEach(function (q) {
    var text = q.textContent.trim();
    var words = text.split(/\s+/);
    q.textContent = '';
    words.forEach(function (w, i) {
      var span = document.createElement('span');
      span.className = 'quote-word';
      span.style.setProperty('--i', i);
      span.textContent = w;
      q.appendChild(span);
      if (i < words.length - 1) q.appendChild(document.createTextNode(' '));
    });
    q.setAttribute('data-split', 'true');
  });

  if (prefersReduced) {
    /* Skip motion entirely — mark everything as revealed so nothing stays hidden */
    document.querySelectorAll('[data-reveal], [data-split="true"]').forEach(function (el) {
      el.classList.add('is-in');
    });
    return;
  }

  /* ---- IntersectionObserver: add .is-in once, then unobserve ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -8% 0px'
  });

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    io.observe(el);
  });
})();
