var _a, _b;
function addDynamicInput(containerId, placeholderText, inputClass) {
    var container = document.getElementById(containerId);
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = inputClass;
    newInput.placeholder = placeholderText;
    container === null || container === void 0 ? void 0 : container.appendChild(newInput);
}
// Add event listeners for dynamic input buttons
(_a = document
    .querySelector(".skills-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    return addDynamicInput("skills-container", "Enter another skill", "skills");
});
(_b = document
    .querySelector(".tools-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    return addDynamicInput("tools-container", "Enter a tool", "tools");
});
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    // Place all your code here
    (_a = document
        .querySelector(".resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        var _a;
        event.preventDefault();
        var profilePicture = document.getElementById("profile-picture");
        var userNameInput = document.getElementById("UserName");
        var nameInput = document.getElementById("name");
        var addressInput = document.getElementById("address");
        var emailInput = document.getElementById("email");
        var phoneInput = document.getElementById("phone");
        var aboutInput = document.getElementById("about");
        var universityInput = document.getElementById("university");
        var uniSelectedYear = document.getElementById("uni-selected-year");
        var cgpa = document.getElementById("cgpa");
        var intermediateInput = document.getElementById("college");
        var collegeSelectedYear = document.getElementById("college-selected-year");
        var grade = document.getElementById("grade");
        var experienceInput = document.getElementById("experience");
        var resumeOutputElement = document.querySelector(".output");
        if (profilePicture &&
            userNameInput &&
            nameInput &&
            addressInput &&
            emailInput &&
            phoneInput &&
            universityInput &&
            uniSelectedYear &&
            intermediateInput &&
            collegeSelectedYear &&
            experienceInput &&
            resumeOutputElement &&
            aboutInput &&
            cgpa &&
            grade) {
            var userName = userNameInput.value;
            var userFullName = nameInput.value;
            var userAddress = addressInput.value;
            var userEmail = emailInput.value;
            var userPhone = phoneInput.value;
            var userUniversity = universityInput.value;
            var userUniYear = uniSelectedYear.value;
            var userIntermediate = intermediateInput.value;
            var userCollegeYear = collegeSelectedYear.value;
            var userAbout = aboutInput.value;
            var userCGPA = cgpa.value;
            var userGrade = grade.value;
            // Gather all skill inputs
            var skillInputs = document.querySelectorAll(".skills");
            var userSkills = Array.from(skillInputs)
                .map(function (input) { return input.value.trim(); })
                .filter(Boolean);
            // Gather all tool inputs
            var toolInputs = document.querySelectorAll(".tools");
            var userTools = Array.from(toolInputs)
                .map(function (input) { return input.value.trim(); })
                .filter(Boolean);
            var userExperience = experienceInput.value;
            var profilePictureFile = (_a = profilePicture.files) === null || _a === void 0 ? void 0 : _a[0];
            var profilePictureURL = profilePictureFile
                ? URL.createObjectURL(profilePictureFile)
                : "";
            var resumeOutput = "\n          <div class=\"output-personal-info\">\n          <img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-picture\"/>\n            <div class=\"output-about\">\n            <h3 class=\"heading\">About</h3>\n            <p class=\"about-para\">").concat(userAbout, "</p>\n            </div>\n            <div class=\"output-skills\">\n            <h3 class=\"heading\">Skills</h3>\n            <ul id=\"editable-skills\">").concat(userSkills
                .map(function (skill) { return "<li>".concat(skill, "</li>"); })
                .join(""), "</ul>\n                </div>\n                <div class=\"output-tools\">\n              <h3 class=\"heading\">Tools</h3>\n              <ul id=\"editable-tools\">").concat(userTools
                .map(function (tool) { return "<li>".concat(tool, "</li>"); })
                .join(""), "</ul>\n            </div>\n            <div class=\"resume-other-content\">\n            <h2 id=\"editable-name\">").concat(userFullName, "</h2>\n            <div>\n            <h3 class=\"heading-black\">Contact</h3>\n            <p><strong>Address:</strong> ").concat(userAddress, "</p>\n            <p id=\"editable-email\"><strong>Email:</strong> ").concat(userEmail, "</p>\n            <p id=\"editable-phone\"><strong>Phone:</strong> ").concat(userPhone, "</p>\n            </div>  \n          </div>\n          <div>\n          <h3 class=\"heading-black\">Education</h3>\n          <h4>Bachlors</h4>\n          <p id=\"editable-uni-name\">").concat(userUniversity, "</p>\n          <p id=\"editable-uni-year\">").concat(userUniYear, "</p>\n          <p id=\"editable-uni-cgpa\">").concat(userCGPA, "</p>\n          <h4>Intermediate</h4>\n          <p id=\"editable-college-name\">").concat(userIntermediate, "</p>\n          <p id=\"editable-college-year\">").concat(userCollegeYear, "</p>\n          <p id=\"editable-college-cgpa\">").concat(userGrade, "</p>\n            </div>\n            <div>\n            <h3 class=\"heading-black\">Experience</h3>\n            <p id=\"editable-experience\">").concat(userExperience, "</p>\n            </div>\n            </div>\n            ");
            resumeOutputElement.innerHTML = resumeOutput;
            console.log("Resume Output Element:", resumeOutputElement);
            console.log("Resume Output HTML:", resumeOutput);
        }
    });
});
// Form submission logic
// resumeOutputElement.innerHTML = resumeOutput;
// localStorage.setItem('generatedResume', JSON.stringify({ userName, output: resumeOutput }));
// const editButton = document.getElementById('edit-button') as HTMLButtonElement;
// const saveButton = document.getElementById('save-button') as HTMLButtonElement;
// editButton.addEventListener('click', (event) => {
//   saveButton.style.display = "block";
//   // editButton.style.display = "none";
//   resumeOutputElement.contentEditable = 'true';
//   saveButton.disabled = false;
//   resumeOutputElement.focus();
// });
// saveButton.addEventListener('click', () => {
//   editButton.style.display = "block";
//   resumeOutputElement.contentEditable = 'false';
//   saveButton.disabled = true;
//   localStorage.setItem('generatedResume', JSON.stringify({ userName, output: resumeOutputElement.innerHTML }));
//   alert('Resume saved!');
// });
// const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
// downloadPdfButton.addEventListener('click', () => {
//   const element = resumeOutputElement;
//   if (element) {
//     const opt = {
//       margin: 1,
//       filename: "resume.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//     };
//     html2pdf().from(element).set(opt).save(`${userName}_resume.pdf`);
//   }
// });
// const shareableLinkButton = document.getElementById('shareable-link') as HTMLButtonElement;
// shareableLinkButton.addEventListener('click', () => {
//   const shareLink = `${window.location.href}?user=${encodeURIComponent(userName)}`;
//   navigator.clipboard.writeText(shareLink).then(() => {
//     alert('Shareable link copied to clipboard!');
//   });
// });
// }
// });
// window.addEventListener('load', () => {
// const savedResume = JSON.parse(localStorage.getItem('generatedResume') || '{}');
// if (savedResume && savedResume.output) {
// const resumeOutputElement = document.querySelector('.output') as HTMLDivElement;
// if (resumeOutputElement) {
//   resumeOutputElement.innerHTML = savedResume.output;
// }
// }
