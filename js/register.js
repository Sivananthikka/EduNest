/*=========================================
        EDUNEST REGISTER JAVASCRIPT
=========================================*/

// =======================
// SELECT FORM
// =======================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // =======================
        // GET INPUT VALUES
        // =======================

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim().toLowerCase();

        const password = document.getElementById("password").value;

        const confirmPassword = document.getElementById("confirmPassword").value;

        const terms = document.getElementById("terms");

        // =======================
        // VALIDATION
        // =======================

        if (name.length < 3) {

            alert("Name must contain at least 3 characters.");

            return;

        }

        if (password.length < 6) {

            alert("Password must contain at least 6 characters.");

            return;

        }

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;

        }

        if (!terms.checked) {

            alert("Please accept the Terms & Conditions.");

            return;

        }

        // =======================
        // GET USERS
        // =======================

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // =======================
        // CHECK EMAIL EXISTS
        // =======================

        const existingUser = users.find(user => user.email === email);

        if (existingUser) {

            alert("This email is already registered.");

            return;

        }

        // =======================
        // CREATE USER
        // =======================

        const newUser = {

            id: Date.now(),

            name: name,

            email: email,

            password: password,

            wishlist: [],

            enrolledCourses: [],

            certificates: []

        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("🎉 Registration Successful!\n\nPlease login to continue.");

        registerForm.reset();

        setTimeout(() => {

            window.location.href = "login.html";

        }, 1000);

    });

}



// =======================
// PASSWORD VISIBILITY
// =======================

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

function addEye(input){

    if(!input) return;

    const eye = document.createElement("span");

    eye.innerHTML = "👁";

    eye.style.cursor = "pointer";
    eye.style.marginLeft = "10px";
    eye.style.fontSize = "18px";

    input.parentNode.appendChild(eye);

    eye.addEventListener("click",()=>{

        if(input.type==="password"){

            input.type="text";
            eye.innerHTML="🙈";

        }

        else{

            input.type="password";
            eye.innerHTML="👁";

        }

    });

}

addEye(passwordInput);

addEye(confirmPasswordInput);



// =======================
// EMAIL VALIDATION
// =======================

const emailInput = document.getElementById("email");

if(emailInput){

emailInput.addEventListener("blur",()=>{

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(emailPattern.test(emailInput.value)){

emailInput.style.border="2px solid green";

}

else{

emailInput.style.border="2px solid red";

}

});

}



// =======================
// PASSWORD STRENGTH
// =======================

if(passwordInput){

passwordInput.addEventListener("input",()=>{

if(passwordInput.value.length>=6){

passwordInput.style.border="2px solid green";

}

else{

passwordInput.style.border="2px solid red";

}

});

}



// =======================
// CONFIRM PASSWORD
// =======================

if(confirmPasswordInput){

confirmPasswordInput.addEventListener("input",()=>{

if(confirmPasswordInput.value===passwordInput.value){

confirmPasswordInput.style.border="2px solid green";

}

else{

confirmPasswordInput.style.border="2px solid red";

}

});

}



// =======================
// PAGE LOADED
// =======================

window.addEventListener("load",()=>{

console.log("EduNest Register Page Loaded Successfully.");

});