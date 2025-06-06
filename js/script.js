  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggleBtn');
  const presentationBox = document.querySelector('.presentation-box');

  function updatePresentationBox() {
    if (!presentationBox || !sidebar) return;

    if (sidebar.classList.contains('collapsed')) {
      presentationBox.classList.add('sidebar-collapsed');
    } else {
      presentationBox.classList.remove('sidebar-collapsed');
    }
  }

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      // Alterna clases según diseño responsive
      sidebar.classList.toggle('collapsed');
      sidebar.classList.toggle('menu-open'); // útil si usas esta clase para modo móvil

      updatePresentationBox(); // aplica efecto al contenido
    });
  }

  // Asegura consistencia cuando se carga la página
  window.addEventListener('load', updatePresentationBox);


//sobre mi
const aboutSection = document.querySelector('.about');

if (aboutSection) {
  window.addEventListener('load', () => {
    if (sidebar.classList.contains('collapsed')) {
      aboutSection.classList.add('sidebar-collapsed');
    } else {
      aboutSection.classList.remove('sidebar-collapsed');
    }
  });

  toggleBtn.addEventListener('click', () => {
    aboutSection.classList.toggle('sidebar-collapsed');
  });
}

//skills
const skillsSection = document.querySelector('.skills');

if (skillsSection) {
  toggleBtn.addEventListener('click', () => {
    skillsSection.classList.toggle('sidebar-collapsed');
  });

  window.addEventListener('load', () => {
    if (sidebar.classList.contains('collapsed')) {
      skillsSection.classList.add('sidebar-collapsed');
    } else {
      skillsSection.classList.remove('sidebar-collapsed');
    }
  });
}

//projects
const projectsSection = document.querySelector('.projects');
if (projectsSection) {
  toggleBtn.addEventListener('click', () => {
    projectsSection.classList.toggle('sidebar-collapsed');
  });

  window.addEventListener('load', () => {
    if (sidebar.classList.contains('collapsed')) {
      projectsSection.classList.add('sidebar-collapsed');
    } else {
      projectsSection.classList.remove('sidebar-collapsed');
    }
  });
}

// contacto
const contactSection = document.querySelector('.contact-section');
if (contactSection) {
  toggleBtn.addEventListener('click', () => {
    contactSection.classList.toggle('sidebar-collapsed');
  });

  window.addEventListener('load', () => {
    if (sidebar.classList.contains('collapsed')) {
      contactSection.classList.add('sidebar-collapsed');
    } else {
      contactSection.classList.remove('sidebar-collapsed');
    }
  });
}

