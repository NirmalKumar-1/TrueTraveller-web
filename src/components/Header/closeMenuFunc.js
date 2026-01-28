const closeMenu = () => {
  const toggler = document.querySelector(".navbar-toggler");
  const menu = document.getElementById("navbarNav");

  if (menu.classList.contains("show")) {
    toggler.click();
    toggler.classList.add("collapsed");
    toggler.setAttribute("aria-expanded", "false");
  }
};

export default closeMenu;
