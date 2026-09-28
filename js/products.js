function createProductOptions() {
    return [
        {
            name: "size",
            label: "Size",
            values: [
                { label: "Small", value: "small", extra: 0 },
                { label: "Medium", value: "medium", extra: 1 },
                { label: "Large", value: "large", extra: 2 },
            ],
        },
        {
            name: "addOn",
            label: "Add-on",
            values: [
                { label: "None", value: "none", extra: 0 },
                { label: "Extra shot", value: "extra-shot", extra: 1.5 },
                { label: "Vanilla syrup", value: "vanilla-syrup", extra: 1 },
            ],
        },
    ];
}

const products = [
    {
        id: 1,
        category: "coffee",
        name: "Espresso",
        image: "images/coffee-1.jpg",
        description: "Strong and rich coffee with an intense flavor.",
        price: 3,
        options: createProductOptions(),
    },

    {
        id: 2,
        category: "coffee",
        name: "Cappuccino",
        image: "images/coffee-2.jpg",
        description: "Smooth espresso with steamed milk and soft foam.",
        price: 4,
        options: createProductOptions(),
    },

    {
        id: 3,
        category: "coffee",
        name: "Latte",
        image: "images/coffee-3.jpg",
        description: "Delicate espresso with plenty of warm steamed milk.",
        price: 4,
        options: createProductOptions(),
    },

    {
        id: 4,
        category: "coffee",
        name: "Americano",
        image: "images/coffee-4.jpg",
        description: "Classic espresso diluted with hot water.",
        price: 3,
        options: createProductOptions(),
    },

    {
        id: 5,
        category: "coffee",
        name: "Flat White",
        image: "images/coffee-5.jpg",
        description: "Velvety espresso-based coffee with silky microfoam.",
        price: 4,
        options: createProductOptions(),
    },

    {
        id: 6,
        category: "coffee",
        name: "Mocha",
        image: "images/coffee-6.jpg",
        description: "Espresso blended with chocolate and steamed milk.",
        price: 5,
        options: createProductOptions(),
    },

    {
        id: 7,
        category: "coffee",
        name: "Macchiato",
        image: "images/coffee-7.jpg",
        description: "Rich espresso finished with a small amount of milk foam.",
        price: 4,
        options: createProductOptions(),
    },

    {
        id: 8,
        category: "coffee",
        name: "Cold Brew",
        image: "images/coffee-8.jpg",
        description: "Smooth and refreshing coffee slowly brewed with cold water.",
        price: 5,
        options: createProductOptions(),
    },

    {
        id: 9,
        category: "tea",
        name: "Earl Grey",
        image: "images/coffee-1.jpg",
        description: "Classic black tea with a delicate bergamot aroma.",
        price: 3,
        options: createProductOptions(),
    },

    {
        id: 10,
        category: "tea",
        name: "Green Tea",
        image: "images/coffee-2.jpg",
        description: "Light and refreshing green tea with a clean taste.",
        price: 3,
        options: createProductOptions(),
    },

    {
        id: 11,
        category: "tea",
        name: "Matcha Latte",
        image: "images/coffee-3.jpg",
        description: "Creamy steamed milk combined with smooth Japanese matcha.",
        price: 5,
        options: createProductOptions(),
    },

    {
        id: 12,
        category: "tea",
        name: "Chai Latte",
        image: "images/coffee-4.jpg",
        description: "Warm spiced tea with steamed milk and aromatic cinnamon.",
        price: 5,
        options: createProductOptions(),
    },

    {
        id: 13,
        category: "tea",
        name: "Jasmine Tea",
        image: "images/coffee-5.jpg",
        description: "Fragrant green tea infused with delicate jasmine flowers.",
        price: 4,
        options: createProductOptions(),
    },

    {
        id: 14,
        category: "tea",
        name: "Berry Tea",
        image: "images/coffee-6.jpg",
        description: "Fruity tea blend with a bright berry aroma.",
        price: 4,
        options: createProductOptions(),
    },

    {
        id: 15,
        category: "desserts",
        name: "Tiramisu",
        image: "images/coffee-7.jpg",
        description: "Classic Italian dessert with mascarpone and coffee.",
        price: 6,
        options: createProductOptions(),
    },

    {
        id: 16,
        category: "desserts",
        name: "Cheesecake",
        image: "images/coffee-8.jpg",
        description: "Creamy cheesecake with a delicate biscuit base.",
        price: 6,
        options: createProductOptions(),
    },

    {
        id: 17,
        category: "desserts",
        name: "Chocolate Cake",
        image: "images/coffee-1.jpg",
        description: "Rich chocolate cake with a smooth creamy layer.",
        price: 6,
        options: createProductOptions(),
    },

    {
        id: 18,
        category: "desserts",
        name: "Croissant",
        image: "images/coffee-2.jpg",
        description: "Buttery French pastry with a crisp golden crust.",
        price: 4,
        options: createProductOptions(),
    },

    {
        id: 19,
        category: "desserts",
        name: "Cinnamon Roll",
        image: "images/coffee-3.jpg",
        description: "Soft sweet pastry with cinnamon and vanilla glaze.",
        price: 4,
        options: createProductOptions(),
    },

    {
        id: 20,
        category: "desserts",
        name: "Brownie",
        image: "images/coffee-4.jpg",
        description: "Soft chocolate brownie with a rich cocoa flavor.",
        price: 5,
        options: createProductOptions(),
    },
];