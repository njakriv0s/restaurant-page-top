import "./styles.css"
import "./home.js"
import "./menu.js"
import "./about.js"
import closeImg from "./close.png"

const content = document.getElementById("content")
const glassOverlay = document.querySelector(".glass-overlay");

const logo = document.querySelector(".logo");

function deleteLogo() {
    logo.classList.add("hidden")
};

function showLogo() {
    logo.classList.remove("hidden");
}

function showOverlay() {
    glassOverlay.classList.add("active");
};

function hideOverlay() {
    glassOverlay.classList.remove("active");
};

function buildHouse() {

    let contentBox = document.createElement("div");
    contentBox.classList.add("content-box");
    content.appendChild(contentBox);

    let closeButton = document.createElement("img");
    closeButton.classList.add("close-button");
    closeButton.src = closeImg;
    contentBox.appendChild(closeButton);

    closeButton.addEventListener("click", (e) => {
        contentBox.remove();
        hideOverlay();
        showLogo();
    })

    let contentTextBox = document.createElement("div");
    contentTextBox.classList.add("content-text-box");
    contentBox.appendChild(contentTextBox);

    // let closeButton = document.createElement("img");
    // closeButton.classList.add("close-button");
    // closeButton.src = closeImg;
    // contentTextBox.appendChild(closeButton);

    return contentTextBox;

};

export { deleteLogo, showLogo, showOverlay, hideOverlay, buildHouse, content };