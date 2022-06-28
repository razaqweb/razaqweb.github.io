const copyright = document.querySelector(".copyright");
const heroSection = document.querySelector("#hero");
const workSection = document.querySelector("#work");
const aboutSection = document.querySelector("#about");
const footerSection = document.querySelector("#contact");
const workLink = document.querySelector(".work-link");
const navBar = document.querySelector(".navbar");
const workLinks = document.querySelectorAll(".work-link");
const mainSections = [heroSection, aboutSection];
const loader = document.querySelector(".loader-wrapper");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const rLetter = document.querySelector(".span-r");
const navBarSmall = document.querySelector(".navbar-small");
const logoLink = document.querySelector(".logo-link");
const contactBtn = document.querySelector(".contact-link");

// Copyright year.
copyright.textContent = new Date().getFullYear();

// Loader
window.onload = (event) => {
  loader.style.display = "none";
};
// Event Listeners

// contact button

contactBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

// worklinks
workLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    mainSections.forEach((section) => section.classList.add("hidden"));
    workSection.classList.remove("hidden");
  })
);

// Helper callback function
const navigate = function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  // Navigate Smooth
  if (
    !e.target.classList.contains("work-link") &&
    e.target.classList.contains("nav-link")
  ) {
    mainSections.forEach((section) => section.classList.remove("hidden"));
    workSection.classList.add("hidden");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
  // Reset Menu
  navBarSmall.classList.remove("show");
  hamburgerIcon.classList.remove("clicked");
  rLetter.classList.remove("r-letter");
};

// Smooth Navigation AND resetting mainSection then hiding WorkSection IF link Other than work-link is clicked
navBar.addEventListener("click", navigate);

// Hamburger

hamburgerIcon.addEventListener("click", function (e) {
  e.preventDefault();
  hamburgerIcon.classList.toggle("clicked");
  rLetter.classList.toggle("r-letter");
  navBarSmall.classList.toggle("show");
});

// mobile Nav on click

navBarSmall.addEventListener("click", navigate);

logoLink.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  if (!workSection.classList.contains("hidden")) {
    mainSections.forEach((section) => section.classList.remove("hidden"));
    workSection.classList.add("hidden");
  }
});
