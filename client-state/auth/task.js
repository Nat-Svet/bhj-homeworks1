const signinForm = document.getElementById("signin__form");

//вешаем обработчик на форму
signinForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //создаем объект formData
    const formData = new FormData(signinForm);

    //создаем запрос
    let xhr = new XMLHttpRequest();

    //инициализируем запрос
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

    //работаем с результатами ответа сервера
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);

            if (response.success) {
                const userIdSpan = document.getElementById("user_id");
                userIdSpan.textContent = response.user_id;

                //сохраняем в local storage
                localStorage.setItem("userId", response.user_id);

                // вызываем окна
                const welcome = document.getElementById("welcome");
                welcome.classList.add("welcome_active");
            } else {
                alert("Неверный логин/пароль");
            }
        }
    };
//отправляем запрос
    xhr.send(formData);
});
