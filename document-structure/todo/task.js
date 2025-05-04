let tasksList = document.getElementById("tasks__list");
let taskInput = document.getElementById("task__input");
let button = document.getElementById("tasks__add");

button.addEventListener("click", function (event) {
    event.preventDefault();
let inputValue = taskInput.value.trim();
if (inputValue === "") return;
    let task = document.createElement("div");
    task.classList.add("task");
    tasksList.appendChild(task);

    let taskTitle = document.createElement("div");
    taskTitle.className = "task__title";
    taskTitle.textContent = taskInput.value;   
    task.insertAdjacentElement("afterBegin", taskTitle);

    let taskRemove = document.createElement("a");
    taskRemove.href = "#";
    taskRemove.className = "task__remove";
    taskRemove.innerHTML = "&times;";
    task.insertAdjacentElement("beforeEnd", taskRemove);

    taskRemove.addEventListener("click", function(event) {
        task.remove();
    })

taskInput.value = "";
taskInput.focus();
   
})