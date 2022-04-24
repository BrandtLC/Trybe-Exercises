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

function createElement(where, type, typeText, text, id) {
  const button = document.createElement(type);
  const buttonText = document.createElement(typeText);
  buttonText.innerHTML = text;
  button.appendChild(buttonText);
  button.id = id;

  where.appendChild(button);
}

createElement(buttonsCountainer, "button", "h3", "Feriados", "btn-holiday");

function makeHolidays(feriados) {
  let listElement = document.querySelectorAll(".days-container #days li");
  for (days of feriados) {
    listElement[days].className = "holiday";
  }
}
const feriadosDez = [16, 25, 26, 32];
makeHolidays(feriadosDez);

const holidayButton = document.querySelector("#btn-holiday");

holidayButton.addEventListener("click", function () {
  const holidays = document.getElementsByClassName("holiday");
  for (index = 0; index < holidays.length; index += 1) {
    const holidayDay = holidays[index];
    if (
      holidayDay.style.cssText === "background-color: rgb(238, 238, 238);" ||
      holidayDay.style.cssText === ""
    ) {
      holidayDay.style.backgroundColor = "#dce73e";
    } else {
      holidayDay.style.backgroundColor = "rgb(238,238,238)";
    }
  }
});


createElement(buttonsCountainer, "button", "h3", "Sexta-feira", "btn-friday");

const fridayButton = document.querySelector("#btn-friday");

fridayButton.addEventListener("click", function () {
  const fridays = document.querySelectorAll("#days li");
  for (index = 5; index < fridays.length; index += 7) {
    if (fridays[index].innerText == "Sextou!!!") {
      fridays[index].innerText = dezDaysList[index];
    } else {
      fridays[index].innerText = "Sextou!!!";
    }
  }
});


let listElement = document.querySelectorAll(".days-container #days li");

// console.log(listElement[0].innerHTML)
// listElement[0].addEventListener("mouseover",function() {
//   listElement[0].style.fontSize = "35px";
// })

// console.log(listElement[0].innerHTML)
// listElement[0].addEventListener("mouseleave",function() {
//   listElement[0].style.fontSize = "20px";
// })
function overLeave () {
  const listElement = document.querySelectorAll(".days-container #days li");
  for(let index = 0; index < listElement.length; index += 1){
    listElement[index].addEventListener("mouseover",function() {
      event.target.style.fontSize = "25px";
    })
    listElement[index].addEventListener("mouseleave",function() {
      event.target.style.fontSize = "20px";
    })
  }
}
overLeave ()