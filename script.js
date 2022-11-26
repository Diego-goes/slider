// let div_slider = document.querySelector('#div_slider');
// let qtdSlides = 5
// function criarImg(){
//     let img = document.createElement('img')
//     img.src = '/calculadora.JPG'
//     return img
// }

// for(let i=0; i<qtdSlides; i++) {
//     div_slider.appendChild(criarImg())
// }
// CLicar em cima
// Arrastar
// Soltar

// Mousedown
// inicia evento
// 	mousemove
// 	atualiza a posição
// mouseup
// encerra eventos e retorna ultima posição

let slides = document.querySelectorAll('.slides')
// slides[0].style.marginLeft = '-100px'

let posicaoCaixa = slides[0].getBoundingClientRect().x
let posicaoMouse = 0
let ultimaPosicao = [0,0]
let div_slider = document.querySelector('#div_slider')

div_slider.addEventListener('mousedown', (e) => {
    div_slider.addEventListener('mousemove', arrastar)
    console.log(`Inicio: ${posicaoCaixa}`)
})
div_slider.addEventListener('mouseup', (e) => {
    console.log(`Final: ${posicaoCaixa}`)
    div_slider.removeEventListener('mousemove', arrastar)
})
function arrastar(e) {
    console.log(`posicaoCaixa: ${posicaoCaixa}`)
    ultimaPosicao.push(e.clientX)
    posicaoMouse = e.clientX
    let distanciaPx = Math.sqrt((ultimaPosicao[0] - ultimaPosicao[1])**2)
    console.log(`distanciaPx: ${distanciaPx}`)
    ultimaPosicao[0] < e.clientX ?
        posicaoCaixa += distanciaPx :
        posicaoCaixa -= distanciaPx
    slides[0].style.marginLeft = `${posicaoCaixa}px`
    console.log(`MouseMove: ${posicaoMouse}`)
    ultimaPosicao = [ultimaPosicao[1]]
}

// slides[0].getBoundingClientRect().x - pega a posição do quadrado
// let distanciaX = 0
// div_slider.addEventListener('mousedown', (event)=>{
//     console.log(event.clientX)
// })
// div_slider.addEventListener('mouseup', (event)=>{
//     console.log(event.clientX)
// })
// Criar função que cria elementos IMG e os renderiza
// Criar função que retorna a distancia que o mouse arrastou no eixo X
// Criar função que altera a posição das imagens com um parametro