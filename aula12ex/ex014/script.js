function carregar() {
    let data = new Date()
    let hora = data.getHours()

    window.document.getElementById('msg').innerHTML = `Agora são ${hora} horas.`
    
    if (hora < 12) {
        window.document.getElementById('imagem').src = 'manha-250.png'
        window.document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        window.document.getElementById('imagem').src = 'tarde-250.png'
        window.document.body.style.background = '#b9846f'
    } else {
        window.document.getElementById('imagem').src = 'noite-250.png'
        window.document.body.style.background = '#515154'
    }
}