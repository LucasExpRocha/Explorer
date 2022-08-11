const   buttonPlay = document.querySelector('.buttonPlay'),
        buttonPause = document.querySelector('.buttonPause'),
        buttonSet = document.querySelector('.buttonSet'),
        buttonStop = document.querySelector('.buttonStop'),
        buttonMoreMinutes = document.querySelector('.moreMinutes'),
        buttonLessMinutes = document.querySelector('.lessMinutes'),
        soundFlorest = document.querySelector('.sound_florest'),
        soundRain = document.querySelector('.sound_rain'),
        soundPeoples = document.querySelector('.sound_people'),
        soundFire = document.querySelector('.sound_fire'),
        minutesDisplay = document.querySelector('.minutes'),
        secondsDisplay = document.querySelector('.seconds'),
        volumeSoundFlorest = document.querySelector('#volumeSoundFlorest'),
        volumeSoundRain = document.querySelector('#volumeSoundRain'),
        volumeSoundPeoples = document.querySelector('#volumeSoundPeoples'),
        volumeSoundFire = document.querySelector('#volumeSoundFire');

    const florestAudio = new Audio("./audio/florest.wav")
    const rainAudio = new Audio('./audio/rain.wav')
    const peoplesAudio = new Audio('./audio/people.wav')
    const fireAudio = new Audio('./audio/fire.wav')
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

export const variables = {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonMoreMinutes,
    buttonLessMinutes,
    soundFlorest,
    soundRain,
    soundPeoples,
    soundFire,
    minutesDisplay,
    secondsDisplay,
    volumeSoundFlorest,
    volumeSoundRain,
    volumeSoundPeoples,
    volumeSoundFire,
    florestAudio,
    rainAudio,
    peoplesAudio,
    fireAudio,
    buttonPressAudio,
    kitchenTimer
}
