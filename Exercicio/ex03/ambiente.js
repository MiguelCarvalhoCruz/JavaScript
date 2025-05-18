function calcular() {

    var nasc = window.document.getElementById('txtnas')
    var data = new Date()
    var ano = data.getFullYear()
    var res = window.document.getElementById('res')

    if (nasc.value.length == 0 || Number(nasc.value) > ano) {

        alert("[Erro] Por favor tente novamente")
    } else {

        var sexo = window.document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var genero = ""
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {

            genero = "Homem"

            if (idade >= 0 && idade < 10) {

                //Criança
                img.setAttribute('src', 'imagens/bebe_m.jpg')
            } else if (idade < 21) {

                //jovem
                img.setAttribute('src', 'imagens/jovem_m.jpg')
            } else if (idade < 50) {

                //adulto
                img.setAttribute('src', 'imagens/adulto_m.jpg')
            } else {

                //idoso
                img.setAttribute('src', 'imagens/idoso_m.jpg')
            }

        } else if (sexo[1].checked) {

            genero = "Mulher"

            if (idade >= 0 && idade < 10) {

                //criança
                img.setAttribute('src', 'imagens/bebe_f.jpg')
            } else if (idade < 21) {

                //jovem
                img.setAttribute('src', 'imagens/jovem_f.jpg')
            } else if (idade < 50) {

                //adulto
                img.setAttribute('src', 'imagens/adulto_f.jpg')
            } else {

                //idoso
                img.setAttribute('src', 'imagens/idoso_f.jpg')
            }
        }

        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}