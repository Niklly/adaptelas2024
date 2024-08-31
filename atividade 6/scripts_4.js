// EXERCICIO 4

function mostrarDecrescente(numeroInicial) {
    // Começa com o número inicial e decrementa até chegar a 0
    while (numeroInicial >= 0) {
        console.log(numeroInicial);  // Mostra o número atual no console
        numeroInicial = numeroInicial - 1;  // Diminui o número em 1
    }
}


mostrarDecrescente(5);  // Deve exibir: 5, 4, 3, 2, 1, 0
