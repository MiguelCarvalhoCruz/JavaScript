function calcular() {

    var num = window.document.getElementById('txtnum')
    var numd = window.document.getElementById('txtnum2')
    var res = window.document.getElementById('res')
    var selecao = window.document.getElementById('txtsel')

    if (num.value.length == 0 || numd.value.length == 0) {

        res.innerHTML = '[ERRO] Por favor digite um valor'
    }

    var numero1 = Number(num.value)
    var numero2 = Number(numd.value)
    var sel = (selecao.value)
    var resultado = 0

    if (sel === "soma") {

        resultado = numero1 + numero2
        res.innerHTML = `A soma entre ${numero1} e ${numero2} é ${resultado}`
    }

    if (sel === "subtracao") {

        resultado = numero1 - numero2
        res.innerHTML = `A subtração entre ${numero1} e ${numero2} é ${resultado}`
    }

    if (sel === "mult") {

        resultado = numero1 * numero2
        res.innerHTML = `A mutiplicação entre ${numero1} e ${numero2} é ${resultado}`

    } else if (sel === "div") {

        if (numero2 == 0) {

            res.innerHTML = `Não é possivel dividir por zero`
        } else {

            resultado = numero1 / numero2
            res.innerHTML = `A divisão entre o ${número1} e ${núemro2} é ${resultado}`
        }
    }

}