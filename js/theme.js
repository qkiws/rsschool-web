const themeButton = document.querySelector(".theme-button");

function applyTheme(theme) {
    const isDark = theme === "dark";

    document.body.classList.toggle("dark-theme", isDark);

    if (themeButton) {
        themeButton.textContent = isDark ? "☀" : "🌙";

        themeButton.setAttribute(
            "aria-label",
            isDark ? "Switch to light theme" : "Switch to dark theme"
        );
    }
}

const savedTheme = localStorage.getItem("theme");

applyTheme(savedTheme === "dark" ? "dark" : "light");

if (themeButton) {
    themeButton.addEventListener("click", function() {
        const nextTheme = document.body.classList.contains("dark-theme")
            ? "light"
            : "dark";

        applyTheme(nextTheme);

        localStorage.setItem("theme", nextTheme);
    });
}
