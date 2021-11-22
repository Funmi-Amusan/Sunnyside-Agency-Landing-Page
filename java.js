const nav = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-icon");

menuBtn.addEventListener("click", () => {

    if (nav.classList.contains('nav-active')) {
    nav.classList.remove('nav-active')
    } else {
        nav.classList.add ('nav-active')
    }

})