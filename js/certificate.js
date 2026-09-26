/*=========================================
        EDUNEST CERTIFICATE JAVASCRIPT
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

const certificateContainer =
document.getElementById("certificateContainer");

const emptyCertificate =
document.getElementById("emptyCertificate");

const certificateCount =
document.getElementById("certificateCount");

const completedCount =
document.getElementById("completedCount");



// =======================
// LOAD CERTIFICATES
// =======================

function loadCertificates(){

    certificateContainer.innerHTML="";

    const certificates =
    currentUser.certificates || [];

    if(certificates.length===0){

        certificateContainer.style.display="none";

        emptyCertificate.style.display="block";

        updateStats();

        return;

    }

    certificateContainer.style.display="grid";

    emptyCertificate.style.display="none";

    certificates.forEach((certificate,index)=>{

        certificateContainer.innerHTML +=`

        <div class="certificate-card">

            <div class="certificate-icon">

                <i class="fas fa-award"></i>

            </div>

            <h2>Certificate of Completion</h2>

            <p class="student-name">

                ${currentUser.name}

            </p>

            <p class="course-name">

                ${certificate.title}

            </p>

            <p class="issue-date">

                Issued on :
                ${certificate.date}

            </p>

            <div class="certificate-buttons">

                <button class="view-btn"

                onclick="viewCertificate(${index})">

                View

                </button>

                <button class="download-btn"

                onclick="downloadCertificate(${index})">

                Download

                </button>

                <button class="print-btn"

                onclick="printCertificate(${index})">

                Print

                </button>

            </div>

        </div>

        `;

    });

    updateStats();

}



// =======================
// UPDATE STATS
// =======================

function updateStats(){

    const certificates =
    currentUser.certificates || [];

    const completed =
    currentUser.enrolledCourses
    ? currentUser.enrolledCourses.filter(
        c=>c.completed
      ).length
    :0;

    certificateCount.textContent=
    certificates.length;

    completedCount.textContent=
    completed;

}



// =======================
// VIEW CERTIFICATE
// =======================

function viewCertificate(index){

    const certificate =
    currentUser.certificates[index];

    alert(

`🎓 EduNest Certificate

Student : ${currentUser.name}

Course : ${certificate.title}

Completion Date :
${certificate.date}

Congratulations on successfully
completing this course!`

    );

}



// =======================
// DOWNLOAD
// =======================

function downloadCertificate(index){

    const certificate =
    currentUser.certificates[index];

    alert(

`Downloading...

Certificate:
${certificate.title}

(Student: ${currentUser.name})

(Frontend Demo)`

    );

}



// =======================
// PRINT
// =======================

function printCertificate(index){

    const certificate =
    currentUser.certificates[index];

    const printWindow =
    window.open("","_blank");

    printWindow.document.write(`

    <html>

    <head>

    <title>Certificate</title>

    <style>

    body{

        font-family:Arial;

        text-align:center;

        padding:80px;

    }

    h1{

        color:#4338ca;

        font-size:42px;

    }

    h2{

        margin-top:40px;

    }

    p{

        font-size:20px;

    }

    </style>

    </head>

    <body>

    <h1>

    Certificate of Completion

    </h1>

    <h2>

    ${currentUser.name}

    </h2>

    <p>

    has successfully completed

    </p>

    <h2>

    ${certificate.title}

    </h2>

    <p>

    Completion Date

    </p>

    <strong>

    ${certificate.date}

    </strong>

    <br><br>

    <h3>

    EduNest Online Learning Platform

    </h3>

    </body>

    </html>

    `);

    printWindow.document.close();

    printWindow.print();

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
// PAGE LOAD
// =======================

window.addEventListener("load",()=>{

    console.log(
    "EduNest Certificate Loaded Successfully."
    );

    loadCertificates();

});