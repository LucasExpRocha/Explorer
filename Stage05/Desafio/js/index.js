const   buttonPlay = document.querySelector('.buttonPlay'),
        buttonPause = document.querySelector('.buttonPause'),
        buttonSet = document.querySelector('.buttonSet'),
        buttonStop = document.querySelector('.buttonStop'),
        buttonMoreMinutes = document.querySelector('.moreMinutes'),
        buttonLessMinutes = document.querySelector('.lessMinutes'),
        soundFlorest = document.querySelector('.sound_florest'),
        soundRain = document.querySelector('.sound_rain'),
        soundPeoples = document.querySelector('.sound_peoples'),
        soundFire = document.querySelector('.sound_fire'),
        minutesDisplay = document.querySelector('.minutes'),
        secondsDisplay = document.querySelector('.seconds');

let minutes = document.querySelector('.minutes').textContent
let seconds = document.querySelector('.seconds').textContent

updateTextContent = (minutes, seconds) => {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

resetTextContent = () => {
    updateTextContent(minutes, seconds)
}

countdownFunction = () => {
    timerOut = setTimeout(() => {
        let functionMinutes = Number(document.querySelector('.minutes').textContent)
        let functionSeconds = Number(document.querySelector('.seconds').textContent)

        if (functionMinutes <= 0 && functionSeconds <= 0) {
            pauseCountdown()
            resetTextContent();
            return
        }

        if (functionSeconds === 0){
            functionSeconds = 5;
            functionMinutes--;
        }

        updateTextContent(functionMinutes, --functionSeconds)

        countdownFunction()
    }, 1000)
}

pauseCountdown = () => {
    clearTimeout(timerOut)
}

listenerUser = () => {
    let userTimeMinutes = Number(prompt('Informe os minutos desejados'))
    let userTimeSeconds = Number(prompt('Informe os segundos desejados'))

    updateTextContent(userTimeMinutes, userTimeSeconds)

    minutes = userTimeMinutes
    seconds = userTimeSeconds
}

buttonPlay.addEventListener('click', () => {
    countdownFunction()
    buttonPlay.classList.add('hidden')
    buttonPause.classList.remove('hidden')
    buttonSet.classList.add('hidden')
    buttonStop.classList.remove('hidden')
})

buttonPause.addEventListener('click', () => {
    pauseCountdown()
    buttonPlay.classList.remove('hidden')
    buttonPause.classList.add('hidden')
})

buttonSet.addEventListener('click', () => {
    listenerUser()
})

buttonStop.addEventListener('click', () => {
    pauseCountdown()
    resetTextContent()
    buttonPlay.classList.remove('hidden')
    buttonPause.classList.add('hidden')
    buttonSet.classList.remove('hidden')
    buttonStop.classList.add('hidden')
})