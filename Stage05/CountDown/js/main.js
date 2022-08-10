import { btnEffects } from './buttonEffects.js'
import { Timer } from './timer.js';

const   buttonPlay = document.querySelector('.buttonPlay'),
        buttonPause = document.querySelector('.buttonPause'),
        buttonSet = document.querySelector('.buttonSet'),
        buttonStop = document.querySelector('.buttonStop'),
        secondsDisplay = document.querySelector('.seconds'),
        minutesDisplay = document.querySelector('.minutes');

let btneffects = btnEffects({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
})

let timer = Timer({
    secondsDisplay,
    minutesDisplay,
    btnreset: btneffects.btnReset,
})

buttonPlay.addEventListener('click', () => {
    btneffects.btnPlay();
    timer.playCountdown();
})

buttonSet.addEventListener('click', () => {
    timer.addNewTimer()
})

buttonStop.addEventListener('click', () => {
    timer.resetTimer()
    btneffects.btnReset()
})

buttonPause.addEventListener('click', () => {
    timer.stopTimer()
    btneffects.btnPause()
})