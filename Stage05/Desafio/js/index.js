import { audioFunctions } from './audioFunctions.js';
import { timerFunction } from './timerFunctions.js';
import { variables } from './variables.js';
import Events from './events.js';

const {
    minutesDisplay,
    secondsDisplay,
    florestAudio,
    rainAudio,
    peoplesAudio,
    fireAudio,
} = variables

let timer = timerFunction({
    minutesDisplay,
    secondsDisplay,
})

/* Inicio das funções de audio */

let audio = audioFunctions({
    florestAudio,
    rainAudio,
    peoplesAudio,
    fireAudio
})

Events ({timer, audio})