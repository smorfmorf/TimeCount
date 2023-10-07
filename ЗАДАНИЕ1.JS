const fileNames = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const filteredFiles = fileNames.filter(fileName => /(js|jsx|ts)$/.test(fileName));
console.log(filteredFiles);


const text = "Примеры валидные: info@methed.ru, max24@mail.com, java_script@google.io Примеры не валидные: my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz";

const emailPattern = /\b\w+@[a-zA-Z]{3,}\.[a-zA-Z]{2,5}\b/g;
const validEmails = text.match(emailPattern);
console.log(validEmails);

const text2 = "Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.";

const textInBracketsPattern = /\(([^)]*)\)/g;
const matches = Array.from(text2.matchAll(textInBracketsPattern), match => match[1]);
console.log(matches);

const inputText = "Смотрите на этом сайте: https://example.com или https://google.com";

const urlPattern = /(https?:\/\/\S+)/g;
const replacedText = inputText.replace(urlPattern, '<a href="$1">$1</a>');
console.log(replacedText);