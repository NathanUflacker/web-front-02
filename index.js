// trazendo o pompt-sync para o nosso projeto - npm i prompt-sync

const leia = require('prompt-sync')()

function getUserInfo(){ 
    let altura = parseFloat(leia("Digite sua altura: "))
    let peso = parseFloat(leia("Digite seu peso: "))

    return {
        // objeto
        pesoInformado: peso,
        alturaInformada: altura
    }
}

function calcImc(alturaDoUsuario, pesoDoUsuario){
    return pesoDoUsuario / alturaDoUsuario**2
    // precisa, por si só, fazer sentido.
}

// function calcImc(alturaDoUsuario = 0, pesoDoUsuario){ <-- "alturaDoUsuario" recebe um valor padrão, caso seja uma variavel recebe o valor inputado, senão recebe o padrão
//     return pesoDoUsuario / alturaDoUsuario**2
//     precisa, por si só, fazer sentido.
// }

function main(){
    let peso = getUserInfo().pesoInformado // ta com erro
    let altura = getUserInfo().alturaInformada //ta com erro
    let imc = calcImc(altura, peso)
    console.log(`Seu IMC é ${imc}`)
}


// Arrow Function

function imprimir(idade){
    console.log(idade)
}

const idade = (idade) => console.log(idade) // Forma reduzida de fazer uma função


// Função anônima
btn1.addEventListener('click', ()=> {
    console.log("Hello")
})