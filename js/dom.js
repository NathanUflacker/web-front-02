// criando variáveis
const tirarDiv = document.querySelector(".tirarDiv");
const voltarDiv = document.querySelector(".voltarDiv");
const card = document.querySelector(".card");

//criando funções

tirarDiv.addEventListener("click", function(){
    card.style.display = "none";
})                      //função anonima

voltarDiv.addEventListener("click", function(){
    card.style.display = "block"
})

// function clica(){
//     alert('Olá');
// } 