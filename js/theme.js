const themeButton = document.querySelector(".theme-button")
const savedTheme = localStorage.getItem('theme')

if (savedTheme === 'dark'){
    document.body.classList.add('dark-theme');
    themeButton.textContent ="🌞";
} else {
    themeButton.textContent = "🌙";
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "🌞";
    } else {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌙";
    }
});