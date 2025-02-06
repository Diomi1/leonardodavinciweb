const texto = document.querySelector('.contenedor_info_header');
const titulos_secciones = document.querySelectorAll('.seccion_nueva')
function animaciones(){

gsap.registerPlugin(ScrollTrigger);

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

gsap.from('.imagen_sobre_mi_leonardo', {
    scrollTrigger: {
        trigger: '.imagen_sobre_mi_leonardo',
        start:"left 100%",
        end:"right 10%",
        toggleActions: "play none none reverse",
        markers:false
    },
    duration: 1,
    opacity: 0,
    y: 100,
});

gsap.utils.toArray('.parrafo_sobre_mi').forEach(parrafo => {
  gsap.to(parrafo, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: parrafo,  
      start: 'top 80%',  
      toggleActions: 'play none none reverse' 
    }
  });
});


gsap.from('.poema', {
    scrollTrigger: {
        trigger: '.poema',
        start:"left 100%",
        end:"right 10%",
        toggleActions: "play none none reverse",
        markers:false
    },
    duration: 1.5,
    opacity: 0,
    y: 100,
});


gsap.from('.contenedor_info_mia', {
    scrollTrigger: {
        trigger: '.contenedor_info_mia',
        start:"left 100%",
        end:"right 10%",
        toggleActions: "play none none reverse",
        markers:false
    },
    duration: 1.5,
    opacity: 0,
    y: 100,
});


gsap.from('.parrafo_ubicacion', {
    opacity: 0,
    y: 50,       
    ease: "power3.out", 
    delay: 0.5,  
    duration: 1.5
});

gsap.utils.toArray('.contenedor_obras').forEach(obra => {
  gsap.from(obra, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: obra,
      start: 'top 85%', 
      toggleActions: 'play none none reverse'
    }
  });
});


gsap.utils.toArray('.parrafo_ubicacion').forEach(parrafo_ubicacion => {
  gsap.to(parrafo_ubicacion, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: parrafo_ubicacion,  
      start: 'top 100%',  
      toggleActions: 'play none none reverse' 
    }
  });
});


}




export {animaciones }