/*=========================================
            GLOBAL SEARCH
=========================================*/

function searchCards(inputId, cardSelector){

    const keyword = document
        .getElementById(inputId)
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(cardSelector);

    cards.forEach(card=>{

        if(card.innerText.toLowerCase().includes(keyword)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

}

// Search Courses
function searchCourses(){

    searchCards("searchCourse",".course-card");

}

// Search Instructors
function searchInstructors(){

    searchCards("searchInstructor",".instructor-card");

}

// Search Wishlist
function searchWishlist(){

    searchCards("searchWishlist",".wishlist-card");

}

console.log("Search Ready");