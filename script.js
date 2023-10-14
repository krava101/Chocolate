// Open % close mobile menu
var openMobileMenu = document.getElementById("open-menu-btn");
var closeMobileMenu = document.querySelectorAll(".close-menu-btns");
var mobileMenu = document.getElementById("mobile-menu");

openMobileMenu.addEventListener("click", function () {
    mobileMenu.classList.add("is-open")
});

closeMobileMenu.forEach(function (closeMenu) {
    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open")
    })
})



// Open & close modal window
var openModalBtn = document.getElementById("reviews-btn");
var closeModalBtn = document.getElementById("modal-close-btn");
var backdrop = document.getElementById("backdrop");

openModalBtn.addEventListener("click", function() {
    backdrop.classList.add("is-open");
});

closeModalBtn.addEventListener("click", function () {
    backdrop.classList.remove("is-open")
})