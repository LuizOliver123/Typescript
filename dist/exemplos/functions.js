"use strict";
//function somarValoresNumericos(numero1: number, numero2: number): number {
//    return numero1 + numero2.toString();
//}
//ESTABELECENDO O PARÂMETRO COMO NUMBER NÃO HÁ POSSIBILIDADE DE ERRO. SE HOUVER O ERRO DE COLOCAR TO.STRING();
/*
function somarValoresNumericos(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

console.log(somarValoresNumericos(1, 3));

function printaValoresNumericos(numero1: number, numero2: number): void {
    console.log(numero1 + numero2);
}

*/
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
