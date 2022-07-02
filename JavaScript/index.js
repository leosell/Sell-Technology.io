const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('open-modal').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)
document.getElementById('button-cancel').addEventListener('click', closeModal)