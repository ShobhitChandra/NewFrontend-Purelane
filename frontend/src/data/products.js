const bot1 = "/Media/Images/1bot.png";
const leaf = "/Media/Images/leaf.png";
const washingMachine = "/Media/Images/Wahing-machine.svg";
const message = "/Media/Images/message.svg";
const other = "/Media/Images/other.svg";

const products = [

    {
        id: "tap-cleaner",
        name: "TAP CLEANER & LIMESCALE REMOVER",
        image: bot1,
        price: 200,
        originalPrice: 299,
        discount: "33% off",
        rating: 4.8,
        reviews: 237,
        badge: "BEST SELLER",
        category: "Bathroom",
        available: true
    },

    {
        id: "kitchen-cleaner",
        name: "KITCHEN CLEANER, FOAMING",
        image: bot1,
        price: 200,
        originalPrice: 299,
        discount: "33% off",
        rating: 4.8,
        reviews: 254,
        badge: "BEST SELLER",
        category: "Kitchen",
        available: true
    },

    {
        id: "copper-cleaner",
        name: "COPPER, BRONZE & BRASS CLEANER",
        image: bot1,
        price: 200,
        originalPrice: 299,
        discount: "33% off",
        rating: 4.8,
        reviews: 231,
        badge: "TOP RATED",
        category: "Kitchen",
        available: true
    },

    {
        id: "washing-machine-cleaner",
        name: "WASHING MACHINE CLEANER & DESCALER",
        image: washingMachine,
        price: 200,
        originalPrice: 299,
        discount: "33% off",
        rating: 4.8,
        reviews: 183,
        badge: "NEW",
        category: "Laundry",
        available: true
    },

    {
        id: "toilet-cleaner",
        name: "TOILET CLEANER",
        image: bot1,
        price: 249,
        originalPrice: 349,
        discount: "29% off",
        rating: 4.8,
        reviews: 198,
        badge: "BEST SELLER",
        category: "Bathroom",
        available: true
    },

    {
        id: "dishwash-gel",
        name: "DISHWASH GEL",
        image: bot1,
        price: 199,
        originalPrice: 299,
        discount: "33% off",
        rating: 4.7,
        reviews: 176,
        badge: "BEST SELLER",
        category: "Kitchen",
        available: true
    },

    {
        id: "floor-cleaner",
        name: "FLOOR CLEANER",
        image: bot1,
        price: 249,
        originalPrice: 349,
        discount: "29% off",
        rating: 4.8,
        reviews: 142,
        badge: "TOP RATED",
        category: "Home",
        available: true
    },

    {
        id: "handwash",
        name: "LIQUID HANDWASH",
        image: bot1,
        price: 199,
        originalPrice: 249,
        discount: "20% off",
        rating: 4.9,
        reviews: 312,
        badge: "NEW",
        category: "Personal Care",
        available: true
    },

    {
        id: "laundry-detergent",
        name: "LAUNDRY DETERGENT",
        image: bot1,
        price: 349,
        originalPrice: 449,
        discount: "22% off",
        rating: 4.8,
        reviews: 289,
        badge: "BEST SELLER",
        category: "Laundry",
        available: true
    },

    {
        id: "fabric-conditioner",
        name: "FABRIC CONDITIONER",
        image: bot1,
        price: 299,
        originalPrice: 399,
        discount: "25% off",
        rating: 4.7,
        reviews: 156,
        badge: "NEW",
        category: "Laundry",
        available: true
    },

    /* NO IMAGE PRODUCT */

    {
        id: "magic-eraser",
        name: "MAGIC ERASER",
        image: null,
        fallbackImage: leaf,
        price: 149,
        originalPrice: 199,
        discount: "25% off",
        rating: 4.6,
        reviews: 98,
        badge: "NEW",
        category: "Home",
        available: true
    },

    /* SOLD OUT */

    {
        id: "bathroom-scrub",
        name: "BATHROOM DEEP CLEANING SCRUB",
        image: message,
        price: 249,
        originalPrice: 349,
        discount: "29% off",
        rating: 4.8,
        reviews: 121,
        badge: "BEST SELLER",
        category: "Bathroom",
        available: false
    },

    /* LONG TITLE */

    {
        id: "complete-home-system",
        name: "COMPLETE PLANT POWERED HOME CLEANING SYSTEM FOR A HAPPIER AND FRESHER HOME",
        image: other,
        price: 699,
        originalPrice: 999,
        discount: "30% off",
        rating: 4.9,
        reviews: 87,
        badge: "TOP RATED",
        category: "Home",
        available: true
    }

];

export default products;