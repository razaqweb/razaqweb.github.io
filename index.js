const contactLinks = document.querySelector(".contact-links-container");
const aboutParagraph = document.querySelector(".paragraph-container");
const navBar = document.querySelector(".nav-list");
const webprofiles = document.querySelectorAll(".web-profile");
const webImages = document.querySelectorAll(".web-img");
const copyrightDate = document.querySelector(".copyright-date");

///Animate on Scroll///
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
      }
    });
  },
  {
    root: null,
    threshold: 0.25,
  }
);

aboutParagraph.classList.add("hidden");
contactLinks.classList.add("hidden");

webprofiles.forEach((profile) => {
  profile.classList.add("hidden");
  observer.observe(profile);
});

webImages.forEach((image) => {
  image.classList.add("hidden");
  observer.observe(image);
});

observer.observe(aboutParagraph);
observer.observe(contactLinks);

//Copyright Date
copyrightDate.textContent = new Date().getFullYear();

// Smooth Scrolling//
navBar.addEventListener("click", (e) => {
  e.preventDefault();

  const id = e.target.getAttribute("href");

  if (!e.target.classList.contains("nav-link")) return;

  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});
