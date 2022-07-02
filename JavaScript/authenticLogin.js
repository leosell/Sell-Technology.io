let login = document.getElementById('acess-login')
let password = document.getElementById('acess-password')
let loggedUser

const submit = () => {
    const lista_user = getLocalStorage()
    let valida = lista_user.filter(user => user.id == login.value)
    let validaPassword = lista_user.filter(user => user.password == password.value)

    if (valida.length == 0) {
        Swal.fire({
            icon: "Error",
            title: "Algo de errado...",
            text: "Login / Senha Incorreto"
        })
    } else if (validaPassword.length == 0) {
        Swal.fire({
            icon: "Error",
            title: "Algo de errado...",
            text: "Login / Senha Incorreto"
        })
    }

    if (valida[0].id == login.value) {
        if (valida[0].password == password.value) {
            loggedUser = lista_user.id
            localStorage.setItem('loggedUser', (loggedUser))
            login = ''
            password = ''
            window.location.href = 'logado.html'
        }
    }
}

document.getElementById('acess-button').addEventListener('click', submit)