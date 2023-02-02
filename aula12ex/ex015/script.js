function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || Number(fano.value)  > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            gênero = 'Homem'
           //  CRIANÇA
            if (idade >= 0 && idade  < 12) { 
                 img.setAttribute('src', 'bebehomem.png')
            //  JOVEM     
            }else if (idade < 25){
                img.setAttribute('src', 'jovemhomem.png')
            //  ADULTO    
            }else if (idade < 50) {
                img.setAttribute('src', 'adultohomem.png')
            //  IDOSO    
            }else {
                img.setAttribute('src', 'idosohomem.png')
            }           

        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            //  CRIANÇA
            if (idade >= 0 && idade  < 12) { 
            img.setAttribute('src', 'bebemulher.png')
            //  JOVEM     
            }else if (idade < 25){
                img.setAttribute('src', 'jovemmulher.png')
            //  ADULTO    
            }else if (idade < 50) {
                img.setAttribute('src', 'adultomulher.png')
            //  IDOSO    
            }else {
                img.setAttribute('src', 'idosomulher.png')
            }   




        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}