/*=========================================
            HERO SLIDER
=========================================*/

const slides =
    document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    if(slides.length===0) return;

    slides.forEach(slide=>{

        slide.style.display="none";

    });

    slides[index].style.display="block";

}

function nextSlide(){

    if(slides.length===0) return;

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

}

showSlide(currentSlide);

setInterval(nextSlide,5000);

console.log("Slider Ready");