
const signin = document.getElementById("signin");
const signinForm = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userIdSpan = document.getElementById("user_id");

//localStorage.clear(); //использовала для проверки

//показываем форму авторизации и скрываем приветствие
function showSignin() {
    signin.classList.add("signin_active");
    welcome.classList.remove("welcome_active");
}

//показываем приветствие и скрываем форму авторизации
function showWelcome(userId) {
    userIdSpan.textContent = userId;
    welcome.classList.add("welcome_active");
    signin.classList.remove("signin_active");
}

//проверяем, есть ли сохраненный пользователь
const savedUserId = localStorage.getItem("userId");
if (savedUserId) {
    showWelcome(savedUserId);
} else {
    showSignin();
}

//вешаем обработчик на форму
signinForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //создаем объект formData
    const formData = new FormData(signinForm);

    //создаем запрос
    let xhr = new XMLHttpRequest();

    //инициализируем запрос
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

    // Указываем что ответ ожидается в формате JSON
    xhr.responseType = "json";

    //работаем с результатами ответа сервера
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = xhr.response;

            if (response.success) {
                //сохраняем в local storage
                localStorage.setItem("userId", response.user_id);
                showWelcome(response.user_id);
                signinForm.reset();
            } else {
                alert("Неверный логин/пароль");
                signinForm.reset();
            }
        }
    };

    xhr.send(formData);

});


