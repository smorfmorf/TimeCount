const travel__item = document.querySelectorAll(".travel__item");

const travel__itemTitleButton = document.querySelectorAll(
  ".travel__item-title"
);

const wrapper = document.querySelectorAll(".travel__item-text-wrapper");

//*Получаем самую большую высоту контента из <p>
let heightWrapper = 0;
wrapper.forEach((el) => {
  console.log("el.scrollHeight: ", el.scrollHeight);
  if (heightWrapper < el.scrollHeight) {
    heightWrapper = el.scrollHeight;
    //? Установите начальную высоту всех блоков на максимальную (чтобы была анимация при 1 клике когда он открыт)
    el.style.height = `${heightWrapper}px`;
    console.log(`style:${el.style.height}`);

    console.log("heightWrapper: ", heightWrapper);
  }
});

travel__itemTitleButton.forEach((butt, index) => {
  butt.addEventListener("click", () => {
    for (let i = 0; i < travel__item.length; i++) {
      console.log(1);
      if (index === i) {
        //?если у li(travel__item) нету класса travel__item_active тогда разворачиваем <p> c высотой а иначе сворачиваем блок.
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
