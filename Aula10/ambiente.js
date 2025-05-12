var num = [1, 8, 9, 5]
num[4] = 2
num.push(7)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
var pos = num.indexOf(9)
console.log(`O valor 9 está na posição ${pos}`)
