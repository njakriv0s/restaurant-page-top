import "./styles.css"
import "./home.js"

const content = document.getElementById("content")
const glassOverlay = document.querySelector(".glass-overlay");

const logo = document.querySelector(".logo");

function deleteLogo() {
    logo.remove();
};

function showOverlay() {
    glassOverlay.classList.add("active");
};

export { deleteLogo, showOverlay };


const menuButton = document.getElementById("menu-button") 

const menu = [];



menuButton.addEventListener("click", (e) => {

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
    contentBoxHeader.textContent = "Starters"
    contentTextBox.appendChild(contentBoxHeader);

})