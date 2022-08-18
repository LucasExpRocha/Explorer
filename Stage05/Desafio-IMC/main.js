const inputWeight = document.querySelector("#weight"),
    inputHeight = document.querySelector("#height"),
    form = document.querySelector("form");
    
    

Modal = {
    modalOpen: document.querySelector(".modal-wrapper"),
    modalClose: document.querySelector(".modal svg"),
    modalResult: document.querySelector("#text-modal"),
    modalError: document.querySelector(".modal-error"),
    openError(){
        Modal.modalError.classList.add("visibility");
        setTimeout(function(){
            Modal.modalError.classList.remove("visibility");
        }, 1500)
    },
    open() {
        Modal.modalOpen.classList.add("visibility")
    },
    close() {
        Modal.modalOpen.classList.remove("visibility")
    }
}

form.onsubmit = function(event) {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    if(!notNumber(weight) && !notNumber(height)) {
        const imc = calcIMC(weight, height)
        Modal.modalResult.innerHTML = `O seu imc é ${imc.toFixed(2)}`
        Modal.open()
        return
    }
    Modal.openError()
}

const notNumber = (value) => {
    return isNaN(value) || value == ""
}

const calcIMC = (weight, height) => {
    return weight / ((height / 100)**2).toFixed(2);
}

Modal.modalClose.onclick = () => {
    Modal.close()
}