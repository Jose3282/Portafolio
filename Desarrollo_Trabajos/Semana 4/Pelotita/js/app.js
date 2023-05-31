const pelota = document.getElementById('pelota');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const reverseBtn = document.getElementById('reverse');
const resetButton = document.getElementById('reset');

let intervalID = null;

function play() {
    clearInterval(intervalID);
    if (pelota.style.left === '0px') {
    initialLeft = 0;
    }
    intervalID = setInterval(() => {
    const currentLeft = pelota.offsetLeft;
    pelota.style.left = currentLeft + 10 + 'px';
    }, 100);
}

function pause() {
clearInterval(intervalID);
}


function reverse() {
clearInterval(intervalID);
intervalID = setInterval(() => {
    const currentLeft = pelota.offsetLeft;
    pelota.style.left = currentLeft - 10 + 'px';
}, 100);
}

let initialLeft = 0;

function reset() {
    clearInterval(intervalID);
    pelota.style.left = initialLeft + 'px';
    play();
}


playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);
reverseBtn.addEventListener('click', reverse);
resetButton.addEventListener('click', reset);