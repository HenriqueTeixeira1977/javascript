let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('  #res')

let valores = []  // vetor - array

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista( n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //  Adicionando os valores na Array;
        
        //  Adicionando os valores na lista;
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado...`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor Inválido ou já encontrado na lista.')
    }
    num.value = ''  //  Para Limpar o campo depois de Numero adicionado;
    num.focus()     //  Pra cursor voltar ao campo; (focus)
}

function calcular(){
    if(valores.length == 0) {
        window.alert(`Adicione valores antes de finalizar!`)
    } else {
        let tot = valores.length
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
    }

}