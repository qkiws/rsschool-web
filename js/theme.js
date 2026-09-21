const themeButton = document.querySelector(".theme-button")
const savedTheme = localStorage.getItem('theme')

if (savedTheme === 'dark'){
    document.body.classList.add('dark-theme');
    themeButton.textContent ="🌞";
} else {
    themeButton.textContent = "🌙";
}