const angulo1 = 90
const angulo2 = 45
const angulo3 = 45

let soma= angulo1+angulo2+angulo3

if (angulo1 < 1 || angulo2 < 1 || angulo3 < 1) {
    console.log ("Erro, ângulos inválidos")
} else {
    let resultado = (soma === 180) 
    console.log (resultado)
}