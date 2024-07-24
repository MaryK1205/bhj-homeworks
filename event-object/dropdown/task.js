const dropValue = document.querySelector(`.dropdown__value`);
const dropList = document.querySelector(`.dropdown__list`)
let dropItemArray = Array.from(document.querySelectorAll('.dropdown__item'));



dropValue.addEventListener('click', () => dropList.classList.toggle('dropdown__list_active'));


dropItemArray.forEach((item, index) => {
    item.onclick = () => {
        dropList.classList.remove('dropdown__list_active');
        dropValue.textContent = dropItemArray[index].textContent
        return false;
    }

}
)



