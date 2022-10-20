const colors = ["green", "red", "red", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
   //quero retornar um número entre 0 e 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

// agora uma função que vai efetivamente gerar esse número randômico dentro do array, vamo lá!

getRandomNumber = () => {
    return Math.floor(Math.random()*colors.length);
}