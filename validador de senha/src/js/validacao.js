const passwordInput = document.querySelector(".pass-field input")
const eyeIcon = document.querySelector(".pass-field i")
const requerimentList = document.querySelectorAll(".requeriment-list li")
// uma matriz de requisitos de senha
//  expressões e índice do item da lista de requisitos
const requeriments = [
    {regex: /.{8,}/, index: 0}, // mínimo de 8 caracteres
    {regex: /[0-9]/, index:1}, // // um numero
    {regex: /[a-z]/, index:2}, // letra minúscula 
    {regex: /[^A-Za-z0-9]/, index:3}, // caractere especial
    {regex: /[A-Z]/, index:4} //    letra maiuscula
]

passwordInput.addEventListener("keyup", (e)=> {
    requeriments.forEach(item => {
        //verifique se a senha corresponde ao regex de requisito
        const isValid = item.regex.test(e.target.value)
        const requerimentItem = requerimentList[item.index]

        // mudando o icone de acordo com os requisitos
        if(isValid){
            requerimentItem.classList.add('valid')
            requerimentItem.firstElementChild.className = 'fa-solid fa-check'
        } else{
            requerimentItem.classList.remove('valid')
            requerimentItem.firstElementChild.className = 'fa-solid fa-circle'
        }

    })
})

eyeIcon.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === 'password' ? '' : '-slash' }`
})