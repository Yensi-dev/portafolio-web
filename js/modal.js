const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".close");
const modalTitle = document.getElementById("modalTitle");
const mainImage = document.getElementById("mainImage");
const thumbnailsContainer = document.querySelector(".thumbnails");
const modalParagraph1 = document.getElementById("modalParagraph1");
const modalParagraph2 = document.getElementById("modalParagraph2");
const githubLink = document.getElementById("githubLink");

let projects = [];

// Cargar JSON externo
fetch('data/projects.json')
  .then(response => response.json())
  .then(data => {
    projects = data.projects;

    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const projectId = card.getAttribute("data-id");
        const project = projects.find(p => p.id === projectId);

        if (!project) return;

        modalTitle.textContent = project.title;
        mainImage.src = project.images[0] || "";

        modalParagraph1.textContent = project.description[0] || "";
        modalParagraph2.textContent = project.description[1] || "";

        thumbnailsContainer.innerHTML = "";
        project.images.forEach(src => {
          const thumb = document.createElement("img");
          thumb.src = src;
          thumb.alt = "Miniatura";
          thumb.addEventListener("click", () => {
            mainImage.src = src;
          });
          thumbnailsContainer.appendChild(thumb);
        });

        // Mostrar o ocultar botón GitHub según exista link
        if (project.github) {
          githubLink.href = project.github;
          githubLink.style.display = "inline-block";
        } else {
          githubLink.style.display = "none";
        }

        modal.style.display = "block";
      });
    });
  })
  .catch(error => {
    console.error("Error al cargar el JSON de proyectos:", error);
  });

// Cerrar modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
