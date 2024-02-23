const btn1 = document.querySelector('button')

// Pega a lista de filmes
const listaFilme = document.querySelector('#listaFilmes')

//Cria o elemento Li
const itemLista = document.createElement('li')

//Pega o input
const textoUsuario = document.querySelector('#filmeInput')

btn1.addEventListener('click', ()=> {
    // Adiciona um Li a lsita
    listaFilme.append(itemLista)
    // adiciona o texto do input na lista
    itemLista.innerHTML = textoUsuario.value
    //adiciona uma classe
    // itemLista.classList.add(active)
    //muda o css
    itemLista.style.backgroundColor = 'red'
})