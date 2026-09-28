const slider = document.querySelector(".slider");

if (slider) {

    const slides = Array.from(
        slider.querySelectorAll(".coffee-card")
    );

    const prevButton = slider.querySelector(
        ".slider__button--prev"
    );

    const nextButton = slider.querySelector(
        ".slider__button--next"
    );

    let slideIndex = 0;

    function renderSlider() {

        slides.forEach(function(slide, index) {

            if (index === slideIndex) {
                slide.classList.add("coffee-card--active");
            } else {
                slide.classList.remove("coffee-card--active");
            }

        });

    }

    if (prevButton) {

        prevButton.addEventListener("click", function() {

            slideIndex =
                (slideIndex - 1 + slides.length) %
                slides.length;

            renderSlider();

        });

    }

    if (nextButton) {

        nextButton.addEventListener("click", function() {

            slideIndex =
                (slideIndex + 1) %
                slides.length;

            renderSlider();

        });

    }

    document.addEventListener("keydown", function(event) {

        if (event.key === "ArrowLeft") {

            slideIndex =
                (slideIndex - 1 + slides.length) %
                slides.length;

            renderSlider();

        }

        if (event.key === "ArrowRight") {

            slideIndex =
                (slideIndex + 1) %
                slides.length;

            renderSlider();

        }

    });

    renderSlider();
}