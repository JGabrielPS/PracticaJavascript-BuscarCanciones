import * as UI from "./interfaz.js";

class API {
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
  }

  consultarAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        if (result.lyrics) {
          const { lyrics } = result;

          UI.divResultado.textContent = lyrics;
          UI.headingResultado.textContent = `Letra de la cancion ${this.cancion} de ${this.artista}`;
        } else {
          UI.divMensajes.textContent =
            "La cancion solicitada no fue encontrada, prueba con otra busqueda";
          UI.divMensajes.classList.add("error");

          setTimeout(() => {
            UI.divMensajes.textContent = "";
            UI.divMensajes.classList.remove("error");
          }, 3000);
        }
      });
  }
}

export default API;
