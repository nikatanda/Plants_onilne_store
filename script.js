const burgerMenu = document.getElementById("burgerMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileNav = document.getElementById("mobileNav");
const navOverlay = document.getElementById("navOverlay");

function toggleMenu(open) {
  const isOpen = open ?? !mobileNav.classList.contains("open");
  mobileNav.classList.toggle("open", isOpen);
  navOverlay.classList.toggle("open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

burgerMenu.addEventListener("click", () => toggleMenu(true));
closeMenu.addEventListener("click", () => toggleMenu(false));
navOverlay.addEventListener("click", () => toggleMenu(false));

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    toggleMenu(false);
  }
});
