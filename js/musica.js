const boton2 = document.getElementById("boton_2");
const musicaBoton = document.getElementById("musica_boton");
const backgroundMusic = document.getElementById("background-music");
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
