let numberSeconds = 60;
const timer = document.getElementById("timer");
const countSeconds = setInterval(function() {
  const hours = String(Math.floor(numberSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((numberSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(numberSeconds % 60).padStart(2, "0");
  timer.textContent = hours + ":" + minutes + ":" + seconds;
  numberSeconds--;
  if (numberSeconds < 0) {
    clearInterval(countSeconds);
    alert("Вы победили в конкурсе!");
  }
}, 1000)
