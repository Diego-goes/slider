// Clicar
// Arrastar
// Soltar

// Mousedown
// inicia evento
// 	mousemove
// 	atualiza a posição
// mouseup
// encerra eventos e retorna ultima posição

let slides = document.querySelectorAll('.slides')
let div_slider = document.querySelector('#div_slider')

let posicaoCaixa = 0
// let getPosicaoCaixa = () => { return slides[0].getBoundingClientRect().x }
let ultimasPosicoes = [0]

div_slider.addEventListener('mousedown', (e) => {
    div_slider.addEventListener('mousemove', arrastar)
})
div_slider.addEventListener('mouseup', (e) => {
    div_slider.removeEventListener('mousemove', arrastar)
    zerarContador()
})
function zerarContador() {
    distanciaPx = 0
    ultimasPosicoes = [0]
}
function arrastar(e) {
    let posicaoMouse = e.clientX
    ultimasPosicoes.push(posicaoMouse)
    if (ultimasPosicoes[0] != 0) {
        let distanciaPx = calcDistanciaPx(ultimasPosicoes)
        slides[0].style.marginLeft = `${direcaoMovimento(distanciaPx)}px`
    }
    atualizarUltimasPosicoes()
}
function atualizarUltimasPosicoes(){
    ultimasPosicoes = [ultimasPosicoes[1]]
}
function calcDistanciaPx() {
    return Math.sqrt((ultimasPosicoes[0] - ultimasPosicoes[1]) ** 2)
}
function direcaoMovimento(distanciaPx) {
    ultimasPosicoes[0] < ultimasPosicoes[1] ?
        posicaoCaixa += distanciaPx :
        posicaoCaixa -= distanciaPx
    return posicaoCaixa
}