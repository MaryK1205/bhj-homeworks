const dropItem = document.querySelector(`.dropdown__value`);
const dropList = document.querySelector(`.dropdown__list`)
let dropItemArray = Array.from(document.querySelectorAll('.dropdown__link'));


dropItem.addEventListener('click', () => dropList.classList.add('dropdown__list_active'));

function dropItemArrayActiv(e) {
    console.log('Привет');

}

dropItemArray[1].addEventListener('click', dropItemArrayActiv);



