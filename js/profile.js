/*=========================================
        EDUNEST PROFILE JAVASCRIPT
=========================================*/

// =======================
// GET CURRENT USER
// =======================

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {

    alert("Please login first!");

    window.location.href = "login.html";

}



// =======================
// LOAD USER DETAILS
// =======================

document.addEventListener("DOMContentLoaded", () => {

    if (!currentUser) return;

    document.getElementById("userName").textContent = currentUser.name;

    document.getElementById("userEmail").textContent = currentUser.email;

    // =======================
    // COURSE COUNT
    // =======================

    const enrolledCourses = currentUser.enrolledCourses || [];

    document.getElementById("courseCount").textContent =
        enrolledCourses.length;

    // =======================
    // WISHLIST COUNT
    // =======================

    const wishlist = currentUser.wishlist || [];

    document.getElementById("wishlistCount").textContent =
        wishlist.length;

    // =======================
    // CERTIFICATE COUNT
    // =======================

    const certificates = currentUser.certificates || [];

    document.getElementById("certificateCount").textContent =
        certificates.length;

});



// =======================
// LOGOUT
// =======================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        const confirmLogout = confirm("Are you sure you want to logout?");

        if (confirmLogout) {

            localStorage.removeItem("currentUser");

            alert("Logged out successfully!");

            window.location.href = "login.html";

        }

    });

}



// =======================
// WELCOME MESSAGE
// =======================

window.addEventListener("load", () => {

    if (currentUser) {

        console.log("Welcome Back,", currentUser.name);

    }

});



// =======================
// PROFILE IMAGE CHANGE
// =======================

const profileImage = document.querySelector(".profile-image img");

if (profileImage) {

    profileImage.addEventListener("click", () => {

        alert("Profile picture upload will be available in the backend version.");

    });

}



// =======================
// ACHIEVEMENT ANIMATION
// =======================

const achievementCards =
    document.querySelectorAll(".achievement-card");

achievementCards.forEach((card, index) => {

    card.style.animationDelay = `${index * 0.2}s`;

});



// =======================
// RECENT COURSES EFFECT
// =======================

const recentCards =
    document.querySelectorAll(".recent-card");

recentCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});



// =======================
// PROGRESS BAR ANIMATION
// =======================

const progressBars =
    document.querySelectorAll(".progress");

window.addEventListener("load", () => {

    progressBars.forEach(bar => {

        const width = bar.textContent;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.width = width;

        }, 500);

    });

});



// =======================
// SCROLL TO TOP
// =======================

const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            scrollBtn.style.display = "block";

        }

        else {

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



// =======================
// LAST LOGIN
// =======================

const today = new Date().toLocaleString();

localStorage.setItem("lastLogin", today);

console.log("Last Login:", today);



// =======================
// PAGE LOADED
// =======================

window.addEventListener("load", () => {

    console.log("EduNest Profile Loaded Successfully.");

});