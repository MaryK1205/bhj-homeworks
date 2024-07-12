let clickerCookie = document.querySelector('#cookie');
let clickerCounter = document.querySelector('#clicker__counter');
let count = 0;
function clickerCounter1(e) {
    count++;
    clickerCounter.textContent = `${count}`;
    if (count % 2 == 0) {
        clickerCookie.style.width = "200px";
    }
    else {
        clickerCookie.style.width = "500px";
    }
}

clickerCookie.addEventListener('click', clickerCounter1); 
