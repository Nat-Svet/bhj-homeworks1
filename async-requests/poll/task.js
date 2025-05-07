let pollQuestion = document.getElementById("poll__title");
let pollAnswers = document.getElementById("poll__answers");

//создаем запрос
let xhr = new XMLHttpRequest();

//инициализируем запрос
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

//вешаем обработчик
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {

        //заводим ответ
        let response = JSON.parse(xhr.responseText);

        //прикрепляем вопрос
        pollQuestion.textContent = response.data.title;

        //создаем отдельные кнопки
        response.data.answers.forEach(answerText => {

            let pollAnswer = document.createElement("button");
            pollAnswer.className = "poll__answer";
            pollAnswer.textContent = answerText;
            //задаем стили, соответствующие классу poll__answer
            pollAnswer.style.backgroundColor = "white";
            pollAnswer.style.color = "black";
            pollAnswer.style.border = "1px solid black";
            pollAnswer.style.borderRadius = "8px";
            pollAnswer.style.marginRight = "5px";

            //вкладываем варианты ответов в контейнер ответов
            pollAnswers.append(pollAnswer);

            //вешаем обработчик на кнопку
            pollAnswer.addEventListener("click", () => {
                //добавляем класс
                pollAnswer.classList.add("poll__answer_active");
                //задаем стили, соответствующие классу poll__answer_active
                pollAnswer.style.backgroundColor = "blue";
                pollAnswer.style.color = "white";
                //даем время примениться стилям
                setTimeout(() => {
                    alert("Спасибо, Ваш голос засчитан!");
                    pollAnswer.classList.remove("poll__answer_active");
                    pollAnswer.style.backgroundColor = "white";
                    pollAnswer.style.color = "black";
                }, 1000);

            })
        })
    }
}

xhr.send();



