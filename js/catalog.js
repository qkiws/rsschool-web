const catalogGrid = document.querySelector("#catalog-grid");
const categoryButtons = document.querySelectorAll(".category-button");
const loadMoreButton = document.querySelector("#load-more");

let currentCategory = "coffee";
let visibleProducts = window.innerWidth <= 768 ? 4 : Number.MAX_SAFE_INTEGER;

function getCurrentProducts() {
    return products.filter(function(product) {
        return product.category === currentCategory;
    });
}

function createProductCard(product) {
    const card = document.createElement("article");

    card.className = "product-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open details for ${product.name}`);
    card.dataset.productId = String(product.id);

    card.innerHTML = `
        <img
            src="${product.image}"
            alt="${product.name}"
        >

        <div class="product-card__content">
            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <span class="product-card__price">
                $${product.price}
            </span>
        </div>
    `;

    card.addEventListener("click", function() {
        openModal(product);
    });

    card.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openModal(product);
        }
    });

    return card;
}

function renderProducts() {
    const currentProducts = getCurrentProducts();
    const shouldShowAll = window.innerWidth > 768;

    if (shouldShowAll) {
        visibleProducts = currentProducts.length;
    } else if (!visibleProducts || visibleProducts > currentProducts.length) {
        visibleProducts = 4;
    }

    catalogGrid.innerHTML = "";

    currentProducts.slice(0, visibleProducts).forEach(function(product) {
        catalogGrid.append(createProductCard(product));
    });

    updateLoadMoreButton(currentProducts);
}

function updateLoadMoreButton(currentProducts) {
    const hasHiddenProducts = visibleProducts < currentProducts.length;
    loadMoreButton.style.display = hasHiddenProducts ? "inline-flex" : "none";
}

categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        categoryButtons.forEach(function(categoryButton) {
            categoryButton.classList.remove("category-button--active");
        });

        button.classList.add("category-button--active");
        currentCategory = button.dataset.category;
        visibleProducts = window.innerWidth <= 768 ? 4 : Number.MAX_SAFE_INTEGER;

        renderProducts();
    });
});

loadMoreButton.addEventListener("click", function() {
    const currentProducts = getCurrentProducts();
    visibleProducts = Math.min(visibleProducts + 4, currentProducts.length);
    renderProducts();
});

window.addEventListener("resize", function() {
    renderProducts();
});

renderProducts();