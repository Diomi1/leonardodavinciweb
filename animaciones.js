const texto = document.querySelector('.contenedor_info_header');

function animaciones(){

gsap.from(texto, {
    duration: 1.5,    
    opacity: 0,     
    x: -100,          
    ease: "power3.out" 
});

gsap.from('#imagen_leonardo', {
    duration: 1.5,
    opacity: 0,
    y: 100,       
    ease: "power3.out",
    delay: 0.5       
});

}

export {animaciones }