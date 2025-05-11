function tabuada() {

    var num = window.document.getElementById('txtn')
    var tabuada = window.document.getElementById('seltab')

    if (num.value.length == 0) {

        alert(`[ERRO]`)
    } else {

        var n = Number(num.value)
        var c = 1
        tabuada.innerHTML = '' //Limpando a area

        while (c <= 10) {

            var item = document.createElement('option') // Criando as opções do select
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item) // Colocando os número no option
            c++
        }
    }
}