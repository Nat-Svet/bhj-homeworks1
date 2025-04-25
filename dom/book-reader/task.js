const bookControl = document.querySelector(".book__control.book__control_font-size");
const items = bookControl.querySelectorAll(".font-size");
const book = document.querySelector(".book");

items.forEach(item => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    items.forEach(el => el.classList.remove("font-size_active"));
    item.classList.add("font-size_active");

    book.classList.remove("book_fs-small", "book_fs-big");

    if (item.classList.contains("font-size_small")) {
      book.classList.add("book_fs-small");
    } else if (item.classList.contains("font-size_big")) {
      book.classList.add("book_fs-big");
    }
  });
});
