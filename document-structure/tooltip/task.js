// Создаем один элемент подсказки и добавляем его в body
let tooltip = document.createElement("div");
tooltip.className = "tooltip"; 
document.body.appendChild(tooltip);

// Находим все ссылки с классом has-tooltip
let hasTooltip = document.querySelectorAll("a.has-tooltip");

// Добавляем обработчик всем ссылкам
hasTooltip.forEach(elem => {
    elem.addEventListener("click", function(event) {
        event.preventDefault();

        // Получаем текст подсказки из атрибута title
        let text = this.getAttribute("title");

        // Если подсказка уже видна с тем же текстом — переключаем видимость
        if (tooltip.classList.contains("tooltip_active") && tooltip.textContent === text) {
            tooltip.classList.toggle("tooltip_active");
            return;
        }

        // Задаём текст подсказки
        tooltip.textContent = text;

        // Получаем координаты ссылки для позиционирования подсказки
        const rect = this.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop;
        const scrollLeft = document.documentElement.scrollLeft;

        // Располагаем подсказку ниже ссылки с небольшим отступом
        tooltip.style.position = "absolute";
        tooltip.style.top = rect.bottom + scrollTop + 5 + "px";
        tooltip.style.left = rect.left + scrollLeft + "px";

        // Показываем подсказку
        tooltip.classList.add("tooltip_active");
    });
});
