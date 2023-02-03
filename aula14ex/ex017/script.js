/*
function contar() {
    var ini = window.document.querySelector('#inicio')
    var fim = window.document.querySelector('#fim')
    var passo = window.document.querySelector('#passo')
    var res = window.document.querySelector('#res')  

    res.innerHTML += ` \u{1F6A9} `

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossivel Contar!!! Por favor, verifique os dados.`
        //window.alert('[ERROR] Faltam Dados!')
    }else {
        res.innerHTML = `Os valores sao...<br> `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo Invalido! Considerando PASSO = 1')
            p = 1
        }
        if (i < f) {
            //  Contagem Crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //  Contagem Decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}*/