function verificar() {

    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        alert("[Erro] Falta dados")

    } else {

        res.innerHTML = 'Contando: '

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (i < f) {

            //contagem crescente
            for(var contador = i; contador <= f; contador += p) {

                res.innerHTML += `${contador} `
            }
        } else {
            
            //contagem decrescente
            for (var contador = i; contador >= f; contador -= p) {

                res.innerHTML += `${contador} `
            }
        }

    }


    
}