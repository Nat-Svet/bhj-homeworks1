
const editor = document.getElementById("editor");

window.addEventListener("load", () => {
    const savedText = localStorage.getItem("storageKey");
    editor.value = savedText;
});

editor.addEventListener("input", () => {
    localStorage.setItem("storageKey", editor.value);
});
