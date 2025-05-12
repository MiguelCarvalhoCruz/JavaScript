var valores = [0, 2, 2, 8, 9, 3, 6, 4, 10, 12, 45, 98, 65, 1]

/*for (var pos = 0; pos < valores.length; pos++) {

    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

for (var pos in valores) {

    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}