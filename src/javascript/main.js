function openModal(event) {
    const reqEvent = document.querySelectorAll(event)
    reqEvent.forEach(reqEvent => {
        reqEvent.classList.add('open');
    });
}

function closeModal(event) {
    const openModals = document.querySelectorAll(".open")
    openModals.forEach(openModal => {
        openModal.classList.remove('open');
    });
}

window.document.onkeydown = function(evt) {
    if (evt.key == 'Escape') closeModal()
}