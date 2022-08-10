export function Timer({
    secondsDisplay,
    minutesDisplay,
    btnreset
}) {

    let timerTimeout;
    let minutes = minutesDisplay.textContent;
    let seconds = secondsDisplay.textContent;


    let addNewTimer = () => {
        minutes = prompt('Informe os minutos') || 0;
        seconds = prompt('Informe os segundos') || 0;

        updateTimerDisplay(minutes, seconds)
    }

    let updateTimerDisplay = (minutes, seconds) => {
        secondsDisplay.textContent = String(seconds).padStart(2, '0');
        minutesDisplay.textContent = String(minutes).padStart(2, '0');
    }

    let playCountdown = () => { 
        timerTimeout = setTimeout(() => {
            let seconds = Number(secondsDisplay.textContent);
            let minutes = Number(minutesDisplay.textContent);

        
            if(seconds === 0 && minutes === 0)
            {
                btnreset()
                return
            }

            if (seconds === 0){
                seconds = 60;
                --minutes;
            }

            updateTimerDisplay(minutes, String(seconds - 1));

            playCountdown();
        }, 1000)
    }

    let resetTimer = () => {
        updateTimerDisplay(minutes, seconds)
        clearTimeout(timerTimeout);
    }

    let stopTimer = () => clearTimeout(timerTimeout);

    return {
        playCountdown,
        updateTimerDisplay,
        resetTimer,
        stopTimer,
        addNewTimer
    }
}