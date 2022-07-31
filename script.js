const name = prompt("Adınızı girin");

document.querySelector(".name").innerHTML = name;

const date = new Date();

let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let dayNumber = date.getDay();
let dayName;
switch (dayNumber) {
  case 0:
    dayName = "Pazartesi";
    break;
  case 1:
    dayName = "Salı";
    break;
  case 2:
    dayName = "Çarşamba";
    break;
  case 3:
    dayName = "Perşembe";
    break;
  case 4:
    dayName = "Cuma";
    break;
  case 5:
    dayName = "Cumartesi";
    break;
  case 6:
    dayName = "Pazar";
    break;
  default:
    dayName = "";
}

alert(dayNumber);