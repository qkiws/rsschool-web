const burgerButton = document.querySelector(".burger-button");
const navigation = document.querySelector(".navigation");


if (burgerButton && navigation) {

    function closeMenu() {
        navigation.classList.remove("navigation--open");
        burgerButton.classList.remove("burger-button--open");

        burgerButton.textContent = "☰";

        burgerButton.setAttribute(
            "aria-expanded",
            "false"
        );

        burgerButton.setAttribute(
            "aria-label",
            "Open menu"
        );

        document.body.classList.remove("menu-open");
    }

    function openMenu() {
        navigation.classList.add("navigation--open");
        burgerButton.classList.add("burger-button--open");

        burgerButton.textContent = "✕";

        burgerButton.setAttribute(
            "aria-expanded",
            "true"
        );

        burgerButton.setAttribute(
            "aria-label",
            "Close menu"
        );

        document.body.classList.add("menu-open");
    }

    burgerButton.addEventListener("click", function() {

        if (navigation.classList.contains("navigation--open")) {
            closeMenu();
        } else {
            openMenu();
        }

    });

    navigation.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            if (window.innerWidth <= 768) {
                closeMenu();
            }

        });

    });

    document.addEventListener("keydown", function(event) {

        if (
            event.key === "Escape" &&
            navigation.classList.contains("navigation--open")
        ) {
            closeMenu();
        }

    });

    window.addEventListener("resize", function() {

        if (window.innerWidth > 768) {
            closeMenu();
        }

    });

}