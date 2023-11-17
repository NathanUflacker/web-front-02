const botaoAbrir = document.querySelector('button');
const poupup = document.querySelector('.poupup-wrapper')


botaoAbrir.addEventListener("click", function(){
    poupup.classList.add('d-block');
})

poupup.addEventListener("click", function(event){
    const clickofElement = event.target.classList[0];
    const classNameArray = ["poupup-close", "poupup-link", "poupup-wrapper"]
    const isClassList = classNameArray.includes(clickofElement)

    if (isClassList) {
        poupup.classList.remove("d-block")
    }
})