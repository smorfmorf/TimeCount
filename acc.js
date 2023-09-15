const travel__item = document.querySelectorAll(".travel__item");

const travel__itemTitleButton = document.querySelectorAll(
  ".travel__item-title"
);

const wrapper = document.querySelectorAll(".travel__item-text-wrapper");

//*Получаем самую большую высоту контента из <p>
let heightWrapper = 0;
wrapper.forEach((el) => {
  console.log(el.scrollHeight);
  if (heightWrapper < el.scrollHeight) {
    heightWrapper = el.scrollHeight;
    el.style.height = `${heightWrapper}px`;
    console.log("heightWrapper: ", heightWrapper);
  }
});

travel__itemTitleButton.forEach((butt, index) => {
  butt.addEventListener("click", () => {
    for (let i = 0; i < travel__item.length; i++) {
      console.log(1);
      if (index === i) {
        wrapper[i].style.height = travel__item[i].classList.contains(
          "travel__item_active"
        )
          ? ""
          : `${heightWrapper}px`;

        travel__item[i].classList.toggle("travel__item_active");
      } else {
        travel__item[i].classList.remove("travel__item_active");
        wrapper[i].style.height = "";
      }
    }
  });
});
