const bukaSidebar = document.querySelectorAll('.bi-menu-button-wide');
const tutupSidebar = document.querySelector('.bi-x-lg');
const sidebar = document.querySelector('.sidebar');

document.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('bi-menu-button-wide')) {
        sidebar.style.display = 'block';
    } else if (target.classList.contains('bi-x-lg') || !sidebar.contains(target)) {
        sidebar.style.display = 'none';
    }
});

const darkModeToggle = document.getElementById("dark-mode-toggle");
const themeStyle = document.getElementById("theme-style");

darkModeToggle.addEventListener("click", () => {
  if (themeStyle.getAttribute("href") === "style.css") {
    themeStyle.setAttribute("href", "dark-mode.css");
  } else {
    themeStyle.setAttribute("href", "style.css");
  }
});
