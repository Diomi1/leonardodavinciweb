// ZONA DE VARIABLES

import { animaciones } from "./animaciones.js";

const cookieBanner = document.getElementById("cookie-banner");
const acceptButton = document.getElementById("accept-cookies");
const backgroundMusic = document.getElementById("background-music");
const boton2 = document.getElementById("boton_2");

boton2.style.display = "none";

acceptButton.addEventListener("click", () => {
  cookieBanner.style.display = "none"; 
  backgroundMusic.play(); 
    animaciones()
  boton2.style.display = "flex";
});


const musicaBoton = document.getElementById("musica_boton");
let isPlaying = true; 


boton2.addEventListener("click", () => {
  if (isPlaying) {

    backgroundMusic.pause();
    isPlaying = false;
    musicaBoton.classList.remove("fa-volume-high");
    musicaBoton.classList.add("fa-volume-off");
  } else {

    backgroundMusic.play();
    isPlaying = true;
    musicaBoton.classList.remove("fa-volume-off");
    musicaBoton.classList.add("fa-volume-high");
  }
});
