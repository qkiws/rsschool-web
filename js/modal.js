const modal = document.querySelector("#product-modal");
const modalOverlay = document.querySelector(".modal__overlay");
const modalClose = document.querySelector("#modal-close");
const modalContent = document.querySelector(".modal__content");

const modalImage = document.querySelector("#modal-image");
const modalCategory = document.querySelector("#modal-category");
const modalTitle = document.querySelector("#modal-title");
const modalSummary = document.querySelector("#modal-summary");
const modalDescription = document.querySelector("#modal-description");
const modalOptions = document.querySelector("#modal-options");
const modalPrice = document.querySelector("#modal-price");

let currentProduct = null;


function getSelectedOption(option) {

    return (
        option.values.find(function(value) {
            return value.value === option.selected;
        }) ||
        option.values[0]
    );

}


function getCurrentPrice(product) {

    let total = Number(product.price) || 0;


    product.options.forEach(function(option) {

        const selectedOption =
            getSelectedOption(option);


        total += Number(
            selectedOption.extra || 0
        );

    });


    return total;
}


function renderModal() {

    if (!currentProduct) {
        return;
    }


    const summary =
        currentProduct.options
            .map(function(option) {

                return `${option.label}: ${
                    getSelectedOption(option).label
                }`;

            })
            .join(" • ");


    modalImage.src =
        currentProduct.image;

    modalImage.alt =
        currentProduct.name;


    modalCategory.textContent =
        currentProduct.category;


    modalTitle.textContent =
        currentProduct.name;


    modalSummary.textContent =
        summary;


    modalDescription.textContent =
        currentProduct.description;


    modalPrice.textContent =
        `$${getCurrentPrice(currentProduct).toFixed(2)}`;


    modalOptions.innerHTML =
        currentProduct.options
            .map(function(option) {

                const choices =
                    option.values
                        .map(function(choice) {

                            const isSelected =
                                choice.value ===
                                option.selected;


                            return `
                                <button
                                    class="modal__choice ${
                                        isSelected
                                            ? "modal__choice--selected"
                                            : ""
                                    }"
                                    type="button"
                                    data-option-name="${option.name}"
                                    data-choice-value="${choice.value}"
                                >
                                    ${choice.label}
                                </button>
                            `;

                        })
                        .join("");


                return `
                    <div class="modal__option">

                        <p class="modal__option-label">
                            ${option.label}
                        </p>

                        <div class="modal__choices">
                            ${choices}
                        </div>

                    </div>
                `;

            })
            .join("");
}


function openModal(product) {

    currentProduct = {
        ...product,

        options: product.options.map(
            function(option) {

                return {
                    ...option,

                    selected:
                        option.values[0].value
                };

            }
        )
    };


    renderModal();


    modal.classList.add(
        "modal--open"
    );


    document.body.style.overflow =
        "hidden";

}


function closeModal() {

    if (!modal) {
        return;
    }


    modal.classList.remove(
        "modal--open"
    );


    document.body.style.overflow =
        "";


    currentProduct = null;

}


if (modal) {

    modalClose.addEventListener(
        "click",
        closeModal
    );


    modalOverlay.addEventListener(
        "click",
        closeModal
    );


    modalContent.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

        }
    );


    modalOptions.addEventListener(
        "click",
        function(event) {

            const target =
                event.target.closest(
                    ".modal__choice"
                );


            if (
                !target ||
                !currentProduct
            ) {
                return;
            }


            const optionName =
                target.dataset.optionName;


            const choiceValue =
                target.dataset.choiceValue;


            const option =
                currentProduct.options.find(
                    function(item) {

                        return (
                            item.name ===
                            optionName
                        );

                    }
                );


            if (!option) {
                return;
            }


            option.selected =
                choiceValue;


            renderModal();

        }
    );


    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Escape" &&
                modal.classList.contains(
                    "modal--open"
                )
            ) {

                closeModal();

            }

        }
    );

}