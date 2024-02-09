import "./style.css";

const menuBTN = document.querySelector("#hamburger");
const menu = document.querySelector("[role=menubar]");

menuBTN.addEventListener("click", openMenu);

function openMenu() {
  const isExpanded = JSON.parse(menuBTN.getAttribute("aria-expanded"));
  menuBTN.setAttribute("aria-expanded", !isExpanded);
  menu.classList.toggle("-translate-y-[180%]");
}
