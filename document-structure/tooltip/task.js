
//находим все ссылки с классом has-tooltip
let hasTooltip = document.querySelectorAll("a.has-tooltip");
//для каждой такой ссылки  - обработчик клика
hasTooltip.forEach(elem => {
    elem.addEventListener("click", function (event) {
        event.preventDefault();
        //создаем html элемент
        let tooltip = document.createElement("div");
        tooltip.className = "tooltip tooltip_active";
        tooltip.textContent = this.getAttribute("title");
        //добавляем html элемент после tooltip
        this.insertAdjacentElement("afterend", tooltip);
        this._tooltip = tooltip;
        //удаляем предыдущую подсказку
        let activeTooltip = document.querySelector('.tooltip_active');
        if (activeTooltip && activeTooltip !== this._tooltip) {
            activeTooltip.classList.remove('tooltip_active');
            activeTooltip.remove();
        }
        //позийионируем подсказку
        let rect = this.getBoundingClientRect();
        //прокрутка по вертикали и по горизонтали
        let scrollTop = document.documentElement.scrollTop;
        let scrollLeft = document.documentElement.scrollLeft;
        //устанавливаем координаты подсказки
        let top = rect.bottom + scrollTop + 5;
        let left = rect.left + scrollLeft;
        //задаем position absolute, чтобы подсказка оставалась рядом со ссылкой
        tooltip.style.position = 'absolute';
        tooltip.style.top = top + 'px';
        tooltip.style.left = left + 'px';

    })

})