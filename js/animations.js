/* ============================================
   BayaNest Realty — Scroll Animations
   ============================================ */

(function() {
  'use strict';

  // ── Intersection Observer for reveals ──
  const revealElements = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optionally unobserve after reveal for performance
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });

    // Divider animations
    const dividers = document.querySelectorAll('.divider');
    const dividerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          dividerObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    dividers.forEach(d => dividerObserver.observe(d));

  } else {
    // Fallback: just show everything
    revealElements.forEach(el => el.classList.add('revealed'));
    document.querySelectorAll('.divider').forEach(d => d.classList.add('revealed'));
  }
})();
