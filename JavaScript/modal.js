const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () => {
    limparInputs()
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('open-modal').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)
document.getElementById('cancel-button').addEventListener('click', closeModal)