

const navigations = document.querySelectorAll('.tab__navigation');

navigations.forEach(nav => {

    const contents = nav.nextElementSibling;
    const tabs = Array.from(nav.querySelectorAll('.tab'));
    const contentItems = Array.from(contents.querySelectorAll('.tab__content'));

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {

            tabs.forEach(t => t.classList.remove('tab_active'));
            tab.classList.add('tab_active');


            contentItems.forEach(c => c.classList.remove('tab__content_active'));
            contentItems[index].classList.add('tab__content_active');
        });
    });
});

