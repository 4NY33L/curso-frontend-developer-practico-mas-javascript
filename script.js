const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const asideCartDetail = document.querySelector(".cart-detail") 
const iconShoppingCart = document.querySelector(".navbar-shopping-cart")

navbarEmail.addEventListener("click", toggleDisplayDesktopMenu)
burgerMenu.addEventListener("click", toggleDisplayMobileMenu)
iconShoppingCart.addEventListener("click", toggleDisplayAsideCartDetail)


function toggleDisplayDesktopMenu() {
    if (!asideCartDetail.classList.contains("inactive")) {
        asideCartDetail.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}

function toggleDisplayMobileMenu() {
    if (!asideCartDetail.classList.contains("inactive")) {
        asideCartDetail.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

function toggleDisplayAsideCartDetail() {
    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.add("inactive")
    }
    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive")
    }
    asideCartDetail.classList.toggle("inactive")
}