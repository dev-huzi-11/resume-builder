declare var html2pdf;

function addDynamicInput(containerId, placeholderText, inputClass) {
  const container = document.getElementById(containerId);
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.className = inputClass;
  newInput.placeholder = placeholderText;
  container?.appendChild(newInput);
}

// Add event listeners for dynamic input buttons
document
  .querySelector(".skills-btn")
  ?.addEventListener("click", () =>
    addDynamicInput("skills-container", "Enter another skill", "skills")
  );
document
  .querySelector(".tools-btn")
  ?.addEventListener("click", () =>
    addDynamicInput("tools-container", "Enter a tool", "tools")
  );

document.addEventListener("DOMContentLoaded", function () {
  // Place all your code here
  document
    .querySelector(".resume-form")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();

      const profilePicture = document.getElementById(
        "profile-picture"
      ) as HTMLInputElement | null;
      const userNameInput = document.getElementById(
        "UserName"
      ) as HTMLInputElement | null;
      const nameInput = document.getElementById(
        "name"
      ) as HTMLInputElement | null;
      const addressInput = document.getElementById(
        "address"
      ) as HTMLInputElement | null;
      const emailInput = document.getElementById(
        "email"
      ) as HTMLInputElement | null;
      const phoneInput = document.getElementById(
        "phone"
      ) as HTMLInputElement | null;
      const aboutInput = document.getElementById(
        "about"
      ) as HTMLTextAreaElement | null;
      const universityInput = document.getElementById(
        "university"
      ) as HTMLInputElement | null;
      const uniSelectedYear = document.getElementById(
        "uni-selected-year"
      ) as HTMLSelectElement | null;
      const cgpa = document.getElementById("cgpa") as HTMLInputElement | null;
      const intermediateInput = document.getElementById(
        "college"
      ) as HTMLInputElement | null;
      const collegeSelectedYear = document.getElementById(
        "college-selected-year"
      ) as HTMLSelectElement | null;
      const grade = document.getElementById("grade") as HTMLInputElement | null;
      const experienceInput = document.getElementById(
        "experience"
      ) as HTMLTextAreaElement | null;
      const resumeOutputElement =
        document.querySelector<HTMLDivElement>(".output");

      if (
        profilePicture &&
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
        grade
      ) {
        const userName = userNameInput.value;
        const userFullName = nameInput.value;
        const userAddress = addressInput.value;
        const userEmail = emailInput.value;
        const userPhone = phoneInput.value;
        const userUniversity = universityInput.value;
        const userUniYear = uniSelectedYear.value;
        const userIntermediate = intermediateInput.value;
        const userCollegeYear = collegeSelectedYear.value;
        const userAbout = aboutInput.value;
        const userCGPA = cgpa.value;
        const userGrade = grade.value;

        // Gather all skill inputs
        const skillInputs =
          document.querySelectorAll<HTMLInputElement>(".skills");
        const userSkills = Array.from(skillInputs)
          .map((input) => input.value.trim())
          .filter(Boolean);

        // Gather all tool inputs
        const toolInputs =
          document.querySelectorAll<HTMLInputElement>(".tools");
        const userTools = Array.from(toolInputs)
          .map((input) => input.value.trim())
          .filter(Boolean);

        const userExperience = experienceInput.value;
        const profilePictureFile = profilePicture.files?.[0];
        const profilePictureURL = profilePictureFile
          ? URL.createObjectURL(profilePictureFile)
          : "";

        const resumeOutput = `
          <div class="output-personal-info">
          <img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture"/>
            <div class="output-about">
            <h3 class="heading">About</h3>
            <p class="about-para">${userAbout}</p>
            </div>
            <div class="output-skills">
            <h3 class="heading">Skills</h3>
            <ul id="editable-skills">${userSkills
              .map((skill) => `<li>${skill}</li>`)
              .join("")}</ul>
                </div>
                <div class="output-tools">
              <h3 class="heading">Tools</h3>
              <ul id="editable-tools">${userTools
                .map((tool) => `<li>${tool}</li>`)
                .join("")}</ul>
            </div>
            <div class="resume-other-content">
            <h2 id="editable-name">${userFullName}</h2>
            <div>
            <h3 class="heading-black">Contact</h3>
            <p><strong>Address:</strong> ${userAddress}</p>
            <p id="editable-email"><strong>Email:</strong> ${userEmail}</p>
            <p id="editable-phone"><strong>Phone:</strong> ${userPhone}</p>
            </div>  
          </div>
          <div>
          <h3 class="heading-black">Education</h3>
          <h4>Bachlors</h4>
          <p id="editable-uni-name">${userUniversity}</p>
          <p id="editable-uni-year">${userUniYear}</p>
          <p id="editable-uni-cgpa">${userCGPA}</p>
          <h4>Intermediate</h4>
          <p id="editable-college-name">${userIntermediate}</p>
          <p id="editable-college-year">${userCollegeYear}</p>
          <p id="editable-college-cgpa">${userGrade}</p>
            </div>
            <div>
            <h3 class="heading-black">Experience</h3>
            <p id="editable-experience">${userExperience}</p>
            </div>
            </div>
            `;

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
