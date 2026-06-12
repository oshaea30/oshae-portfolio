const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector("[data-nav-links]");

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  links.classList.toggle("is-open");
});
