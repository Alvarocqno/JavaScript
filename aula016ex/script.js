let valores = []
let num = document.querySelector('input#fnum')
let listanum = document.querySelector('select#flista')
let res = document.getElementById('res')

function adicionar() {
    let n = Number(num.value)
    numerosadd.push(n)
    //res.innerHTML = `${numerosadd}`
    let item = document.createElement('option')
    item.text = `O Numero ${n} foi adicionado`
    item.value = `listanum${c}`
    listanum.appendChild(item)
}
console.log(numerosadd)