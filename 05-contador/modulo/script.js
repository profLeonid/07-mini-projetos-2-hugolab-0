'use strict'

function criarListaNumeros(valor){
    let listaNumero = []

    for(let i = 1; i <= valor; i++){
        listaNumero.push(i)
    }
    return listaNumero
}

function criarListaPares(valor){
    let listaPares = []

    for(let i = 1; i <= valor; i++){
        listaPares.push(i % 2 === 0 ? i : '')
    }
    return listaPares
}

function criarListaImpares(valor){
    let listaImpares = []

    for(let i = 1; i <= valor; i++){
        listaImpares.push(i % 2 !== 0 ? i : '')
    }
    return listaImpares
}

function criarListaMulti5(valor){
    let listaMulti = []

    for(let i = 1; i <= valor; i++){
        listaMulti.push(i * 5)
    }

    return listaMulti
}

function criarListaPotencia2(valor){
    let listaPotencia = []

    for(let i = 0; i < valor; i++){
        listaPotencia.push(2 ** i)
    }

    return listaPotencia
}
function criarLinha(num, par, imp, mult5, pot2){

    const tabela = document.getElementById('tabela')
    const tr = document.createElement('tr')

    const tdNum = document.createElement('td')
    tdNum.textContent = num

    const tdPar = document.createElement('td')
    tdPar.textContent = par

    const tdImpar = document.createElement('td')
    tdImpar.textContent = imp

    const tdMult5 = document.createElement('td')
    tdMult5.textContent = mult5

    const tdPot2 = document.createElement('td')
    tdPot2.textContent = pot2

    tr.appendChild(tdNum,
                   tdPar,
                   tdImpar,
                   tdMult5,
                   tdPot2)

    tabela.appendChild(tr)
}

function handleClick(){
    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNumero  = criarListaNumeros(quantidade)
    const listaPar     = criarListaPares(quantidade)
    const listaImpar   = criarListaImpares(quantidade)
    const listaMulti   = criarListaMulti5(quantidade)
    const listaPot     = criarListaPotencia2(quantidade)

    for (let i = 0; i < quantidade; i++){
        criarLinha(
            listaNumero[i],
            listaPar[i],
            listaImpar[i],
            listaMulti[i],
            listaPot[i]
        )
    }
}