document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".navbar-item");
  const sections = document.querySelectorAll("section");

  const setActiveLink = () => {
    let currentSection = "";

    // Determine the current section in the viewport
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50; // Adjust for navbar height
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update active class for navbar items
    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.dataset.section === currentSection) {
        item.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", setActiveLink);
});
