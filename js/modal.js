let proyectos = {};

fetch('data/modal.json')
  .then(res => res.json())
  .then(data => {
    proyectos = data;
  })
  .catch(err => console.error("Error cargando proyectos:", err));

function showModal(id) {
  const proyecto = proyectos[id];
  if (!proyecto) return;

  document.getElementById('modal-title').textContent = proyecto.titulo;

  // Mostrar descripción larga (array) como párrafos dentro del modal
  const descriptionContainer = document.getElementById('modal-description');
  descriptionContainer.innerHTML = ""; // limpiar
  proyecto.descripcionLarga.forEach(parrafo => {
    const p = document.createElement('p');
    p.textContent = parrafo;
    descriptionContainer.appendChild(p);
  });

  // Imagen principal
  const mainImage = document.getElementById('modal-main-image');
  mainImage.src = proyecto.imagenPrincipal;
  mainImage.alt = proyecto.titulo + " - imagen principal";

  // Galería
  const galeria = document.getElementById('modal-gallery');
  galeria.innerHTML = "";
  proyecto.galeria.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = proyecto.titulo + " - imagen galería";
    img.style.cursor = "pointer";

    // Evento click para cambiar imagen principal
    img.addEventListener('click', () => {
      mainImage.src = src;
    });

    galeria.appendChild(img);
  });

  // Repositorio
  const repo = document.getElementById('modal-repo');
  repo.href = proyecto.repositorio;

  // Mostrar modal
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
