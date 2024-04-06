const palavras = ['tecnologia', 'programacao', 'computador', 'teclado', 'monitor'];
const palavra = palavras[Math.floor(Math.random() * palavras.length)];
let estadoJogo = '_'.repeat(palavra.length).split('');
let tentativasRestantes = 5;
let tentativas = new Set();

document.getElementById('tentar').addEventListener('click', () => {
    const letra = document.getElementById('entradaLetra').value;
    document.getElementById('entradaLetra').value = ''; // Limpa o campo de entrada
    if (letra.length !== 1 || tentativas.has(letra) || tentativasRestantes === 0) {
        return;
    }

    tentativas.add(letra);
    document.getElementById('letrasTentadas').innerText += ` ${letra}`;

    if (palavra.includes(letra)) {
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i] === letra) estadoJogo[i] = letra;
        }
        document.getElementById('palavra').innerText = estadoJogo.join(' ');
    } else {
        tentativasRestantes--;
        document.getElementById('tentativasRestantes').innerText = `Tentativas restantes: ${tentativasRestantes}`;
    }

    if (estadoJogo.join('') === palavra) {
        alert("Parabéns! Você descobriu a palavra!");
    } else if (tentativasRestantes === 0) {
        alert(`Game over! A palavra era: ${palavra}`);
    }
});