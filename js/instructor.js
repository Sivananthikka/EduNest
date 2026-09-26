/*=========================================
        EDUNEST INSTRUCTOR DASHBOARD
=========================================*/

//===============================
// DEFAULT DATA
//===============================

let courses = JSON.parse(localStorage.getItem("instructorCourses")) || [

{
    id:1,
    title:"Python Programming",
    students:120,
    rating:4.9,
    status:"Active"
},

{
    id:2,
    title:"Web Development",
    students:85,
    rating:4.8,
    status:"Active"
},

{
    id:3,
    title:"Machine Learning",
    students:45,
    rating:4.7,
    status:"Updating"
},

{
    id:4,
    title:"UI / UX Design",
    students:35,
    rating:4.6,
    status:"Active"
}

];



//===============================
// SAVE DATA
//===============================

function saveCourses(){

    localStorage.setItem(
        "instructorCourses",
        JSON.stringify(courses)
    );

}



//===============================
// DASHBOARD STATS
//===============================

function updateDashboard(){

    const courseCount =
        document.getElementById("courseCount");

    const studentCount =
        document.getElementById("studentCount");

    if(courseCount){

        courseCount.textContent =
        courses.length;

    }

    if(studentCount){

        let total = 0;

        courses.forEach(course=>{

            total += course.students;

        });

        studentCount.textContent = total;

    }

}



//===============================
// ADD COURSE
//===============================

function addCourse(title){

    const newCourse={

        id:Date.now(),

        title:title,

        students:0,

        rating:5.0,

        status:"Active"

    };

    courses.push(newCourse);

    saveCourses();

    alert("Course Added Successfully!");

}



//===============================
// DELETE COURSE
//===============================

function deleteCourse(id){

    if(confirm("Delete this course?")){

        courses = courses.filter(

            course=>course.id!==id

        );

        saveCourses();

        location.reload();

    }

}



//===============================
// SEARCH COURSE
//===============================

function searchCourse(){

    const input =
    document.getElementById("searchCourse");

    if(!input) return;

    const value =
    input.value.toLowerCase();

    const rows =
    document.querySelectorAll("tbody tr");

    rows.forEach(row=>{

        if(row.innerText.toLowerCase().includes(value)){

            row.style.display="";

        }

        else{

            row.style.display="none";

        }

    });

}



//===============================
// DARK MODE
//===============================

function toggleDarkMode(){

    document.body.classList.toggle("dark");

    localStorage.setItem(

        "instructorTheme",

        document.body.classList.contains("dark")

    );

}

if(localStorage.getItem("instructorTheme")==="true"){

    document.body.classList.add("dark");

}



//===============================
// PAGE LOAD
//===============================

window.onload=()=>{

    updateDashboard();

    console.log("Instructor Dashboard Loaded");

};