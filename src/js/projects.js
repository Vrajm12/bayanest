/* ============================================
   BayaNest Realty — Projects Page JS
   ============================================ */

(function() {
  'use strict';

  const filterButtons = document.querySelectorAll('.projects-filter-btn');
  const projectCards = document.querySelectorAll('.project-detail-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let visibleCount = 0;

      projectCards.forEach((card, index) => {
        const category = card.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;

        if (shouldShow) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, visibleCount * 80);

          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ── Update counts ──
  function updateCounts() {
    const allCount = document.querySelectorAll('.project-detail-card').length;
    const residentialCount = document.querySelectorAll('.project-detail-card[data-category="residential"]').length;
    const commercialCount = document.querySelectorAll('.project-detail-card[data-category="commercial"]').length;

    const countAll = document.getElementById('countAll');
    const countResidential = document.getElementById('countResidential');
    const countCommercial = document.getElementById('countCommercial');

    if (countAll) countAll.textContent = allCount;
    if (countResidential) countResidential.textContent = residentialCount;
    if (countCommercial) countCommercial.textContent = commercialCount;
  }

  updateCounts();
})();
