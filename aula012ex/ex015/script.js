function verificar() {
   var data = new Date ()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value> ano) {
    window.alert('[ERRO], Verifique os dados novamente!')
   } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Home'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criancaH.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemH.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultoH.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Muié'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criancaM.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultoM.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
   }

}