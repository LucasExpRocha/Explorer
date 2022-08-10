export function btnEffects ({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
}){

    let btnPlay = () => {
        buttonPlay.classList.add('hide');
        buttonPause.classList.remove('hide');
        buttonSet.classList.add('hide');
        buttonStop.classList.remove('hide');
    }

    let btnPause = () => {
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add('hide');
    }

    let btnReset = () => {
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add('hide');
        buttonSet.classList.remove('hide');
        buttonStop.classList.add('hide');
    }

    return {
        btnPause,
        btnReset,
        btnPlay
    };
}