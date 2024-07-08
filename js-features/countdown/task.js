const status1 = document.getElementById('timer');

let i = 58;
setInterval(function timer() {
    if (i > 0) {
        status1.textContent = `${i}`
        i--;
    }
    else {
        alert('Вы победили в конкурсе!');

    }
}, 1000);















