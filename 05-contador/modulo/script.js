'use strict'

function criarListaNumeros (valor){
    let listaNumero = []

    for(let i = 1; i <= valor; i++){
        listaNumero.push(i)
    }
    console.log(listaNumero)
    return listaNumero
}
function criarListaPares (valor){
    let listaPares = []

    for(let i = 1; i <= valor; i++){
        if(i % 2 == 0){
            listaPares.push(i)
        }
    }
    console.log(listaPares)
    return listaPares
}
function criarListaImpares (valor){
    let listaPares = []
    
    for(let i = 1; i <= valor; i++){
        if(i % 2 == 1){
            listaPares.push(i)
        }
    }

    console.log(listaPares)
    return listaPares
}
function criarListaMulti5(valorMult){
    let listaMulti = []

    for(let i = 1; i <= valorMult; i++){
        listaMulti.push(i * 5)
    }

    return listaMulti
}

function criarListaPotencia2(valor){
    let listaPotencia = []

    for(let i = 1; i <= valor; i++){
        listaPotencia.push(2 ** i)
    }

    return listaPotencia
}

function criarLinha (num, par, imp, mult5, pot2){
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

    const tdpot2 = document.createElement('td')
    tdpot2.textContent = pot2

    tr.appendChild(tdNum)
    tr.appendChild(tdPar)
    tr.appendChild(tdImpar)
    tr.appendChild(tdMult5)
    tr.appendChild(tdpot2)

    tabela.appendChild(tr)
}

function handleClick(){
    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNumero  = criarListaNumeros(quantidade)
    const listaPar     = criarListaPares(quantidade)
    const listaImpar   = criarListaImpares(quantidade)
    const listaMulti   = criarListaMulti5(quantidade)
    const listaPont    = criarListaPotencia2(quantidade)

    for (let i = 1; i < quantidade; i++){
        criarLinha(listaNumero[i], listaPar[i], listaImpar[i], listaMulti[i], listaPont[i])
    }
}
module.exports = {
    handleClick
}
