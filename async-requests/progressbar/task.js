let progress = document.getElementById("progress");
let form = document.getElementById("form");
let fileInput = document.getElementById("file");

//вешаем обрабочик на форму отправки
form.addEventListener("submit", (e) => {

    //останавливаем стандартное поведение браузера
    e.preventDefault();

    //подготавливаем данные для отправки
    //создаем объект FormData
    let formData = new FormData();
    //выбираем первый файл
    let file = fileInput.files[0];
    //добавляем его в FormData
    formData.append("file", file);

    //Создаем запрос
    let xhr = new XMLHttpRequest();
    //Инициализируем запрос
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    //Отслеживаем процесс загрузки
    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            let progressValue = event.loaded / event.total;//вычисляем
            progress.value = progressValue;

        }
    }

    //Обрабатываем завершение загрузки
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            alert("Загрузка произошла успешно");
            progress.value = 0; //сбрасываем форму
            form.reset();
            document.querySelector(".input__wrapper-desc").textContent = "Имя файла...";
        } else {
            alert("Ошибка при загрузке файла");
        }
    }
    //Отправляем на сервер
    xhr.send(formData);
})