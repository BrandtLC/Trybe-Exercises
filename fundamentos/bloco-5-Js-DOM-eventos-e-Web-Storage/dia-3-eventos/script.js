function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function addDays(mounth) {
  const mounthDaysList = document.querySelector("#days");

  for (let index = 0; index < mounth.length; index += 1) {
    const mounthDays = mounth[index];
    const mounthDaysListItem = document.createElement("li");
    mounthDaysListItem.innerHTML = mounthDays;

    mounthDaysList.appendChild(mounthDaysListItem);
  }
}

addDays(dezDaysList);

const buttonsCountainer = document.querySelector(".buttons-container");

function createButton() {
  const button = document.createElement("button");
  const buttonText = document.createElement("h3");
  buttonText.innerHTML = "Feriados";
  button.appendChild(buttonText);
  button.id = 'btn-holiday';

  buttonsCountainer.appendChild(button);
}

createButton();
