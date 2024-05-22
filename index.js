var SetaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var Samantha = window.document.getElementById("Samantha")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
  Bruna.style = "display:none"
  Samantha.style = "display:flex"
  SetaDireita.style = "display:none"
  SetaEsquerda.style = "display:flex"
}
function RolarParaEsquerda() {
  Bruna.style = "display:flex"
  Samantha.style = "display:none"
  SetaDireita.style = "display:flex"
  SetaEsquerda.style = "display:none"
}
