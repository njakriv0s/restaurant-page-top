import { deleteLogo, showLogo, showOverlay, hideOverlay, content, buildHouse } from "./index.js"
import foodImg from "./food.jpeg"
import chefImg from "./chef.jpeg"
// import closeImg from "./close.png"

const aboutButton = document.getElementById("about-button");



aboutButton.addEventListener("click", (e) => {

    const existingContentBox = document.querySelector(".content-box");
    if (existingContentBox) {
        existingContentBox.remove();
    }

    deleteLogo();

    showOverlay();

    const contentTextBox = buildHouse();

    let contentBoxHeader = document.createElement("header");
    contentBoxHeader.classList.add("content-box-header");
    contentBoxHeader.textContent = "About Ember & Oak"
    contentTextBox.appendChild(contentBoxHeader);

    let contentBoxPara1 = document.createElement("p");
    contentBoxPara1.classList.add("content-paragraph");
    contentBoxPara1.textContent = "Ember & Oak started with a simple idea: food tastes better when it's made without shortcuts, and shared without rush.";
    contentTextBox.appendChild(contentBoxPara1);

    let contentBoxPara2 = document.createElement("p");
    contentBoxPara2.classList.add("content-paragraph");
    contentBoxPara2.textContent = "We source what's fresh and let it lead the menu — vegetables from nearby growers, fish brought in daily, meat slow-cooked the way it should be. Nothing overworked, nothing hiding behind a sauce. Just good ingredients, treated with care.";
    contentTextBox.appendChild(contentBoxPara2);

    let foodImage = document.createElement("img");
    foodImage.classList.add("about-photo");
    foodImage.src = foodImg;
    contentTextBox.appendChild(foodImage);

    let contentBoxPara3 = document.createElement("p");
    contentBoxPara3.classList.add("content-paragraph");
    contentBoxPara3.textContent = "Behind the kitchen is a chef who believes a good meal starts long before it reaches the table — in choosing the right grower, waiting for the right season, and never rushing a dish that needs time. That same patience shows up in every plate that leaves the kitchen, from a simple soup to the slow-roasted lamb.";
    contentTextBox.appendChild(contentBoxPara3);

    let chefImage = document.createElement("img");
    chefImage.classList.add("about-photo");
    chefImage.src = chefImg;
    contentTextBox.appendChild(chefImage);

    let contentBoxPara4 = document.createElement("p");
    contentBoxPara4.classList.add("content-paragraph");
    contentBoxPara4.textContent = "The space is built the same way — warm wood, soft light, greenery, a few quiet corners for a long conversation. We wanted somewhere that feels less like a restaurant and more like the kind of kitchen you'd actually want to be invited into.";
    contentTextBox.appendChild(contentBoxPara4);

    let contentBoxPara5 = document.createElement("p");
    contentBoxPara5.classList.add("content-paragraph");
    contentBoxPara5.textContent = "Whether you're here for a quick lunch or a slow evening with people you love, we're glad you're at our table.";
    contentTextBox.appendChild(contentBoxPara5);

});






