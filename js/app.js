// Scroll To Top Button

const scrollBtn = document.getElementById("scrollTop");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }

}

scrollBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



// Newsletter

const form=document.querySelector(".newsletter-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for subscribing to EduNest!");

form.reset();

});

}