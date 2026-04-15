/* ============================================
   BayaNest Realty — Navigation
   ============================================ */

(function() {
  'use strict';

  const nav = document.getElementById('mainNav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinkElements = document.querySelectorAll('.nav__link[data-section]');

  // ── Scroll state ──
  let lastScrollY = 0;
  let ticking = false;

  function handleScroll() {
    const scrollY = window.scrollY;

    // Add scrolled class
    if (scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Update active nav link based on section
    if (navLinkElements.length > 0) {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinkElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
          link.classList.add('active');
        }
      });

      // Default to home if at top
      if (scrollY < 200) {
        navLinkElements.forEach(link => link.classList.remove('active'));
        const homeLink = document.querySelector('.nav__link[data-section="home"]');
        if (homeLink) homeLink.classList.add('active');
      }
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });

  // ── Mobile toggle ──
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Initial check
  handleScroll();
})();
