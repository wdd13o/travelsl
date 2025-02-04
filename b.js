document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.querySelector("nav ul");

    // Toggle the navigation menu on click
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});