const name = prompt("Adınızı girin");

document.querySelector(".name").innerHTML = name;

function showTime() {
  var date = new Date();

  let dayNumber = date.getDay();
  let dayName;
  switch (dayNumber) {
    case 0:
      dayName = "Pazar";
      break;
    case 1:
      dayName = "Pazartesi";
      break;
    case 2:
      dayName = "Salı";
      break;
    case 3:
      dayName = "Çarşamba";
      break;
    case 4:
      dayName = "Perşembe";
      break;
    case 5:
      dayName = "Cuma";
      break;
    case 6:
      dayName = "Cumartesi";
      break;
    default:
      dayName = "";
  }

  document.getElementById("dayName").innerHTML = dayName;

  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (hour == 0) {
    hour == 12;
  }

  if (hour > 12) {
    hour = hour - 12;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var time = hour + ":" + minutes + ":" + seconds;

  document.querySelector(".time").textContent = time;
  setTimeout(showTime, 1000);
}

showTime();

