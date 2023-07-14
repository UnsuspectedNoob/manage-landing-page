const menuButton = document.querySelectorAll(".menu-button");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

let menuOpen = false;

for (let element of menuButton) {
  element.addEventListener("click", () => {
    console.log("Menu button clicked.");
    menuOpen = !menuOpen;
    console.log("menuOpen is now", menuOpen);

    for (let elem of menuButton) {
      elem.classList.toggle("active");
    }

    menu.classList.toggle("flex");
    overlay.classList.toggle("active");
  });
}
