function carregar() {

    var mensagem = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12) {

        img.src = 'imagens/dia.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {

        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {

        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}

