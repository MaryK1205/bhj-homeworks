const rotatoArray = Array.from(document.querySelectorAll('.rotator__case'));
let indexActiv = 0;

function timer() {
    if (indexActiv < 5) {
        rotatoArray[indexActiv].classList.remove('rotator__case_active');
        rotatoArray[indexActiv + 1].classList.add('rotator__case_active');
        indexActiv++;

    }
    else {
        rotatoArray[indexActiv].classList.remove('rotator__case_active');
        indexActiv = 0;
        rotatoArray[indexActiv].classList.add('rotator__case_active');



    }
};
setInterval(timer, 1000);






