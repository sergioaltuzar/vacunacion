
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");

bShowMobileLinks.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("show");
  });
