const animatedTextElement = document.getElementById('animated-text');

// Frases para escribir y borrar completas sin cortar palabras
const phrases = [
  'Desarrollador Backend',
  'Apasionado por la tecnología',
  'Entusiasta del código limpio',
  'Siempre aprendiendo cosas nuevas',
  'Buscando retos y proyectos'
];

let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = '';
let isDeleting = false;
let delay = 200;
let pauseBetweenPhrases = 1500;

function type() {
  if (!isDeleting) {
    if (letterIndex < phrases[phraseIndex].length) {
      currentPhrase += phrases[phraseIndex][letterIndex];
      letterIndex++;
      animatedTextElement.textContent = currentPhrase;
      setTimeout(type, delay);
    } else {
      // Se terminó de escribir toda la frase, esperar un momento
      setTimeout(() => {
        isDeleting = true;
        setTimeout(type, delay);
      }, pauseBetweenPhrases);
    }
  } else {
    if (letterIndex > 0) {
      // Borrar una letra por vez
      currentPhrase = currentPhrase.slice(0, -1);
      letterIndex--;
      animatedTextElement.textContent = currentPhrase;
      setTimeout(type, delay / 2);
    } else {
      // Se terminó de borrar, pasar a la siguiente frase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, delay);
    }
  }
}

type();


// Seccion de proyectos (tarjetas)

    const cards = document.querySelectorAll('.project-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let current = 0;
let isAnimating = false;

function updateCarousel() {
  cards.forEach((card, i) => {
    card.className = 'project-card'; // reset clases

    if (i === current) {
      card.classList.add('active');
    } else if (i === current - 1 || (current === 0 && i === cards.length -1)) {
      card.classList.add('prev');
    } else if (i === current - 2 || (current <= 1 && i === cards.length - 2) || (current === 0 && i === cards.length -1)) {
      card.classList.add('prev2');
    } else if (i === current + 1 || (current === cards.length -1 && i === 0)) {
      card.classList.add('next');
    } else if (i === current + 2 || (current >= cards.length -2 && i === 1) || (current === cards.length -1 && i === 0)) {
      card.classList.add('next2');
    } else if (i < current) {
      card.classList.add('out-left');
    } else {
      card.classList.add('out-right');
    }
  });
}

// Inicializar
updateCarousel();

function changeSlide(direction) {
  if (isAnimating) return; // evitar spam clicks

  isAnimating = true;

  if (direction === 'prev') {
    current = (current - 1 + cards.length) % cards.length;
  } else {
    current = (current + 1) % cards.length;
  }
  updateCarousel();

  // Esperar la duración de la transición para permitir otro cambio
  setTimeout(() => {
    isAnimating = false;
  }, 700); // igual que la duración en CSS (700ms)
}

prevBtn.addEventListener('click', () => changeSlide('prev'));
nextBtn.addEventListener('click', () => changeSlide('next'));

