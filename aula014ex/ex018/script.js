function gera_tabuada() {
    var num = document.getElementById('inum')
    var res = document.getElementById('tab')

    if (num.value.length == 0) {
        window.alert(`Não foi possivel criar a tabuada, por favor digite um numero`)
    } else {
        let n = Number(num.value)
        res.innerHTML = ''
        for (c=1; c <= 10; c+=1) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }

    }
}