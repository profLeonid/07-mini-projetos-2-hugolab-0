'use strict'

function criarListaNumeros(valor){
    let listaNumero = []

    for(let i = 1; i <= valor; i++){
        listaNumero.push(i)
    }
    return listaNumero
}

function criarListaAdicao(valor){
    let listaAdicao = []
    let result

    for(let i = 1; i <= valor; i++){
        result = valor + i
        listaAdicao.push(Number(result).toFixed(2))
    }
    return listaAdicao
}

function criarListaSubtracao(valor){
    let listaSub = []
    let result

    for(let i = 1; i <= valor; i++){
        result = valor - i
        listaSub.push(Number(result).toFixed(2))
    }
    return listaSub
}


function criarListaMultiplicacao(valor){
    let listaMulti = []
    let result

    for(let i = 1; i <= valor; i++){
        result = valor * i
        listaMulti.push(Number(result).toFixed(2))
    }
    return listaMulti
}


function criarListaDivisao(valor){
    let listaDiv = []
    let result

    for(let i = 1; i <= valor; i++){
        result = valor / i
        listaDiv.push(Number(result).toFixed(2))
    }
    return listaDiv
}
function criarLinha(num, add, sub, mult, div){

    const tabela = document.getElementById('tabela')
    const tr = document.createElement('tr')

    const tdNum = document.createElement('td')
    tdNum.textContent = num


    const tdAdd = document.createElement('td')
    tdAdd.textContent = add

    const tdSub = document.createElement('td')
    tdSub.textContent = sub

    const tdMult = document.createElement('td')
    tdMult.textContent = mult

    const tdDiv = document.createElement('td')
    tdDiv.textContent = div

    tr.appendChild(tdNum)
    tr.appendChild(tdAdd)
    tr.appendChild(tdSub)
    tr.appendChild(tdMult)
    tr.appendChild(tdDiv)

    tabela.appendChild(tr)
}

function handleClick(){
    const quantidade = Number(document.getElementById('quantidade').value)
    const tabela = document.getElementById('tabela')
    tabela.innerHTML = ''

    const listaNumero          = criarListaNumeros(quantidade)
    const listaAdicao          = criarListaAdicao(quantidade)
    const listaSubtracao       = criarListaSubtracao(quantidade)
    const listaMultiplicacao   = criarListaMultiplicacao(quantidade)
    const listaDivisao         = criarListaDivisao(quantidade)

    for (let i = 0; i < quantidade; i++){
        criarLinha(
            listaNumero[i],
            listaAdicao[i],
            listaSubtracao[i],
            listaMultiplicacao[i],
            listaDivisao[i]
        )
    }
}