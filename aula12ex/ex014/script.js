function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `AGORA SÃO ${hora}:${min} horas.`

    if(hora >= 0 && hora < 12 ) {
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#F6CF8E'
    }else if ( hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#C3543C'
    }else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#2F374C'
    }
}

//  Manha #F6CF8E
//  Tarde #C3543C
//  Noite #2F374C