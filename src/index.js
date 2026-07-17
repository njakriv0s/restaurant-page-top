import "./styles.css"


const homeButton = document.getElementById("home-button");

const content = document.getElementById("content")
const glassOverlay = document.querySelector(".glass-overlay");

const logo = document.querySelector(".logo");

homeButton.addEventListener("click", (e) => {

    logo.remove();

    glassOverlay.classList.add("active");

    let contentBox = document.createElement("div");
    contentBox.classList.add("content-box");
    content.appendChild(contentBox);

    let contentBoxHeader = document.createElement("header");
    contentBoxHeader.classList.add("content-box-header");
    contentBoxHeader.textContent = "Welcome to Ember & Oak"
    contentBox.appendChild(contentBoxHeader);

    let contentBoxPara1 = document.createElement("p");
    contentBoxPara1.classList.add("content-paragraph");
    contentBoxPara1.textContent = "Where warmth meets the table.";
    contentBox.appendChild(contentBoxPara1);

    let contentBoxPara2 = document.createElement("p");
    contentBoxPara2.classList.add("content-paragraph");
    contentBoxPara2.textContent = "Tucked into the heart of Loutraki, Ember & Oak brings together simple, honest cooking and a space designed to feel like home. From slow-roasted classics to seasonal plates built around what's fresh, every dish is made to be shared — and every table is set with that in mind.";
    contentBox.appendChild(contentBoxPara2);

    let contentBoxPara3 = document.createElement("p");
    contentBoxPara3.classList.add("content-paragraph");
    contentBoxPara3.textContent = "Our dining room blends natural wood, soft lighting, and greenery for an atmosphere that's relaxed without losing its edge. Whether you're stopping in for a quiet lunch or settling in for a long dinner with friends, we want you to slow down and stay a while.";
    contentBox.appendChild(contentBoxPara3);

    let contentBoxPara4 = document.createElement("p");
    contentBoxPara4.classList.add("content-paragraph");
    contentBoxPara4.textContent = "Open daily · 12:00 to 23:00";
    contentBox.appendChild(contentBoxPara4);

    let contentBoxPara5 = document.createElement("p");
    contentBoxPara5.classList.add("content-paragraph");
    contentBoxPara5.textContent = "Venizelou 62-64, Loutraki, Corinth 20300";
    contentBox.appendChild(contentBoxPara5);

    


})