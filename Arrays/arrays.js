// const numeros = ['olá', '12', true, {}, 'Nathan']

// const [saudacao, numero, boleano, objeto, aluno] = numeros
// // const [saudacao,...resto] = numeros  resto guarda todo o restante das informações enquanto saudacao guarda 1

// // Spread e Rest

// numeros[4] = 'Carol'
// console.log(numeros.length)

// //  Desestruturação

// ---- inicio da aula ----

const listaFilmes = document.querySelector('#listaFilmes');
const filmeInput = document.querySelector('#filmeInput');
const btn1 = document.querySelector('#butao');
const filmes = [{
    nome: 'Harry Potter',
    lancamento: 2001,
    genero: 'fantasia',
    atores: {
        ator1: 'leonardo DCaprio'
    }
},   {
    nome: 'Vovozona',
    lancamento: 2000,
    genero: 'comedia'
}];
// filmes.push('Branquelas')
// filmes.pop()

window.onload = function carregarFilmes(){ // "filmes.length" define quantos itens vao ser criados
    for(let i=0; i < filmes.length; i++){
        let itemLista = document.createElement('li'); //criando o elemento
        listaFilmes.append(itemLista)
        itemLista.innerHTML = filmes[i].nome

        let anoLancamento = document.createElement('li');
        itemLista.append(anoLancamento);
        anoLancamento.innerHTML = filmes[i].lancamento
    }
}

filmes.forEach((meuElemento)=>{
    console.log(meuElemento)
})

// btn1.addEventListener('click', ()=>{
//     let filmeDigitado = filmeInput.value()
//     filmes.push(filmeDigitado)
// })

// Pesquisar Array methods

