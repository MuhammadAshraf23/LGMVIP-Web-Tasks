
let enrollBtn = document.getElementById("enroll");
let clearBtn = document.getElementById("clear");

enrollBtn.addEventListener("click", () => {
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let website = document.getElementById("website");
        let imgLink = document.getElementById("imgLink");
        let genderMale = document.getElementById("male");
        let genderFemale = document.getElementById("female");
        let htmlSkill = document.getElementById('html');
        let cssSkill = document.getElementById('css');
        let jsSkill = document.getElementById('js');
        let studentDetail = document.querySelector(".description");
        let studentInfo = document.getElementById('StudentDetail');
        let image=document.querySelector(".image")
        let selectedGender = genderMale.checked ? "Male" : (genderFemale.checked ? "Female" : "");
        let selectedSkills = [];
        if (htmlSkill.checked) selectedSkills.push("HTML");
        if (cssSkill.checked) selectedSkills.push("CSS");
        if (jsSkill.checked) selectedSkills.push("JS");

        studentDetail.innerHTML += `
        <div style="margin:0px 180px 0px 3px">
            <p style="padding:6px;"><b>Name:</b> ${name.value}</p>
            <p style="padding:6px;"><b>Email:</b> ${email.value}</p>
            <p style="padding:6px;"><b>Website:</b><a href=""> ${website.value}</a></p>
            <p style="padding:6px;"><b>Gender:</b> ${selectedGender}</p>
            <p style="padding:6px;"><b>Skills:</b> ${selectedSkills}</p> 
            <hr/ style="padding:5px 0px;">
        </div>
        <div class ="image">
            <img src="${imgLink.value}">
        </div>
        `
    ;
    studentInfo.style.display="flex";
});


