import loadStyle from "./style.js";
const form = document.querySelector(".reservation__form");
const price = document.querySelector(".reservation__price");

form.addEventListener("click", async ({ target }) => {
    console.log("price", price.textContent);
    const obj = {
        data_obj: form.dates.value,
        people: form.people.value,
        name: form.FIO.value,
        number: form.phone.value,
        price: price.textContent,
    };
    console.log("obj: ", obj);

    if (target.classList.contains("reservation__button")) {
        showModal(obj);
    }
});

async function showModal(obj) {
    await loadStyle("./modal.css");

    const overlay = document.createElement("div");
    const modal = document.createElement("div");
    const h2 = document.createElement("h2");
    const description = document.createElement("p");
    const data = document.createElement("p");
    const price = document.createElement("p");
    const modal_button = document.createElement("div");
    const aceptBtn = document.createElement("button");
    const changeBtn = document.createElement("button");

    overlay.classList.add("overlay", "overlay_confirm");
    modal.classList.add("modal");
    h2.classList.add("modal__title");
    h2.textContent = `Подтверждение заявки`;
    description.classList.add("modal__text");
    description.textContent = `Бронирование путешествия в Индию на ${obj.people} человек`;
    data.classList.add("modal__text");
    data.textContent = `Дата: ${obj.data_obj}`;
    price.classList.add("modal__text");
    price.textContent = `Стоимость тура ${obj.price}₽`;
    modal_button.classList.add("modal__button");
    aceptBtn.classList.add("modal__btn", "modal__btn_confirm");
    aceptBtn.textContent = `Подтверждаю`;
    changeBtn.classList.add("modal__btn", "modal__btn_edit");
    changeBtn.textContent = `Изменить данные`;

    overlay.append(modal);
    modal_button.append(aceptBtn, changeBtn);
    modal.append(h2, description, data, price, modal_button);

    document.body.append(overlay);

    changeBtn.addEventListener("click", () => {
        overlay.remove();
    });

    aceptBtn.addEventListener("click", () => {
        // overlay.remove();
        fetch("https://jsonplaceholder.typicode.com/posts/", {
            method: "POST",

            body: JSON.stringify({
                title: "foo",
                body: "Отправили данные",
            }),

            headers: {
                "Content-type": "application/json",
            },
        });

        form.dates.disabled = true;
        form.people.disabled = true;
        form.FIO.disabled = true;
        form.phone.disabled = true;
        overlay.remove();
    });
}
