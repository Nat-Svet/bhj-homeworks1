const reveals = document.querySelectorAll(".reveal");
function visible(elem) {
    reveals.forEach(elem => {
        const top = elem.getBoundingClientRect().top;
        const bottom = elem.getBoundingClientRect().bottom;

        if (bottom > 0 && top < window.innerHeight) {

            elem.classList.add("reveal_active")
        }
    })
}

window.addEventListener("scroll", visible);
