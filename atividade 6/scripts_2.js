// EXERCICIO 2

function verificarMaiorNumero(numero1, numero2) {
    // Verifica se o primeiro número é maior que o segundo
    if (numero1 > numero2) {
        return `O número ${numero1} é maior que ${numero2}.`;
    }
    // Verifica se o segundo número é maior que o primeiro
    else if (numero2 > numero1) {
        return `O número ${numero2} é maior que ${numero1}.`;
    }
    // Se nenhum dos casos anteriores for verdadeiro, então os números são iguais
    else {
        return "Os dois números são iguais.";
    }
}


console.log(verificarMaiorNumero(5, 2)); // O número 5 é maior que 2.
console.log(verificarMaiorNumero(2, 5)); // O número 5 é maior que 2.
console.log(verificarMaiorNumero(4, 4)); // Os dois números são iguais.
