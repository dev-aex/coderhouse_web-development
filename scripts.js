const NAV_LINKS_CONTAINER = document.getElementById("nav-wraper");
const NAV_BURGER = document
  .getElementById("nav-burger")
  .addEventListener("click", () => {
    NAV_LINKS_CONTAINER.classList.remove("hidden");
    NAV_LINKS_CONTAINER.classList.add("flex");
  });
  const NAV_CLOSE = document
  .getElementById("nav-close")
  .addEventListener("click", () => {
    NAV_LINKS_CONTAINER.classList.remove("flex");
    NAV_LINKS_CONTAINER.classList.add("hidden");
  });


