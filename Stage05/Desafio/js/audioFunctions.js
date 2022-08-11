import { variables } from "./variables.js"
const { 
    volumeSoundFlorest,
    volumeSoundRain,
    volumeSoundPeoples,
    volumeSoundFire,
    soundFlorest,
    soundRain,
    soundPeoples,
    soundFire,
    kitchenTimer
} = variables

export function audioFunctions({
    florestAudio,
    rainAudio,
    peoplesAudio,
    fireAudio
})
{
    const playAudio = (audioName) => {
        audioName.play()
        
        if(audioName == florestAudio || audioName == rainAudio || audioName == peoplesAudio || audioName == fireAudio) {
            audioName.loop = true
        }
    }
    
    const stopAudio = (audioName) => {
        audioName.pause()
    }
    
    const stopAllAudio = () => {
        florestAudio.pause()
        rainAudio.pause()
        peoplesAudio.pause()
        fireAudio.pause()
    }
    
    const removeClassActiveCard = () => {
        soundFlorest.classList.remove('active');
        soundRain.classList.remove('active');
        soundPeoples.classList.remove('active');
        soundFire.classList.remove('active');
    }
    
    const removeClassHiddenVolume = () => {
        volumeSoundFlorest.classList.add('hidden');
        volumeSoundRain.classList.add('hidden');
        volumeSoundPeoples.classList.add('hidden');
        volumeSoundFire.classList.add('hidden');
    }

    const timeEnd = () => {
        kitchenTimer.play()
    }

    return {
        playAudio,
        stopAudio,
        stopAllAudio,
        removeClassActiveCard,
        removeClassHiddenVolume,
        timeEnd
    }
}