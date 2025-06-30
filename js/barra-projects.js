  const filters = document.querySelectorAll('.filter-item');
  const cards = document.querySelectorAll('.project-card');

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      // Activar solo el filtro seleccionado
      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');

      const tech = filter.dataset.filter;

      cards.forEach(card => {
        if (tech === 'all' || card.dataset.tech === tech) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
