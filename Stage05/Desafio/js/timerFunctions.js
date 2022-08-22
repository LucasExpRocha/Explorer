import { audioFunctions } from './audioFunctions.js';
import { variables } from './variables.js';


const {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
} = variables;

let audio = audioFunctions({})

export function timerFunction({
    minutesDisplay,
    secondsDisplay
}){
    let minutes = document.querySelector('.minutes').textContent;
    let seconds = document.querySelector('.seconds').textContent;
    let instantSeconds = document.querySelector('.seconds').textContent;
    let timerOut;

    const resetControls = () => {
        buttonPlay.classList.remove('hidden')
        buttonPause.classList.add('hidden')
        buttonSet.classList.remove('hidden')
        buttonStop.classList.add('hidden')
    }

    const updateTextContent = (minutes, seconds) => {
        minutesDisplay.textContent = String(minutes).padStart(2, '0');
        secondsDisplay.textContent = String(seconds).padStart(2, '0');
    }

    const resetTextContent = () => {
        instantSeconds = seconds;
        updateTextContent(minutes, seconds)
    }

    const pauseCountdown = () => {
        clearTimeout(timerOut)
    }

    const listenerUser = () => {
        let userTimeMinutes = Number(prompt('Informe os minutos desejados'))
        let userTimeSeconds = Number(prompt('Informe os segundos desejados'))
        
        if(!notNumber(userTimeMinutes) && !notNumber(userTimeSeconds) && userTimeSeconds <= 60) {
            updateTextContent(userTimeMinutes, userTimeSeconds)
            
            minutes = userTimeMinutes
            seconds = userTimeSeconds            
            return
        }
        alert('Informe apenas numeros')
    }

    const notNumber = (value) => {
        return isNaN(value) || value == ""
    }

    const incrementFiveMinutes = () => {
        let instantMinutes = document.querySelector('.minutes').textContent;
        let minutes = Number(instantMinutes) + 5;
        updateTextContent(minutes, instantSeconds)
    }

    const  decrementFiveMinutes = () => {
        let instantMinutes = document.querySelector('.minutes').textContent;
        let minutes = Number(instantMinutes) - 5;
        if(minutes < 0){
            return
        }
        updateTextContent(minutes, instantSeconds)
    }

    const countdownFunction = () => {
        timerOut = setTimeout(() => {
            let functionMinutes = Number(document.querySelector('.minutes').textContent)
            let functionSeconds = Number(document.querySelector('.seconds').textContent)

            if (functionMinutes <= 0 && functionSeconds <= 0) {
                resetControls();
                pauseCountdown();
                resetTextContent();
                audio.timeEnd()
                return
            }

            if (functionSeconds === 0){
                functionSeconds = 60;
                functionMinutes--;
            }

            --functionSeconds

            updateTextContent(functionMinutes, functionSeconds)
            instantSeconds = functionSeconds

            countdownFunction()
        }, 1000)
    }

    return {
        countdownFunction,
        pauseCountdown,
        listenerUser,
        resetTextContent,
        incrementFiveMinutes,
        decrementFiveMinutes
    }
}