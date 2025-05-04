function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('itxtnas')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {

        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {

        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {

            genero = 'Homem'
            if (idade >=0 && idade < 10) {

                //Crianca
                img.setAttribute('src', 'imagens/bebe_m.jpg')
            } else if (idade < 21) {

                //Jovem
                img.setAttribute('src', 'imagens/jovem_m.jpg')
            } else if (idade < 50) {

                //Adulto
                img.setAttribute('src', 'imagens/adulto_m.jpg')
            } else {

                //Idoso
                img.setAttribute('src', 'imagens/idoso_m.jpg')
            }

        }else if (fsex[1].checked) {

            genero = 'Mulher'
            if (idade >=0 && idade < 10) {

                //Crianca
                img.setAttribute('src', 'imagens/bebe_f.jpg')
            } else if (idade < 21) {

                //Jovem
                img.setAttribute('src', 'imagens/jovem_f.jpg')
            } else if (idade < 50) {

                //Adulto
                img.setAttribute('src', 'imagens/adulto_f.jpg')
            } else {

                //Idoso
                img.setAttribute('src', 'imagens/idoso_f.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}