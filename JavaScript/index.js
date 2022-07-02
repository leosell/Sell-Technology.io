const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () => {
    limparInputs()
    document.getElementById('modal').classList.remove('active')
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('Users')) ?? []
const checkLogin = () => {return localStorage.getItem('loggedUser')}
const setLocalStorage = (lista_user) => localStorage.setItem('Users', JSON.stringify(lista_user))

const codigoUsuario = () => {
    const numbers = "1234567890"
    const tamanhoCod = "4"
    let codigo = ""

    for (let i = 0; i < tamanhoCod; i++) {
        let randomCod = Math.floor(Math.random() * numbers.length)
        codigo += numbers.substring(randomCod, randomCod + 1)
    }

    return codigo
}

const readUsers = () => getLocalStorage().filter(user => user.pertence == checkLogin())
const validaForm = () => {return document.getElementById('form').reportValidity()}

const atualizarUser = (index, user) => {
    const lista_user = getLocalStorage()
    lista_user[index] = user
    setLocalStorage(lista_user)
}

const criarUser = (user) => {
    const lista_user = getLocalStorage()
    lista_user.push(user)
    setLocalStorage(lista_user)
}

const salvarUser = () => {
    if(validaForm()) {
        const user = {
            name: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            id: codigoUsuario(),
        }
        const index = document.getElementById('full-name').dataset.index
        console.log(index)
        if (index == 'new') {
            criarUser(user)
            atualizarUser()
            alert(`Login: ${user.id} \nPassword: ${user.password} \n Seja Bem-vindo ${user.name}`)
            limparInputs()
            closeModal()
        } else {
            alert('Usuario ja existe')
        }
    }
}

const limparInputs = () => {
    const inputs = document.querySelectorAll('.modal-fields')
    inputs.forEach(inputs => inputs.value = '')
    document.getElementById('full-name').dataset.index = 'new'
}

document.getElementById('open-modal').addEventListener('click', openModal)

document.getElementById('save-button').addEventListener('click', salvarUser)
document.getElementById('save-button').addEventListener('click', closeModal)


document.getElementById('modalClose').addEventListener('click', closeModal)
document.getElementById('cancel-button').addEventListener('click', closeModal)