const titulo = document.querySelector('h1');

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i);
    });
}

typeWriter(titulo)

//

document.addEventListener("DOMContentLoaded", function(event) {

    // THIS FUNCTION GETS CALLED WHENEVER A SPAN ELEMENT (OR ELEMENTS) COME INTO OR GO OUT OF VIEW
          function callback (observations, observer) {
            observations.forEach(observation => {
              if (observation.isIntersecting) { //IF IT'S IN VIEW
                observation.target.classList.add('animated');
              }      
           });
        }
          
          // CREATE AN INTERSECTION OBSERVER
          let options = {
             root: null, //null means it will observe on the viewport
             rootMargin: '0px',
             threshold: 1.0 //1 means the whole element needs to be viewable before we animate it
        }
    
          let observer = new IntersectionObserver(callback, options);
          
          // NOW PUT THE OBSERVER ON EACH OF THE ELEMENTS WE WANT TO ANIMATE WHEN IT'S IN VIEW
          let spans = document.querySelectorAll('span');
          for (let i=0; i< spans.length; i++) {
            observer.observe(spans[i]); 
        }
});