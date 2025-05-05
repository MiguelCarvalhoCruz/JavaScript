function calcular() {

    var altura = Number.parseFloat(window.document.getElementById('ialtura').value)
    var peso = Number.parseInt(window.document.getElementById('ipeso').value)
    var res = window.document.getElementById('res')

    if (isNaN(altura) && isNaN(peso)) {

        alert(`[ERRO] Verifique os valores e tente novamente`)

    } 

    var imc = peso / (altura * altura)
    imc = imc.toFixed(2)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (imc < 18) {

        res.innerHTML = `<p>IMC: ${imc}, você está abaixo do peso.</p>`
        img.setAttribute('src', 'abaixo.JPG')
        res.appendChild(img)
    } else if (imc < 25) {

        res.innerHTML = `<p>IMC: ${imc}, você está no peso normal.</p>`
        img.setAttribute('src', 'normal.JPG')
        res.appendChild(img)
    } else if (imc < 30) {

        res.innerHTML = `<p>IMC: ${imc}, você está com sobrepeso.</p>`
        img.setAttribute('src', 'sobrepeso.JPG')
        res.appendChild(img)
    } else if (imc < 35) {

        res.innerHTML = `<p>IMC: ${imc}, você está com obesidade grau I.</p>`
        img.setAttribute('src', 'obesidade_i.JPG')
        res.appendChild(img)
    } else if (imc < 40) {

        res.innerHTML = `<p>IMC: ${imc}, você está com obesidade grau II.</p>`
        img.setAttribute('src', 'obesidade_ii.JPG')
        res.appendChild(img)
    } else {

        res.innerHTML = `<P>IMC: ${imc}, você está com obesidade grau III.</p>`
        img.setAttribute('src', 'obesidade_iii.JPG')
        res.appendChild(img)
    }
    
}

