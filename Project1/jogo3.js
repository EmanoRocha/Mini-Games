const numeroAleatorio =parseInt(Math.random() * 100);  
 let resposta;
do {
    resposta = (prompt("Adivinhe o número (entre 1 e 100):"));
    if (isNaN(resposta)) {
        alert("Por favor, insira um número válido.");
    } else if (resposta > numeroAleatorio) {
        alert("Alto! Tente novamente.");
    } else if (resposta < numeroAleatorio) {
        alert("Baixo! Tente novamente.");
    } else {
        alert("Parabéns! Você acertou o número.");
    }
} while (resposta !== numeroAleatorio); 