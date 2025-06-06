 const frases = [
      "Desarrollador Web",
      "Apasionado por el código",
      "Creativo y autodidacta"
    ];

    let i = 0, j = 0;
    let escribiendo = true;
    const texto = document.getElementById("typed-text");

    function animarTexto() {
      let actual = frases[i];

      if (escribiendo) {
        texto.textContent = actual.substring(0, j++);
        if (j > actual.length) {
          escribiendo = false;
          setTimeout(animarTexto, 1500);
          return;
        }
      } else {
        texto.textContent = actual.substring(0, j--);
        if (j === 0) {
          escribiendo = true;
          i = (i + 1) % frases.length;
        }
      }

      setTimeout(animarTexto, escribiendo ? 100 : 50);
    }

    animarTexto();