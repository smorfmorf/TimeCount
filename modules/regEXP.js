const form = document.querySelector(".reservation__form");

const button = document.querySelector(".button.reservation__button");
const input = document.querySelector("#reservation__name");
const phone = document.querySelector("#reservation__phone");

input.addEventListener("input", () => {
    input.value = input.value.replace(/[^А-Яа-яЁё\s]/g, "");
    checkButton();
});
phone.addEventListener("input", () => {
    phone.value = phone.value.replace(/[^+0-9]/g, "");
    checkButton();
});

button.disabled = true;

//почему это не работает
function checkButton() {
    const fullName = input.value;
    const words = fullName.split(/\s+/);

    if (words.length >= 3) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}
