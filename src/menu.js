import { deleteLogo, showLogo, showOverlay, hideOverlay, content, buildHouse } from "./index.js"
import closeImg from "./close.png"

const menuButton = document.getElementById("menu-button");

const menu = [];

function Dish(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
}

function Category(name, dish) {
    this.name = name;
    this.dish = dish;
}

// STARTER CATEGORY
let starter1 = new Dish ("Charred Sourdough", "whipped butter, sea salt", "€5.50");
let starter2 = new Dish ("Roasted Beet & Feta", "walnuts, honey, wild greens", "€7.50");
let starter3 = new Dish ("Grilled Octopus", "lemon, oregano, olive oil ", "€11.00");
let starter4 = new Dish ("Soup of the Day", "ask your server", "€6.00");

let starterCategory = new Category ("Starters", [starter1, starter2, starter3, starter4]);


// MAINS
let mains1 = new Dish("Slow-Roasted Lamb Shoulder", "root vegetables, red wine jus", "€18.50")
let mains2 = new Dish("Oak-Grilled Sea Bream", "charred lemon, herb oil, potatoes", "€16.00")
let mains3 = new Dish("Wild Mushroom Risotto", "parmesan, truffle oil", "€14.00")
let mains4 = new Dish("Ember Burger", "aged cheddar, caramelized onion, house sauce", "€12.50")
let mains5 = new Dish("Grilled Chicken Souvlaki", "tzatziki, pita, roasted vegetables", "€13.00")

let mainsCategory = new Category ("Mains", [mains1, mains2, mains3, mains4, mains5]);


// MAINS
let grill1 = new Dish("Pork Chop", "apple compote, mustard jus", "€15.50")
let grill2 = new Dish("Ribeye Steak (300g)", "herb butter, grilled vegetables", "€22.00")

let grillCategory = new Category ("From the Grill", [grill1, grill2]);


// SIDES
let sides1 = new Dish("Hand-Cut Fries", "rosemary salt, garlic aioli", "€4.00")
let sides2 = new Dish("Grilled Seasonal Vegetables", "olive oil, herbs, lemon", "€5.00")
let sides3 = new Dish("Village Salad", "tomato, cucumber, olives, feta, oregano", "€6.50")

let sidesCategory = new Category ("Sides", [sides1, sides2, sides3]);


// DESSERTS
let dessert1 = new Dish("Warm Chocolate Fondant", "rosemary salt, garlic aioli", "€6.50")
let dessert2 = new Dish("Greek Yogurt & Honey", "thick strained yogurt, local honey, toasted walnuts, hint of cinnamon", "€5.00")
let dessert3 = new Dish("Seasonal Fruit Tart", "whatever's freshest that week, short crust, vanilla cream", "€6.00")

let dessertCategory = new Category ("Desserts", [dessert1, dessert2, dessert3]);


// DRINKS
let drink1 = new Dish("House Wine (glass/bottle)", "red or white, ask your server", "€4.50 / €18.00")
let drink2 = new Dish("Local Craft Beer", "rotating selection on tap", "€5.00")
let drink3 = new Dish("Fresh Lemonade", "mint, sparkling water", "€3.50")
let drink4 = new Dish("Greek Coffee", "traditional, served with a small sweet", "€2.50")

let drinkCategory = new Category ("Drinks", [drink1, drink2, drink3, drink4]);


menu.push(starterCategory, mainsCategory, grillCategory, sidesCategory, dessertCategory, drinkCategory);

menuButton.addEventListener("click", (e) => {

    const existingContentBox = document.querySelector(".content-box");
    if (existingContentBox) {
        existingContentBox.remove();
    }

    deleteLogo();

    showOverlay();

    const contentTextBox = buildHouse();

    menu.forEach((element) => {

        const category = document.createElement("header");
        category.classList.add("content-box-header");
        category.textContent = element.name;
        contentTextBox.appendChild(category);

        const catDishes = document.createElement("ul");
        catDishes.classList.add("cat-dishes");
        contentTextBox.appendChild(catDishes);

        element.dish.forEach((element) => {

            const plate = document.createElement("li");


            const plateName = document.createElement("span");
            plateName.textContent = element.name;

            const plateDescription = document.createElement("span");
            plateDescription.classList.add("plate-description");
            plateDescription.textContent = element.description;

            const platePrice = document.createElement("span");
            platePrice.classList.add("plate-price");
            platePrice.textContent = element.price;

            plate.appendChild(plateName);
            plate.appendChild(plateDescription);
            plate.appendChild(platePrice);

            catDishes.appendChild(plate);

        })

    })

});

