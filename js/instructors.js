/*=========================================
        EDUNEST INSTRUCTORS
=========================================*/

//=========================================
// SEARCH INSTRUCTORS
//=========================================

function searchInstructor(){

    const input = document
        .getElementById("searchInstructor")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".instructor-card");

    cards.forEach(card=>{

        const text =
            card.innerText.toLowerCase();

        if(text.includes(input)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

}



//=========================================
// VIEW PROFILE
//=========================================

const profileButtons =
document.querySelectorAll(".profile-btn");

profileButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const card =
        button.closest(".instructor-card");

        const name =
        card.querySelector("h2").innerText;

        const role =
        card.querySelector(".role").innerText;

        const details =
        card.querySelectorAll("p");

        alert(

`👨‍🏫 Instructor Profile

Name:
${name}

Specialization:
${role}

${details[1].innerText}
${details[2].innerText}
${details[3].innerText}

Thank you for choosing EduNest!`

        );

    });

});



//=========================================
// CARD ANIMATION
//=========================================

window.addEventListener("load",()=>{

    const cards =
    document.querySelectorAll(".instructor-card");

    cards.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(30px)";

        setTimeout(()=>{

            card.style.transition=".6s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*150);

    });

});



//=========================================
// SOCIAL ICON CLICK
//=========================================

const socialLinks =
document.querySelectorAll(".social-icons a");

socialLinks.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        alert(
        "Demo Project\n\nSocial profile links are not connected yet."
        );

    });

});



//=========================================
// JOIN TEAM BUTTON
//=========================================

const joinButton =
document.querySelector(".join-btn");

if(joinButton){

joinButton.addEventListener("click",()=>{

console.log("Join Instructor Clicked");

});

}



//=========================================
// SCROLL TO TOP BUTTON
//=========================================

const scrollBtn=document.createElement("button");

scrollBtn.innerHTML="<i class='fas fa-arrow-up'></i>";

scrollBtn.id="scrollTop";

document.body.appendChild(scrollBtn);

scrollBtn.style.position="fixed";
scrollBtn.style.bottom="25px";
scrollBtn.style.right="25px";
scrollBtn.style.width="50px";
scrollBtn.style.height="50px";
scrollBtn.style.border="none";
scrollBtn.style.borderRadius="50%";
scrollBtn.style.background="#4338ca";
scrollBtn.style.color="#fff";
scrollBtn.style.cursor="pointer";
scrollBtn.style.display="none";
scrollBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";
scrollBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



//=========================================
// PAGE LOADED
//=========================================

console.log("EduNest Instructors Page Loaded Successfully.");