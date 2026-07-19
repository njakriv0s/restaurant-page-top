import "./styles.css"
import "./home.js"
import "./menu.js"

const content = document.getElementById("content")
const glassOverlay = document.querySelector(".glass-overlay");

const logo = document.querySelector(".logo");

function deleteLogo() {
    logo.remove();
};

function showOverlay() {
    glassOverlay.classList.add("active");
};

export { deleteLogo, showOverlay, content };


