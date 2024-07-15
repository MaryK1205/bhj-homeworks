const tabs = Array.from(document.querySelectorAll(`.tab`));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));
let indexActiv = 0;

tabs.forEach((item, index) => {
    item.onclick = () => {
        tabs[indexActiv].classList.remove('tab_active');
        tabContent[indexActiv].classList.remove('tab__content_active');

        item.classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active');

        indexActiv = index;

    }

})