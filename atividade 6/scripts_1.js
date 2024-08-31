// EXERCICIO 1

function verificarHabilitacao(idadePessoa, possuiCarteira) {

    // Se a pessoa tem 18 anos ou mais e possui carteira de motorista
    if (idadePessoa >= 18 && possuiCarteira) {
        return "Você está apto(a) a dirigir.";
    }
    // Se a pessoa tem 18 anos ou mais, mas não possui carteira de motorista
    else if (idadePessoa >= 18 && !possuiCarteira) {
        return "Você não está apto(a) a dirigir.";
    }
    // Se a pessoa tem menos de 18 anos
    else {
        return "Você não está apto(a) a dirigir devido à idade.";
    }
}


console.log(verificarHabilitacao(24, true));  // "Você está apto(a) a dirigir."
console.log(verificarHabilitacao(20, false)); // "Você não está apto(a) a dirigir."

