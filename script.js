const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const asideCartDetail = document.querySelector(".cart-detail") 
const iconShoppingCart = document.querySelector(".navbar-shopping-cart")
const productCardContainer = document.querySelector(".cards-container")
const productList = [
    {
        name: "Audífonos",
        price: 35,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: "Silla Gamer",
        price: 400,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: "Audífonos",
        price: 35,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: "Audífonos",
        price: 35,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: "Audífonos",
        price: 35,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: "Audífonos",
        price: 35,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
]

navbarEmail.addEventListener("click", toggleDisplayDesktopMenu)
burgerMenu.addEventListener("click", toggleDisplayMobileMenu)
iconShoppingCart.addEventListener("click", toggleDisplayAsideCartDetail)

renderProducts(productList)

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

function renderProducts(arr) {
    for (product of arr) {
        const productCard = `<div class="product-card">
                <img src=${product.img}
                    alt=${product.name}>
                <div class="product-info">
                    <div>
                        <p>$${product.price}</p>
                        <p>${product.name}</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
        productCardContainer.insertAdjacentHTML("beforeend", productCard)
    }
}