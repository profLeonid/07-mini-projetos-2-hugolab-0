'use stric'

function criarListaNumeros(valor){
    let listaNumero = []

    for(let i = 1; i <= valor; i++){
        listaNumero.push(i)
    }
    return listaNumero
}

function criarListaParcela (valorTotal, valorParcela){
    let listaParcela = []
    let result

    for(let i = 1; i <= valorParcela; i++){

        result = valorTotal / valorParcela
        listaParcela.push(Number(result).toFixed(2))
    }

    return listaParcela
}
function jurosMes (valorTotal, valorTaxa, valorParcela){

    let saldo = valorTotal
    let taxa = valorTaxa
    let parcelas = valorParcela

    for (let i = 1; i <= parcelas; i++) {

        saldo * (taxa / 100)

    }
}
function totalMes (){

}
function saldoDevedor (){}

