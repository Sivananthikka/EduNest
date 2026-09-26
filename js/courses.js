/* =========================================
        EDUNEST COURSES JAVASCRIPT
========================================= */

// =======================
// SEARCH COURSES
// =======================

const searchInput = document.getElementById("searchInput");
const courseCards = document.querySelectorAll(".course-card");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let value = searchInput.value.toLowerCase();

        courseCards.forEach(card => {

            let title = card.querySelector("h3").textContent.toLowerCase();
            let tag = card.querySelector(".course-tag").textContent.toLowerCase();

            if (title.includes(value) || tag.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}



// =======================
// CATEGORY FILTER
// =======================

const filterButtons = document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        const category = this.textContent.toLowerCase();

        courseCards.forEach(card => {

            const tag = card.querySelector(".course-tag").textContent.toLowerCase();

            if (category === "all" || tag.includes(category)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});



// =======================
// WISHLIST
// =======================

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

wishlistButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const card = this.closest(".course-card");

        const title = card.querySelector("h3").innerText;

        if (!wishlist.includes(title)) {

            wishlist.push(title);

            this.innerHTML = '<i class="fas fa-heart"></i>';

            this.style.background = "#ef4444";
            this.style.color = "#fff";

            alert(title + " added to Wishlist ❤️");

        } else {

            wishlist = wishlist.filter(course => course !== title);

            this.innerHTML = '<i class="far fa-heart"></i>';

            this.style.background = "";
            this.style.color = "";

            alert(title + " removed from Wishlist");

        }

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

    });

});



// =======================
// LOAD SAVED WISHLIST
// =======================

courseCards.forEach(card => {

    const title = card.querySelector("h3").innerText;

    const btn = card.querySelector(".wishlist-btn");

    if (wishlist.includes(title)) {

        btn.innerHTML = '<i class="fas fa-heart"></i>';

        btn.style.background = "#ef4444";
        btn.style.color = "#fff";

    }

});



// =======================
// COURSE CARD ANIMATION
// =======================

window.addEventListener("load", () => {

    courseCards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "0.5s ease";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 100);

    });

});