function calcular() {

    var num1 = window.document.getElementById('txtnum')
    var num2 = window.document.getElementById('txtnum2')
    var res = window.document.getElementById('res')

    if (num1.value.length == 0 || num2.value.length == 0) {

        res.innerHTML = "Erro, por favor digite um valor"
    }

    var numero = Number(num1.value)
    var numero2 = Number(num2.value)

    if (numero == numero2) {

        res.innerHTML = `O número ${numero} é igual ao número ${numero2}`

    } else if (numero > numero2) {

        res.innerHTML = `O número ${numero} é maior que o número ${numero2}`

    } else {

        res.innerHTML = `O número ${numero2} é maior que o número ${numero}`
    }
}