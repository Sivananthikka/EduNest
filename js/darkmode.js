/*=========================================
        EDUNEST DARK MODE
=========================================*/

// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {

    // Find the dark mode button
    let darkBtn = document.getElementById("darkModeBtn");

    // Apply saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");

        if (darkBtn) {
            darkBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    // If no button exists on the page, stop here
    if (!darkBtn) return;

    // Toggle theme
    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            darkBtn.innerHTML = '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");

            darkBtn.innerHTML = '<i class="fas fa-moon"></i>';

        }

    });

});