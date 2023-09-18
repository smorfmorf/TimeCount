fetch("db.json")
    .then((data) => data.json())
    .then((res) => console.log(res));

const select = document.querySelectorAll(".reservation__option");
console.log("select: ", select[0]);

async function fetchDB() {
    const data = await fetch("db.json");
    const res = await data.json();

    return res;
}

const selectDate = document.querySelector("#reservation__date");

async function renderOptions() {
    const data = await fetchDB();
    console.log("data: ", data);

    data.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.date;
        option.innerHTML = item.date;
        selectDate.append(option);
    });
}
renderOptions();

const selectPeople = document.querySelector("#reservation__people");
selectDate.addEventListener("click", async () => {
    const selectedDate = selectDate.value;
    const data = await fetchDB();

    const dataItem = data.find((item) => item.date === selectedDate);
    if (dataItem) {
        selectPeople.innerHTML = ""; // Очищаем селектор количества людей
        //* цикл чтобы пройтись от мин до макс людей. и на каждую создать опцию
        for (
            let i = dataItem["min-people"]; //мин кол-во людей
            i <= dataItem["max-people"]; //макс кол-во людей
            i++
        ) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            selectPeople.append(option);
        }
    }
    PriceAndDate();

    // 24 ноября - 7 декабря, 4 человека
});

selectPeople.addEventListener("click", PriceAndDate);

async function PriceAndDate() {
    const date = document.querySelector(".reservation__data");
    const price = document.querySelector(".reservation__price");

    const data = await fetchDB();

    const selectedDate = selectDate.value;
    const selectedPeople = selectPeople.value;

    const dataItem = data.find((item) => item.date === selectedDate);
    console.log("dataItem: ", dataItem);

    date.textContent = dataItem.date + ", " + selectedPeople + " человек ";
    price.textContent = dataItem.price * selectedPeople + "₽";
}
