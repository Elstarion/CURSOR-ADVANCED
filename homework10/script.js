const keys = document.querySelectorAll('.key');

function removeClass(event) {
    event.target.classList.remove('playing');
}

function playSound(event) {
    let audio = null;
    let key = null;

    if(event.type === 'keypress') {
        audio = document.querySelector(`audio[id='${event.key.toUpperCase()}']`);
        key = document.querySelector(`div[id='${event.key.toUpperCase()}']`);
    }

    if(event.type === 'click') {
        audio = document.querySelector(`audio[id='${event.target.innerText}']`);
        key = document.querySelector(`div[id='${event.target.innerText}']`);
    }

    if(!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

keys.forEach((key) => {key.addEventListener('transitionend', removeClass)});
keys.forEach((key) => {key.addEventListener('click', playSound)});
document.addEventListener('keypress', playSound);
