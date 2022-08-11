import { variables } from './variables.js';


const {
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
    volumeSoundFlorest,
    volumeSoundRain,
    volumeSoundPeoples,
    volumeSoundFire,
    buttonPressAudio,
    florestAudio,
    rainAudio,
    peoplesAudio,
    fireAudio,
    changeTheme,
    bodyClass,
    sunIcon,
    moonIcon
} = variables

export default function({timer, audio}){

    changeTheme.addEventListener('click', () => {
        bodyClass.classList.toggle('Dark')
        sunIcon.classList.toggle('hidden')
        moonIcon.classList.toggle('hidden')

    })

    buttonPlay.addEventListener('click', () => {
        audio.playAudio(buttonPressAudio)

        buttonPlay.classList.add('hidden')
        buttonPause.classList.remove('hidden')
        buttonSet.classList.add('hidden')
        buttonStop.classList.remove('hidden')

        timer.countdownFunction()
    })

    buttonPause.addEventListener('click', () => {
        audio.playAudio(buttonPressAudio)

        buttonPlay.classList.remove('hidden')
        buttonPause.classList.add('hidden')
        
        timer.pauseCountdown()
        audio.stopAllAudio()
        audio.removeClassActiveCard()
        audio.removeClassHiddenVolume()
    })

    buttonSet.addEventListener('click', () => {
        audio.playAudio(buttonPressAudio)

        timer.listenerUser()
    })

    buttonStop.addEventListener('click', () => {
        audio.playAudio(buttonPressAudio)

        buttonPlay.classList.remove('hidden')
        buttonPause.classList.add('hidden')
        buttonSet.classList.remove('hidden')
        buttonStop.classList.add('hidden')

        timer.pauseCountdown()
        timer.resetTextContent()
        audio.stopAllAudio()
        audio.removeClassActiveCard()
        audio.removeClassHiddenVolume()
    })

    buttonMoreMinutes.addEventListener('click', () => {
        audio.playAudio(buttonPressAudio)
        timer.incrementFiveMinutes()
    })

    buttonLessMinutes.addEventListener('click', () => {
        audio.playAudio(buttonPressAudio)
        timer.decrementFiveMinutes()
    })

    soundFlorest.addEventListener('click', () => {
        audio.playAudio(buttonPressAudio)

        soundFlorest.classList.toggle('active');
        soundRain.classList.remove('active');
        soundPeoples.classList.remove('active');
        soundFire.classList.remove('active');

        volumeSoundFlorest.classList.toggle('hidden');
        volumeSoundRain.classList.add('hidden');
        volumeSoundPeoples.classList.add('hidden');
        volumeSoundFire.classList.add('hidden');

        audio.stopAllAudio()
        soundFlorest.classList.contains('active') ? audio.playAudio(florestAudio) : audio.stopAudio(florestAudio)
    })

    soundRain.addEventListener('click', () => {
        audio.playAudio(buttonPressAudio)

        soundRain.classList.toggle('active');
        soundFlorest.classList.remove('active');
        soundPeoples.classList.remove('active');
        soundFire.classList.remove('active');

        volumeSoundRain.classList.toggle('hidden');
        volumeSoundFlorest.classList.add('hidden');
        volumeSoundPeoples.classList.add('hidden');
        volumeSoundFire.classList.add('hidden');

        audio.stopAllAudio()
        soundRain.classList.contains('active') ? audio.playAudio(rainAudio) : audio.stopAudio(rainAudio)
    })

    soundPeoples.addEventListener('click', () => {
        audio.playAudio(buttonPressAudio)

        soundPeoples.classList.toggle('active');
        soundFlorest.classList.remove('active');
        soundRain.classList.remove('active');
        soundFire.classList.remove('active');

        volumeSoundPeoples.classList.toggle('hidden');
        volumeSoundFlorest.classList.add('hidden');
        volumeSoundRain.classList.add('hidden');
        volumeSoundFire.classList.add('hidden');

        audio.stopAllAudio()
        soundPeoples.classList.contains('active') ? audio.playAudio(peoplesAudio) : audio.stopAudio(peoplesAudio)
    })

    soundFire.addEventListener('click', () => {
        audio.playAudio(buttonPressAudio)

        soundFire.classList.toggle('active');
        soundFlorest.classList.remove('active');
        soundRain.classList.remove('active');
        soundPeoples.classList.remove('active');

        volumeSoundFire.classList.toggle('hidden');
        volumeSoundFlorest.classList.add('hidden');
        volumeSoundRain.classList.add('hidden');
        volumeSoundPeoples.classList.add('hidden');

        audio.stopAllAudio()
        soundFire.classList.contains('active') ? audio.playAudio(fireAudio) : audio.stopAudio(fireAudio)
    })

    volumeSoundFlorest.addEventListener('click', () => {
        florestAudio.volume = volumeSoundFlorest.value
    })

    volumeSoundRain.addEventListener('click', () => {
        rainAudio.volume = volumeSoundFlorest.value
    })

    volumeSoundPeoples.addEventListener('click', () => {
        peoplesAudio.volume = volumeSoundFlorest.value
    })

    volumeSoundFire.addEventListener('click', () => {
        fireAudio.volume = volumeSoundFlorest.value
    })
}