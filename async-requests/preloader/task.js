let loader = document.getElementById("loader");
let items = document.getElementById("items"); 

//создаем запрос
let xhr = new XMLHttpRequest();

//инициализируем запрос
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

//вешаем обработчик
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        //отключаем анимацию
        loader.classList.remove("loader_active");
        
        //заводим данные из ответа
        let data = JSON.parse(xhr.responseText);
        let valute = data.response.Valute;

        // Очищаем контейнер, чтобы создавать в нем новые items для каждой валюты
        items.innerHTML = "";

        for (let key in valute) {
            let currency = valute[key];

            // Создаем новый элемент item для каждой валюты
            let item = document.createElement("div");
            item.className = "item";

            //создаем код валюты
            let itemCode = document.createElement("div");
            itemCode.className = "item__code";
            itemCode.textContent = currency.CharCode;

            //создаем значение валюты
            let itemValue = document.createElement("div");
            itemValue.className = "item__value";
            itemValue.textContent = currency.Value;

            //создаем руб.
            let itemCurrency = document.createElement("div");
            itemCurrency.className = "item__currency";
            itemCurrency.textContent = "руб.";

            //добавляем  и делаем матрешку
            item.append(itemCode);
            item.append(itemValue);
            item.append(itemCurrency);
            items.append(item);
        }
    }
};

//отправляем запрос
xhr.send();


