let counter = 0;
let cookieSize = true;

const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

function updateCounter() {  
clickerCounter.textContent = counter;
counter ++;
if (cookieSize) {
    cookie.width = 100;
} else {
    cookie.width = 200;
}
   cookieSize = !cookieSize;
    
}
    cookie.onclick = updateCounter;