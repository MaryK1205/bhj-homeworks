let dead = document.querySelector('#dead');
let lost = document.querySelector('#lost');

let counterDead = 0;
let counterLost = 0;




for (let index = 1; index < 10; index++) {

    function getHole(index) {
        let holeClick = document.querySelector(`#hole${index}`);
        return holeClick;
    }

    let hole = getHole(index);

    hole.onclick = function () {
        if (hole.className.includes("hole_has-mole")) {
            counterDead++;
            dead.textContent = `${counterDead}`

        } else {
            counterLost++;
            lost.textContent = `${counterLost}`
        }

        if (counterDead === 10) {
            alert("Вы победили!");
            counterDead = 0;
            counterLost = 0;

        } else if (counterLost === 5) {
            alert("Вы проиграли");
            counterDead = 0;
            counterLost = 0;
        }
    }
}


