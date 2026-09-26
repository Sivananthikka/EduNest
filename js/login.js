/*=========================================
        EDUNEST LOGIN JAVASCRIPT
=========================================*/

// =======================
// SELECT FORM ELEMENTS
// =======================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // Get Input Values
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Get Registered Users
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Find Matching User
        const user = users.find(
            u => u.email === email && u.password === password
        );

        if (user) {

            // Save Logged-in User
            localStorage.setItem("currentUser", JSON.stringify(user));

            // Remember Me
            const rememberMe = document.querySelector(".login-options input");

            if (rememberMe.checked) {

                localStorage.setItem("rememberUser", "true");

            } else {

                localStorage.removeItem("rememberUser");

            }

            alert("🎉 Login Successful!\n\nWelcome " + user.name);

            // Redirect to Home Page
            window.location.href = "index.html";

        } else {

            alert("❌ Invalid Email or Password!");

        }

    });

}



// =======================
// AUTO LOGIN
// =======================

window.addEventListener("load", () => {

    const remember = localStorage.getItem("rememberUser");

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (remember && currentUser) {

        console.log("Welcome Back " + currentUser.name);

    }

});



// =======================
// SHOW LOGGED USER
// =======================

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {

    console.log("Logged in as:", currentUser.name);

}



// =======================
// LOGOUT FUNCTION
// =======================

function logout() {

    localStorage.removeItem("currentUser");

    alert("Logged Out Successfully!");

    window.location.href = "login.html";

}



// =======================
// PASSWORD VISIBILITY
// =======================

const passwordInput = document.getElementById("password");

if (passwordInput) {

    const eye = document.createElement("span");

    eye.innerHTML = "👁";

    eye.style.cursor = "pointer";
    eye.style.marginLeft = "10px";
    eye.style.fontSize = "18px";

    passwordInput.parentNode.appendChild(eye);

    eye.addEventListener("click", () => {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            eye.innerHTML = "🙈";

        }

        else {

            passwordInput.type = "password";

            eye.innerHTML = "👁";

        }

    });

}



// =======================
// EMAIL VALIDATION
// =======================

const emailInput = document.getElementById("email");

if (emailInput) {

    emailInput.addEventListener("blur", () => {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput.value)) {

            emailInput.style.border = "2px solid red";

        }

        else {

            emailInput.style.border = "2px solid green";

        }

    });

}



// =======================
// PASSWORD VALIDATION
// =======================

if (passwordInput) {

    passwordInput.addEventListener("input", () => {

        if (passwordInput.value.length < 6) {

            passwordInput.style.border = "2px solid red";

        }

        else {

            passwordInput.style.border = "2px solid green";

        }

    });

}



// =======================
// SOCIAL LOGIN
// =======================

const socialButtons = document.querySelectorAll(".social-login button");

socialButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("This feature will be available after backend integration.");

    });

});



// =======================
// KEYBOARD SHORTCUT
// ENTER KEY
// =======================

document.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        if (loginForm) {

            loginForm.requestSubmit();

        }

    }

});



// =======================
// PAGE LOAD
// =======================

window.addEventListener("load", () => {

    console.log("EduNest Login Page Loaded Successfully.");

});