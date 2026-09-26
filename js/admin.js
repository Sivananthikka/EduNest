/*=========================================
            EDUNEST ADMIN
=========================================*/



//=========================================
// LOAD DASHBOARD DATA
//=========================================

function loadDashboard(){

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const courses =
        JSON.parse(localStorage.getItem("instructorCourses")) || [];



    const totalUsers = users.length;

    const totalStudents = users.filter(user => user.role === "student").length;

    const totalInstructors = users.filter(user => user.role === "instructor").length;

    const totalCourses = courses.length;



    const totalEnrollments = users.reduce((total, user) => {

        return total + (user.enrolledCourses ? user.enrolledCourses.length : 0);

    }, 0);



    const totalCertificates = users.reduce((total, user) => {

        return total + (user.certificates ? user.certificates.length : 0);

    }, 0);



    // Dashboard Cards

    if(document.getElementById("userCount"))

        document.getElementById("userCount").textContent = totalUsers;

    if(document.getElementById("studentCount"))

        document.getElementById("studentCount").textContent = totalStudents;

    if(document.getElementById("instructorCount"))

        document.getElementById("instructorCount").textContent = totalInstructors;

    if(document.getElementById("courseCount"))

        document.getElementById("courseCount").textContent = totalCourses;



    // Statistics

    if(document.getElementById("totalCourses"))

        document.getElementById("totalCourses").textContent = totalCourses;

    if(document.getElementById("totalEnrollments"))

        document.getElementById("totalEnrollments").textContent = totalEnrollments;

    if(document.getElementById("certificateCount"))

        document.getElementById("certificateCount").textContent = totalCertificates;



    loadRecentUsers(users);

}



//=========================================
// RECENT USERS
//=========================================

function loadRecentUsers(users){

    const table = document.getElementById("recentUsers");

    if(!table) return;

    table.innerHTML = "";



    if(users.length === 0){

        table.innerHTML = `

        <tr>

            <td colspan="4" style="text-align:center">

                No Users Found

            </td>

        </tr>

        `;

        return;

    }



    users.slice(-5).reverse().forEach(user=>{

        table.innerHTML += `

        <tr>

            <td>${user.name || "-"}</td>

            <td>${user.email || "-"}</td>

            <td>${user.role || "Student"}</td>

            <td>

                <span class="status active">

                    Active

                </span>

            </td>

        </tr>

        `;

    });

}



//=========================================
// DARK MODE
//=========================================

function toggleDarkMode(){

    document.body.classList.toggle("dark");

    localStorage.setItem(

        "adminTheme",

        document.body.classList.contains("dark")

    );

}



if(localStorage.getItem("adminTheme")==="true"){

    document.body.classList.add("dark");

}



//=========================================
// REFRESH DASHBOARD
//=========================================

function refreshDashboard(){

    loadDashboard();

    alert("Dashboard Updated Successfully!");

}



//=========================================
// PAGE LOAD
//=========================================

window.onload = function(){

    loadDashboard();

    console.log("EduNest Admin Dashboard Loaded.");

};