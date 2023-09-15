const header__menuButton = document.querySelector(".header__menu-button");
const header__menu = document.querySelector(".header__menu");
const body = document.body;

header__menuButton.addEventListener("click", () => {
  header__menu.classList.toggle("header__menu_active");

  body.addEventListener("click", closeMenuOutsideClick);
});

function closeMenuOutsideClick({ target }) {
  //содержится ли один HTML-элемент внутри другого
  //true, это означает, что элемент event.target находится внутри (содержится) в header__menuButton
  if (!header__menuButton.contains(target)) {
    console.log("remove");
    header__menu.classList.remove("header__menu_active");
    body.removeEventListener("click", closeMenuOutsideClick);
  }
}
