const peça = "rei"
console.log (peça.toUpperCase()) 

switch (peça.toUpperCase()) {
    case "PEÃO":
        console.log ("Duas para frente se for o primeiro movimento, se não uma para frente");
        break;
    case "TORRE":
        console.log ("Horizontal e vertical")
        break;
    case "BISPO":
        console.log ("Diagonais");
        break;
    case "CAVALO":
        console.log ("Duas casas horizontal ou vertical seguido por uma casa perpendicular ao movimento inicial");
        break;
    case "RAINHA":
        console.log ("Horizontal, vertical e diagonais");
        break;
    case "REI":
        console.log ("Uma casa em qualquer direçao desde que não se coloque em cheque");
        break;
    default:
        console.log ("Erro peça inválida");
        break;
}
