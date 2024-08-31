// EXERCICIO 6

function calcularValorFinal(pedidoTotal) {
    const LIMITE_PARA_DESCONTO = 200.00; // Limite para aplicar desconto
    const TAXA_DE_DESCONTO = 0.10; // Taxa de desconto de 10%

    // Verifica se o valor do pedido é maior que o limite para desconto
    if (pedidoTotal > LIMITE_PARA_DESCONTO) {
        // Calcula o valor do desconto
        const valorDesconto = pedidoTotal * TAXA_DE_DESCONTO;
        // Calcula o valor total após aplicar o desconto
        const totalComDesconto = pedidoTotal - valorDesconto;
        // Exibe o valor total com desconto e o valor do desconto
        console.log(`O valor total do pedido com desconto é de R$ ${totalComDesconto.toFixed(2)}`);
        console.log(`O desconto aplicado foi de R$ ${valorDesconto.toFixed(2)}`);
    } else {
        // Exibe o valor total sem desconto
        console.log(`O valor total do pedido é de R$ ${pedidoTotal.toFixed(2)}`);
    }
}

// Exemplo de valor total 
const valorDoPedido = 150.00; // Substitua pelo valor desejado

// Chama a função para calcular e exibir o valor final do pedido
calcularValorFinal(valorDoPedido);
