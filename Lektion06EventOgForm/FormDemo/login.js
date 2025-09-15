document.getElementById('username').value = 'Egon olsen'
let loginButtonNode = document.getElementById('loginBtn')
loginButtonNode.addEventListener('click', (event)=>{
    let usernameNode = document.getElementById('username')
    let passwordNode = document.getElementById('password')
    let welcomeText = `Hil dig ${usernameNode.value}. Du har valgt koden: ${passwordNode.value}. Du er blevet oprettet som ${document.getElementById('type').value}`
    document.body.outerHTML = '<p>' + welcomeText + '</p>' + document.body.outerHTML
    loginButtonNode.disabled = true
})

