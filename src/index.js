import "./styles.css"
import "./home.js"
import "./menu.js"
import "./about.js"

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

export { deleteLogo, showLogo, showOverlay, hideOverlay, content };