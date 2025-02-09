document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    // Add a delay for each section
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add("active");
      }, 1000 * (index + 1)); // Increment delay for each section
    });
  });

  // Scroll-based content reveal
  document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
      if (section.offsetTop < scrollPosition) {
        section.classList.add("active");
      }
    });
  });

  const visitorCountKey = 'visitorCount';
  const helpedCountKey = 'helpedCount';

  // Initialize counts if not already in localStorage
  if (!localStorage.getItem(visitorCountKey)) {
    localStorage.setItem(visitorCountKey, '0');
  }
  if (!localStorage.getItem(helpedCountKey)) {
    localStorage.setItem(helpedCountKey, '0');
  }

  // Increment visitor count on page load
  document.addEventListener('DOMContentLoaded', () => {
    const visitorCount = parseInt(localStorage.getItem(visitorCountKey), 10) + 1;
    localStorage.setItem(visitorCountKey, visitorCount);
    document.getElementById('visitor-count').textContent = visitorCount;
  });

  // Function to increment helped count
  function incrementHelped() {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block'; // Show loading animation

    setTimeout(() => {
      let helpedCount = parseInt(localStorage.getItem(helpedCountKey), 10) + 1;
      localStorage.setItem(helpedCountKey, helpedCount);
      document.getElementById('helped-count').textContent = helpedCount;
      loadingElement.style.display = 'none'; // Hide loading animation
    }, 1000); // Simulate delay for loading animation
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

