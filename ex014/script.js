function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12 
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora <= 12 ){
        //Bom Dia!
        img.src = 'modelo/manha.png'
        document.body.style.background = '#fee378'
      } else if (hora >= 12 && hora < 18){
            img.src = 'modelo/tarde.png'
            document.body.style.background = '#22dfdb' 
        } else {
            img.src = 'modelo/noite.png'
            document.body.style.background = "#403a56"
        }
    }

