/*=========================================
        EDUNEST LEARNING JAVASCRIPT
=========================================*/

// =======================
// CURRENT USER
// =======================

let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {

    alert("Please login first!");

    window.location.href = "login.html";

}



// =======================
// HTML ELEMENTS
// =======================

const learningContainer = document.getElementById("learningContainer");
const emptyLearning = document.getElementById("emptyLearning");

const totalCourses = document.getElementById("totalCourses");
const completedCourses = document.getElementById("completedCourses");
const earnedCertificates = document.getElementById("earnedCertificates");



// =======================
// LOAD COURSES
// =======================

function loadLearningCourses(){

    learningContainer.innerHTML = "";

    const courses = currentUser.enrolledCourses || [];

    if(courses.length===0){

        learningContainer.style.display="none";

        emptyLearning.style.display="block";

        updateStatistics();

        return;

    }

    learningContainer.style.display="grid";

    emptyLearning.style.display="none";

    courses.forEach((course,index)=>{

        const progress = course.progress || 0;

        const completed = course.completed || false;

        learningContainer.innerHTML += `

        <div class="learning-card">

            <img src="${course.image}" alt="${course.title}">

            <div class="learning-content">

                <h3>${course.title}</h3>

                <p>${course.description}</p>

                <div class="progress-bar">

                    <div class="progress-fill"
                    style="width:${progress}%">

                    </div>

                </div>

                <div class="progress-text">

                    Progress : ${progress}%

                </div>

                <div class="learning-buttons">

                    <button class="continue-btn"

                    onclick="continueLearning(${index})">

                    Continue

                    </button>

                    <button class="complete-btn"

                    onclick="completeCourse(${index})"

                    ${completed ? "disabled" : ""}>

                    ${completed ? "Completed" : "Complete"}

                    </button>

                </div>

            </div>

        </div>

        `;

    });

    updateStatistics();

}



// =======================
// CONTINUE LEARNING
// =======================

function continueLearning(index){

    let course = currentUser.enrolledCourses[index];

    if(!course.progress){

        course.progress = 0;

    }

    if(course.progress < 100){

        course.progress += 10;

    }

    if(course.progress > 100){

        course.progress = 100;

    }

    updateStorage();

    loadLearningCourses();

}



// =======================
// COMPLETE COURSE
// =======================

function completeCourse(index){

    let course = currentUser.enrolledCourses[index];

    course.progress = 100;

    course.completed = true;

    currentUser.certificates =
        currentUser.certificates || [];

    const exists = currentUser.certificates.some(

        c=>c.title===course.title

    );

    if(!exists){

        currentUser.certificates.push({

            title:course.title,

            date:new Date().toLocaleDateString()

        });

    }

    alert("🎉 Congratulations!\nCertificate Earned.");

    updateStorage();

    loadLearningCourses();

}



// =======================
// UPDATE STORAGE
// =======================

function updateStorage(){

    localStorage.setItem(

        "currentUser",

        JSON.stringify(currentUser)

    );

    let users =
        JSON.parse(localStorage.getItem("users")) || [];

    const index =
        users.findIndex(

            u=>u.email===currentUser.email

        );

    if(index!==-1){

        users[index]=currentUser;

        localStorage.setItem(

            "users",

            JSON.stringify(users)

        );

    }

}



// =======================
// UPDATE STATS
// =======================

function updateStatistics(){

    const courses =
        currentUser.enrolledCourses || [];

    const completed =
        courses.filter(c=>c.completed).length;

    const certificates =
        currentUser.certificates || [];

    totalCourses.textContent =
        courses.length;

    completedCourses.textContent =
        completed;

    earnedCertificates.textContent =
        certificates.length;

}



// =======================
// SCROLL BUTTON
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
// PAGE LOAD
// =======================

window.addEventListener("load",()=>{

    console.log("EduNest Learning Loaded.");

    loadLearningCourses();

});