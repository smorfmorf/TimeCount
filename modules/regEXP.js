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

const peopleInput = form.people
const datesInput = form.dates

peopleInput.addEventListener("input", checkButton);
datesInput.addEventListener("input", checkButton);

button.disabled = true;

function checkButton() {
    const people=peopleInput.value.trim()
    const data=datesInput.value.trim()
    
    const fullName = input.value.trim();
    const words = fullName.split(/\s+/);
    const phoneValue = phone.value.trim();

    if (words.length >= 3 && phoneValue !=='' && people !=='' && data !== '') {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}
