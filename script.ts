// type Education = {
//     degree: string;
//     institute: string;
//     passingyear: string;
//   };
  
//   type Skill = string;
  
//   type WorkExperience = {
//     position: string;
//     company: string;
//     year: string;
   
//   };
  
//   const educationData: Education[] = [
//     {
//         degree: "Bachelors in Computer Science",
//         institute: "UBIT-University of Karachi",
//         passingyear: "(2017-20)",
//       },
//     {
//       degree: "Certification in React.JS Web Development",
//       institute: "BanoQabil",
//       passingyear: "(2023-24)",
//     },
//     {
//       degree: "Certification in Cloud Applied Generative AI Engineer",
//       institute: "GIAIC",
//       passingyear: "(2024-present)",
//     },
//   ];
  
//   const skillsData: Skill[] = [
//     "JavaScript",
//      "TypeScript",
//      "React.js",
//      "Next.js",
//      "Node.js",
//      "CSS",
//      "HTML"
//   ];
  
//   const workExperienceData: WorkExperience[] = [
//     {
//       position: "CRM Software Developer",
//       company: "HTTPeak Pty Ltd",
//       year: "(2021)",
//     },
//   ];
  
//   function populateEducation() {
//     const educationSection = document.getElementById("education")?.querySelector(".card-grid");
//     if (educationSection) {
//       educationData.forEach((item) => {
//         const educationCard = document.createElement("div");
//         educationCard.classList.add("card");
//         educationCard.classList.add("education-card");
  
//         educationCard.innerHTML = `
//                   <h3 class="card-title">${item.degree}</h3>
//                   <p class="card-subtitle">${item.institute}</p>
//                   <p class="card-details">${item.passingyear}</p>
//               `;
  
//         educationSection.appendChild(educationCard);
//       });
//     }
//   }
  
//   function populateSkills() {
//     const skillsSection = document.getElementById("skills")?.querySelector(".skill-list");
//     if (skillsSection) {
//       skillsData.forEach((skill) => {
//         const skillItem = document.createElement("li");
//         skillItem.textContent = skill;
//         skillsSection.appendChild(skillItem);
//       });
//     }
//   }
  
//   function populateWorkExperience() {
//     const workExperienceSection = document.getElementById("work-experience")?.querySelector(".card-grid");
//     if (workExperienceSection) {
//       workExperienceData.forEach((work) => {
//         const workCard = document.createElement("div");
//         workCard.classList.add("card");
//         workCard.classList.add("work-experience-card");
  
//         workCard.innerHTML = `
//                   <h3 class="card-title">${work.position}</h3>
//                   <p class="card-subtitle">${work.company}</p>
//                   <p class="card-details">${work.year}</p>
//               `;
  
//         workExperienceSection.appendChild(workCard);
//       });
//     }
//   }
  
//   function activateTab(tabId: string) {
//     const sections = document.querySelectorAll(".content-section");
//     sections.forEach((section) => section.classList.remove("active"));
  
//     const activeSection = document.getElementById(tabId);
//     if (activeSection) {
//       activeSection.classList.add("active");
//     }
//   }
  
//   document.getElementById("education-btn")?.addEventListener("click", () => activateTab("education"));
//   document.getElementById("skills-btn")?.addEventListener("click", () => activateTab("skills"));
//   document.getElementById("experience-btn")?.addEventListener("click", () => activateTab("work-experience"));
  
 
//   populateEducation();
//   populateSkills();
//   populateWorkExperience();
type Education = {
    degree: string;
    institute: string;
    passingyear: string;
  };
  
  type Skill = string;
  
  type WorkExperience = {
    position: string;
    company: string;
    year: string;
  };
  
  const educationData: Education[] = [
    { degree: "Bachelors in Computer Science", institute: "UBIT-University of Karachi", passingyear: "(2017-20)" },
    { degree: "Certification in React.JS Web Development", institute: "BanoQabil", passingyear: "(2023-24)" },
    { degree: "Certification in Cloud Applied Generative AI Engineer", institute: "GIAIC", passingyear: "(2024-present)" }
  ];
  
  const skillsData: Skill[] = ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "CSS", "HTML"];
  
  const workExperienceData: WorkExperience[] = [
    { position: "CRM Software Developer", company: "HTTPeak Pty Ltd", year: "(2021)" }
  ];
  
  function populateEducation() {
    const educationSection = document.querySelector("#education .card-grid");
    if (educationSection) {
      educationData.forEach(item => {
        const educationCard = document.createElement("div");
        educationCard.classList.add("card", "education-card");
        educationCard.innerHTML = `
          <h2 class="card-title">${item.degree}</h2>
          <p class="card-subtitle">${item.institute}</p>
          <p class="card-details">${item.passingyear}</p>
        `;
        educationSection.appendChild(educationCard);
      });
    }
  }
  
  function populateSkills() {
    const skillsSection = document.querySelector("#skills .skill-list");
    if (skillsSection) {
      skillsData.forEach(skill => {
        const skillItem = document.createElement("div");
        skillItem.textContent = skill;
        skillsSection.appendChild(skillItem);
      });
    }
  }
  
  function populateWorkExperience() {
    const workExperienceSection = document.querySelector("#work-experience .card-grid");
    if (workExperienceSection) {
      workExperienceData.forEach(work => {
        const workCard = document.createElement("div");
        workCard.classList.add("card", "work-experience-card");
        workCard.innerHTML = `
          <h2 class="card-title">${work.position}</h2>
          <p class="card-subtitle">${work.company}</p>
          <p class="card-details">${work.year}</p>
        `;
        workExperienceSection.appendChild(workCard);
      });
    }
  }
  
  function activateTab(tabId: string) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => section.classList.add("hidden"));
  
    const activeSection = document.getElementById(tabId);
    if (activeSection) {
      activeSection.classList.remove("hidden");
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("education-btn")?.addEventListener("click", () => activateTab("education"));
    document.getElementById("skills-btn")?.addEventListener("click", () => activateTab("skills"));
    document.getElementById("experience-btn")?.addEventListener("click", () => activateTab("work-experience"));
  
    // Populate sections with data
    populateEducation();
    populateSkills();
    populateWorkExperience();
  });
  