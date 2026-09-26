/*=========================================
        EDUNEST WISHLIST JAVASCRIPT
=========================================*/

// =======================
// GET CURRENT USER
// =======================

let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {

    alert("Please login first!");

    window.location.href = "login.html";

}



// =======================
// GET HTML ELEMENTS
// =======================

const wishlistContainer = document.getElementById("wishlistContainer");

const emptyWishlist = document.getElementById("emptyWishlist");



// =======================
// LOAD WISHLIST
// =======================

function loadWishlist() {

    wishlistContainer.innerHTML = "";

    const wishlist = currentUser.wishlist || [];

    if (wishlist.length === 0) {

        wishlistContainer.style.display = "none";

        emptyWishlist.style.display = "block";

        return;

    }

    wishlistContainer.style.display = "grid";

    emptyWishlist.style.display = "none";



    wishlist.forEach((course, index) => {

        wishlistContainer.innerHTML += `

        <div class="wishlist-card">

            <img src="${course.image}" alt="${course.title}">

            <div class="wishlist-content">

                <h3>${course.title}</h3>

                <p>${course.description}</p>

                <div class="price">₹${course.price}</div>

                <div class="card-buttons">

                    <button class="learn-btn"
                        onclick="enrollCourse(${index})">

                        Enroll Now

                    </button>

                    <button class="remove-btn"
                        onclick="removeWishlist(${index})">

                        Remove

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

loadWishlist();



// =======================
// REMOVE COURSE
// =======================

function removeWishlist(index){

    currentUser.wishlist.splice(index,1);

    updateUser();

    loadWishlist();

}



// =======================
// ENROLL COURSE
// =======================

function enrollCourse(index){

    const course = currentUser.wishlist[index];

    currentUser.enrolledCourses =
        currentUser.enrolledCourses || [];

    const alreadyExists =
        currentUser.enrolledCourses.some(c=>c.title===course.title);

    if(alreadyExists){

        alert("You have already enrolled in this course.");

        return;

    }

    currentUser.enrolledCourses.push(course);

    currentUser.wishlist.splice(index,1);

    updateUser();

    loadWishlist();

    alert("🎉 Course Enrolled Successfully!");

}



// =======================
// UPDATE LOCAL STORAGE
// =======================

function updateUser(){

    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );

    let users =
        JSON.parse(localStorage.getItem("users")) || [];

    const userIndex =
        users.findIndex(user=>user.email===currentUser.email);

    if(userIndex!==-1){

        users[userIndex]=currentUser;

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

    }

}



// =======================
// SCROLL TO TOP
// =======================

const scrollBtn =
    document.getElementById("scrollTop");

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



// =======================
// CARD HOVER EFFECT
// =======================

document.addEventListener("mouseover",(e)=>{

    if(e.target.closest(".wishlist-card")){

        e.target.closest(".wishlist-card").style.transform="translateY(-8px)";

    }

});

document.addEventListener("mouseout",(e)=>{

    if(e.target.closest(".wishlist-card")){

        e.target.closest(".wishlist-card").style.transform="translateY(0)";

    }

});



// =======================
// PAGE LOAD
// =======================

window.addEventListener("load",()=>{

    console.log("EduNest Wishlist Loaded Successfully.");

});
