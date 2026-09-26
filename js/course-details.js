/*=========================================
        EDUNEST COURSE DETAILS JS
=========================================*/

// =======================
// ENROLL BUTTON
// =======================

const enrollBtn = document.querySelector(".enroll-btn");

if (enrollBtn) {

    enrollBtn.addEventListener("click", function (e) {

        e.preventDefault();

        alert("🎉 Congratulations!\n\nYou have successfully enrolled in this course.");

        localStorage.setItem("enrolledCourse", "Complete Python Programming Masterclass");

    });

}



// =======================
// WISHLIST
// =======================

const wishlistBtn = document.querySelector(".wishlist-btn");

if (wishlistBtn) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const courseName = document.querySelector(".course-left h1").innerText;

    if (wishlist.includes(courseName)) {

        wishlistBtn.innerHTML = '<i class="fas fa-heart"></i> Added to Wishlist';

        wishlistBtn.style.background = "#ef4444";
        wishlistBtn.style.color = "#fff";

    }

    wishlistBtn.addEventListener("click", function () {

        if (!wishlist.includes(courseName)) {

            wishlist.push(courseName);

            this.innerHTML = '<i class="fas fa-heart"></i> Added to Wishlist';

            this.style.background = "#ef4444";
            this.style.color = "#fff";

            alert("❤️ Added to Wishlist");

        }

        else {

            wishlist = wishlist.filter(item => item !== courseName);

            this.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';

            this.style.background = "";
            this.style.color = "";

            alert("💔 Removed from Wishlist");

        }

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

    });

}



// =======================
// FAQ ACCORDION
// =======================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    answer.style.display = "none";

    item.style.cursor = "pointer";

    item.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.querySelector("p").style.display = "none";

            }

        });

        answer.style.display =
            answer.style.display === "block"
            ? "none"
            : "block";

    });

});



// =======================
// RELATED COURSES
// =======================

const relatedButtons = document.querySelectorAll(".related-card a");

relatedButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert("Opening selected course...");

    });

});



// =======================
// SMOOTH SCROLL
// =======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



// =======================
// SCROLL ANIMATION
// =======================

const animatedItems = document.querySelectorAll(

    ".chapter, .review-card, .feature-card, .faq-item, .related-card"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

animatedItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(30px)";

    item.style.transition = "0.6s ease";

    observer.observe(item);

});



// =======================
// COURSE TIMER
// =======================

console.log("Course Loaded Successfully.");



// =======================
// SHARE COURSE
// =======================

function shareCourse() {

    if (navigator.share) {

        navigator.share({

            title: "EduNest Course",

            text: "Check out this amazing Python Course on EduNest!",

            url: window.location.href

        });

    }

    else {

        alert("Sharing is not supported in this browser.");

    }

}



// =======================
// KEYBOARD SHORTCUT
// Press W to Wishlist
// =======================

document.addEventListener("keydown", function (e) {

    if (e.key === "w" || e.key === "W") {

        if (wishlistBtn) {

            wishlistBtn.click();

        }

    }

});



// =======================
// DARK MODE (Optional)
// =======================

const darkMode = localStorage.getItem("darkMode");

if (darkMode === "enabled") {

    document.body.classList.add("dark");

}



// =======================
// PAGE LOADED
// =======================

window.addEventListener("load", () => {

    console.log("EduNest Course Details Loaded.");

});