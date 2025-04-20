const dropdown = document.querySelector('.dropdown');
const dropdownValue = dropdown.querySelector('.dropdown__value');
const dropdownList = dropdown.querySelector('.dropdown__list');
const dropdownItems = dropdown.querySelectorAll('.dropdown__item');
const dropdownLink = dropdown.querySelectorAll("dropdown__link");


dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedText = item.querySelector('.dropdown__link').textContent;
        dropdownValue.textContent = selectedText;
        dropdownList.classList.remove('dropdown__list_active');
    })

})


