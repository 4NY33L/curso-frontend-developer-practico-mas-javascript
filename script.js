const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

navbarEmail.addEventListener("click", toggleDisplayDesktopMenu)
burgerMenu.addEventListener("click", toggleDisplayMobileMenu)


function toggleDisplayDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
}

function toggleDisplayMobileMenu() {
    mobileMenu.classList.toggle("inactive")
}