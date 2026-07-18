import { deleteLogo, showOverlay } from "./index.js"

const homeButton = document.getElementById("home-button");

homeButton.addEventListener("click", (e) => {

    deleteLogo();

    showOverlay();

    let contentBox = document.createElement("div");
    contentBox.classList.add("content-box");
    content.appendChild(contentBox);

    let contentTextBox = document.createElement("div");
    contentTextBox.classList.add("content-text-box");
    contentBox.appendChild(contentTextBox);

    let contentBoxHeader = document.createElement("header");
    contentBoxHeader.classList.add("content-box-header");
    contentBoxHeader.textContent = "Welcome to Ember & Oak"
    contentTextBox.appendChild(contentBoxHeader);

    let contentBoxPara1 = document.createElement("p");
    contentBoxPara1.classList.add("content-paragraph");
    contentBoxPara1.textContent = "Where warmth meets the table.";
    contentTextBox.appendChild(contentBoxPara1);

    let contentBoxPara2 = document.createElement("p");
    contentBoxPara2.classList.add("content-paragraph");
    contentBoxPara2.textContent = "Tucked into the heart of Loutraki, Ember & Oak brings together simple, honest cooking and a space designed to feel like home. From slow-roasted classics to seasonal plates built around what's fresh, every dish is made to be shared — and every table is set with that in mind.";
    contentTextBox.appendChild(contentBoxPara2);

    let contentBoxPara3 = document.createElement("p");
    contentBoxPara3.classList.add("content-paragraph");
    contentBoxPara3.textContent = "Our dining room blends natural wood, soft lighting, and greenery for an atmosphere that's relaxed without losing its edge. Whether you're stopping in for a quiet lunch or settling in for a long dinner with friends, we want you to slow down and stay a while.";
    contentTextBox.appendChild(contentBoxPara3);

    let contentBoxPara4 = document.createElement("p");
    contentBoxPara4.classList.add("content-paragraph");
    contentBoxPara4.textContent = "Open daily · 12:00 to 23:00";
    contentBoxPara4.id = 'hours';
    contentTextBox.appendChild(contentBoxPara4);

    let contentBoxPara5 = document.createElement("p");
    contentBoxPara5.classList.add("content-paragraph");
    contentBoxPara5.textContent = "Venizelou 62-64, Loutraki, Corinth 20300";
    contentTextBox.appendChild(contentBoxPara5);

});