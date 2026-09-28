const themeButton = document.querySelector(".theme-button");
const burgerButton = document.querySelector(".burger-button");
const navigation = document.querySelector(".navigation");

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
    themeButton.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
        applyTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
    });
}

if (burgerButton && navigation) {
    const closeMenu = () => {
        navigation.classList.remove("navigation--open");
        burgerButton.classList.remove("burger-button--open");
        burgerButton.textContent = "☰";
        burgerButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    };

    const openMenu = () => {
        navigation.classList.add("navigation--open");
        burgerButton.classList.add("burger-button--open");
        burgerButton.textContent = "✕";
        burgerButton.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");
    };

    burgerButton.addEventListener("click", () => {
        if (navigation.classList.contains("navigation--open")) {
            closeMenu();
            return;
        }

        openMenu();
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}

const slider = document.querySelector(".slider");

if (slider) {
    const slides = Array.from(slider.querySelectorAll(".coffee-card"));
    const prevButton = slider.querySelector(".slider__button--prev");
    const nextButton = slider.querySelector(".slider__button--next");
    let slideIndex = 0;

    const renderSlider = () => {
        slides.forEach((slide, index) => {
            const isVisible = index === slideIndex;
            slide.style.display = isVisible ? "block" : "none";
            slide.style.opacity = isVisible ? "1" : "0";
        });
    };

    if (prevButton) {
        prevButton.addEventListener("click", () => {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
            renderSlider();
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            slideIndex = (slideIndex + 1) % slides.length;
            renderSlider();
        });
    }

    renderSlider();
}