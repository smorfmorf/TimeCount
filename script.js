// function timer(deadline) {
//   const daysBlock = document.querySelector(".timer__count_days");
//   const hoursBlock = document.querySelector(".timer__count_hours");
//   const minBlock = document.querySelector(".timer__count_minutes");

//   function getTimeR() {
//     const dateStop = new Date(deadline).getTime();
//     const dateNow = Date.now();

//     const Time = dateStop - dateNow;
//     console.log("Time: ", Time);

//     const minutes = Math.floor((Time / 1000 / 60) % 60);
//     const hours = Math.floor(Time / 1000 / 60 / 60);
//     const day = Math.floor(Time / 1000 / 60 / 60 / 24);

//     return { Time, minutes, hours, day };
//   }

//   function start() {
//     const timer = getTimeR();
//     const { Time, minutes, hours, day } = timer;

//     // Функция для форматирования числа как двузначного текста
//     function formatNumber(number) {
//       return number < 10 ? `0${number}` : `${number}`;
//     }

//     daysBlock.textContent = formatNumber(day);
//     hoursBlock.textContent = formatNumber(hours);
//     minBlock.textContent = formatNumber(minutes);

//     const id = setTimeout(start, 1000);
//     const hero__text = document.querySelector(".hero__text");
//     const hero__timer = document.querySelector(".hero__timer");

//     if (Time <= 0) {
//       clearTimeout(id);
//       daysBlock.textContent = "00";
//       hoursBlock.textContent = "00";
//       minBlock.textContent = "00";
//       hero__text.remove();
//       hero__timer.remove();
//     }
//   }
//   start();
// }

// // Получить элемент с классом "timer"
// const timerElement = document.querySelector(".timer");

// // Установить значение атрибута "data-deadline" через свойство "dataset" (замените "2023-09-15" на вашу дату и время дедлайна)
// const deadline = (timerElement.dataset.deadline = "2023.09.15");
// // Теперь дедлайн установлен в атрибуте "data-deadline" элемента с классом "timer"

// timer(deadline);

function timer(deadline) {
  function updateTimer() {
    const timerElements = document.querySelectorAll(".timer__count");

    const dateStop = new Date(deadline).getTime();
    const dateNow = Date.now();
    const timeRemaining = dateStop - dateNow;

    if (timeRemaining <= 0) {
      timerElements.forEach((element) => (element.textContent = "00"));
      return;
    }

    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    // Функция для склонения слов в зависимости от числа
    function pluralizeWord(number, one, two, five) {
      if (number % 10 === 1 && number % 100 !== 11) {
        return one;
      } else if (
        [2, 3, 4].includes(number % 10) &&
        ![12, 13, 14].includes(number % 100)
      ) {
        return two;
      } else {
        return five;
      }
    }

    const dayWord = pluralizeWord(days, "день", "дня", "дней");
    const hourWord = pluralizeWord(hours, "час", "часа", "часов");
    const minuteWord = pluralizeWord(minutes, "минута", "минуты", "минут");

    // Обновляем числа и слова в каждом блоке
    timerElements[0].textContent = days.toString();
    timerElements[1].textContent = hours.toString().padStart(2, "0");
    timerElements[2].textContent = minutes.toString().padStart(2, "0");
    const timer__units = document.querySelectorAll(".timer__units");

    timer__units[0].textContent = dayWord;
    timer__units[1].textContent = hourWord;
    timer__units[2].textContent = minuteWord;
  }

  // Запустить обновление таймера каждую секунду
  setInterval(updateTimer, 1000);

  // Вызываем обновление таймера, чтобы начать отсчет
  updateTimer();
}

export const TimeCount = {
  init: () => {
    document.addEventListener("DOMContentLoaded", function () {
      // Получаем значение дедлайна из атрибута "data-timer-deadline"
      const timerElement = document.querySelector(".hero__timer");
      const deadline = (timerElement.dataset.deadline = "2023.09.15");
      // const deadline = timerElement.getAttribute("data-timer-deadline");

      // Запускаем таймер
      timer(deadline);
    });
  },
};
