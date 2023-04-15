let nome = ['ana', 'ama', 'bia']


nome.push('alfredo') //adiciona o item ao final do array, igual o insert do python
let total = nome.length //pega quantos itens exitem no array
let ord = nome.sort()  //ordena o array, igual no python
console.log(total)
console.log(ord)

for(let pos = 0;pos < nome.length;pos++) {
    console.log(`${nome[pos]}`)
}

for(let pos in nome) {          //metodo simplificado de usar o for
    console.log(`${nome[pos]}`)
}

let pos = nome.indexOf('ana') //busca o valor dentro da array e retorna qual a chave que se encontra.
console.log(`O valor ${'ana'} está na posição ${pos}`)