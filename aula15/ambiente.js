let num = [5, 3, 9, 1, 8, 2, 4]
num.push(1)
num.sort()
console.log(num)
console.log(num[0])
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é o ${num[0]}`)
console.log(`Nosso vetor e o ${num}`)
/*
let pos = num.indexOf(8)
console.log(`O valor 8 esta na posição ${pos} `)
*/
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado')
}else {
    console.log(`O valor esta na posicao ${pos}`)
}