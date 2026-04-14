/* ============================================
   BayaNest Realty — Main JS
   ============================================ */

(function() {
  'use strict';

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('mainNav').offsetHeight;
        const targetPosition = target.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ── Projects Preview tabs (on main page) ──
  const previewTabs = document.querySelectorAll('.projects-preview__tab');
  const previewCards = document.querySelectorAll('.projects-preview__grid .project-card');

  previewTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      previewTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      previewCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-type') === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ── Year in footer ──
  const yearEl = document.querySelector('.footer__text');
  if (yearEl) {
    yearEl.textContent = yearEl.textContent.replace('2025', new Date().getFullYear());
  }

})();
