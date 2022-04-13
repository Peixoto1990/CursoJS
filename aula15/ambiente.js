let num = [5, 8, 2, 9, 3]
num.push(1) //adiciona valores ao array
num.sort() //coloca o array em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições.`) //retorna o comprimento do array
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log('Todos os valores do vetor em ordem são:')
let pos = 0
for (pos = 0; pos < num.length; pos ++) {
    console.log(`Vetor na posição ${pos}: ${num[pos]}`)
}

let se = num.indexOf(8)

if (se == -1) {
    console.log('O valor não foi encontrado dentro do vetor num')
} else {
    console.log(`O valor 8 está na posição ${se} do vetor num`)
}



