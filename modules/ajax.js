const form = document.querySelector(".reservation__form");

const URL = "https://jsonplaceholder.typicode.com/posts/";

function addPost(URL, { method = "POST", callback, body = {}, headers }) {
    const xhr = new XMLHttpRequest();

    xhr.open(method, URL);

    if (headers) {
        for (const [key, value] of Object.entries(headers)) {
            xhr.setRequestHeader(key, value);
        }
    }

    xhr.addEventListener("load", () => {
        if (xhr.status < 200 || xhr.status >= 300) {
            callback(new Error("Ошибка запроса"));
            return;
        }

        const data = JSON.parse(xhr.response);
        callback(null, data);
    });

    xhr.addEventListener("error", () => {
        console.warn("error");
        callback(new Error("Ошибка URL"));
    });

    xhr.send(JSON.stringify(body));
}

const input_name = document.querySelector("#reservation__name");
const input_number = document.querySelector("#reservation__phone");

input_name.addEventListener("input", () => {
    console.log(input_name.value);
});

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     addPost(URL, {
//         method: "POST",
//         body: {
//             data: form.dates.value,
//             people: form.people.value,
//             name: input_name.value,
//             number: input_number.value,
//         },
//         callback(err, data) {
//             if (err) {
//                 form.textContent = err.message;
//             }

//             console.log("callback", data);
//             // form.textContent = `заявка отправлена №${data.id}`;
//         },
//         header: {
//             "Content-Type": "application/json",
//         },
//     });
// });

const form2 = document.querySelector(".footer__form");
const input_footer = document.querySelector(".footer__input");

const h2 = document.querySelector(".footer__title.footer__form-title");
const p = document.querySelector(".footer__text");

form2.addEventListener("submit", (event) => {
    event.preventDefault();

    addPost(URL, {
        method: "POST",
        body: {
            email: input_footer.value,
        },
        callback(err, data) {
            if (err) {
                form2.textContent = err.message;
            }

            console.log("callback", data);
            h2.textContent = "Ваша заявка успешно отправлена";
            p.textContent = `наши менеджеры свяжутся с вами в тчении 3-х дней`;
        },
        header: {
            "Content-Type": "application/json",
        },
    });
});
