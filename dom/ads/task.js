const rotator = document.querySelector(".rotator");
const rotatorCase = rotator.querySelectorAll("div");
const rotatorCaseArray = Array.from(rotatorCase);

let currentIndex = 0;

setInterval(() => {
    rotatorCaseArray.forEach(elem => elem.classList.remove("rotator__case_active"));
    rotatorCaseArray[currentIndex].classList.add("rotator__case_active");
    currentIndex = (currentIndex + 1) % rotatorCaseArray.length;
}, 1000);
