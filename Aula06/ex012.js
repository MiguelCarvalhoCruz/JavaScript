var agora = new Date() // Vai pegar a hora atual do sistema
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora >= 8 && hora <= 12) {

    console.log(`Bom Dia!`)

}else if (hora > 12 && hora < 18) {

    console.log(`Boa Tarde!`)

}else if (hora >= 18 && hora <= 23){

    console.log(`Boa Noite`)

}else {

    console.log(`Boa Madrugada`)
}