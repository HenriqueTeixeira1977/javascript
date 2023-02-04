function gerar(){
    let num = window.document.querySelector('#txtnum')
    let tab =window.document.querySelector('#seltab')
    if (num.value.length == 0) {
        window.alert('Por Favor! Digite um numero Válido!')
    }else {
        let n = Number(num.value)
        let c = 1  //  c é o contador!
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}