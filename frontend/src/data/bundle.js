const bundles = [
    {
        id: "starter",
        tag: "STARTER",
        products: 2,

        price: 349,
        originalPrice: 598,

        perProduct: 174,

        features: [
            "Pick any two products",
            "Free shipping across India"
        ],

        popular: false,

        bottleClass: "p-kitchen"
    },

    {
        id: "most-popular",
        tag: "MOST POPULAR",
        products: 3,

        price: 499,
        originalPrice: 897,

        perProduct: 166,

        features: [
            "Pick any three products",
            "Covers kitchen and laundry",
            "Free shipping across India"
        ],

        popular: true,

        bottleClass: "p-laundry"
    },

    {
        id: "whole-home",
        tag: "WHOLE HOME",
        products: 5,

        price: 799,
        originalPrice: 1495,

        perProduct: 160,

        features: [
            "Pick any five products",
            "Every room in one order",
            "Free shipping across India"
        ],

        popular: false,

        bottleClass: "p-bathroom"
    }
];

export default bundles;