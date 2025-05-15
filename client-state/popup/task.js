// Функция для установки cookie
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

// Функция для получения cookie
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}

const modal = document.getElementById("subscribe-modal");
const closeBtn = modal.querySelector(".modal__close");

// Проверяем, есть ли cookie о закрытии окна
if (getCookie("subscribeModalClosed") === "true") {
    modal.classList.remove("modal_active"); // скрываем окно
} else {
    modal.classList.add("modal_active"); // показываем окно
}

// Обработчик закрытия
closeBtn.addEventListener("click", () => {
    modal.classList.remove("modal_active");
    setCookie("subscribeModalClosed", "true", 365); // сохраняем cookie на 1 год
});
