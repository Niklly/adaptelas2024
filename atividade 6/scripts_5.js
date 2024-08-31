// EXERCICIO 5

function verificarLimiteDeCaracteres(texto) {
    // Definindo o limite de caracteres
    const limite = 20;
    
    // Contando o número de caracteres na string fornecida
    const numeroDeCaracteres = texto.length;

    // Verificando se o número de caracteres excede, atinge ou é menor que o limite
    if (numeroDeCaracteres > limite) {
        console.log("O limite de caracteres foi excedido.");
    } else if (numeroDeCaracteres === limite) {
        console.log("Você atingiu o limite de caracteres.");
    } else {
        console.log("O limite de caracteres ainda não foi excedido...");
    }
}


verificarLimiteDeCaracteres("Aqui está um texto com exatamente vinte caracteres");
verificarLimiteDeCaracteres("Texto curto");
verificarLimiteDeCaracteres("Este texto definitivamente excede o limite de caracteres permitido pela função.");
