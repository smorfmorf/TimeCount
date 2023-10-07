const form = document.querySelector(".reservation__form");

const input = document.querySelector("#reservation__name");
const phone = document.querySelector("#reservation__phone");

input.addEventListener("input", () => {
    input.value = input.value.replace(/[^А-Яа-яЁё\s]/g, "");
});

phone.addEventListener("input", () => {
    phone.value = phone.value.replace(/[^+0-9]/g, "");
});
