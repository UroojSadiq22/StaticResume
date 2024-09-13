// type Education = {
//     degree: string;
//     institute: string;
//     passingyear: string;
//   };
var educationData = [
    { degree: "Bachelors in Computer Science", institute: "UBIT-University of Karachi", passingyear: "(2017-20)" },
    { degree: "Certification in React.JS Web Development", institute: "BanoQabil", passingyear: "(2023-24)" },
    { degree: "Certification in Cloud Applied Generative AI Engineer", institute: "GIAIC", passingyear: "(2024-present)" }
];
var skillsData = ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "CSS", "HTML"];
var workExperienceData = [
    { position: "CRM Software Developer", company: "HTTPeak Pty Ltd", year: "(2021)" }
];
function populateEducation() {
    var educationSection = document.querySelector("#education .card-grid");
    if (educationSection) {
        educationData.forEach(function (item) {
            var educationCard = document.createElement("div");
            educationCard.classList.add("card", "education-card");
            educationCard.innerHTML = "\n          <h2 class=\"card-title\">".concat(item.degree, "</h2>\n          <p class=\"card-subtitle\">").concat(item.institute, "</p>\n          <p class=\"card-details\">").concat(item.passingyear, "</p>\n        ");
            educationSection.appendChild(educationCard);
        });
    }
}
function populateSkills() {
    var skillsSection = document.querySelector("#skills .skill-list");
    if (skillsSection) {
        skillsData.forEach(function (skill) {
            var skillItem = document.createElement("div");
            skillItem.textContent = skill;
            skillsSection.appendChild(skillItem);
        });
    }
}
function populateWorkExperience() {
    var workExperienceSection = document.querySelector("#work-experience .card-grid");
    if (workExperienceSection) {
        workExperienceData.forEach(function (work) {
            var workCard = document.createElement("div");
            workCard.classList.add("card", "work-experience-card");
            workCard.innerHTML = "\n          <h2 class=\"card-title\">".concat(work.position, "</h2>\n          <p class=\"card-subtitle\">").concat(work.company, "</p>\n          <p class=\"card-details\">").concat(work.year, "</p>\n        ");
            workExperienceSection.appendChild(workCard);
        });
    }
}
function activateTab(tabId) {
    var sections = document.querySelectorAll(".content-section");
    sections.forEach(function (section) { return section.classList.add("hidden"); });
    var activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.classList.remove("hidden");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c;
    (_a = document.getElementById("education-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return activateTab("education"); });
    (_b = document.getElementById("skills-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return activateTab("skills"); });
    (_c = document.getElementById("experience-btn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return activateTab("work-experience"); });
    // Populate sections with data
    populateEducation();
    populateSkills();
    populateWorkExperience();
});
