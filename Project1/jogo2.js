const celulas = document.querySelectorAll('[data-celula]');
const mensagem = document.getElementById('mensagem');
const reiniciar = document.getElementById('reiniciar');
let turnoO = false;

const combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

document.addEventListener('click', e => {
    if (e.target.matches('[data-celula]') && !e.target.textContent) {
        jogar(e.target, turnoO ? 'O' : 'X');
        turnoO = !turnoO;
        if (turnoO) jogadaMaquina();
    } else if (e.target.matches('#reiniciar')) {
        reiniciarJogo();
    }
});

function jogar(celula, simbolo) {
    celula.textContent = simbolo;
    celula.classList.add(`jogador${simbolo}`);
    if (verificarVencedor(simbolo)) {
        fimDeJogo(false);
    } else if (verificarEmpate()) {
        fimDeJogo(true);
    }
}

function jogadaMaquina() {
    const indicesDisponiveis = Array.from(celulas).filter(c => !c.textContent);
    const escolha = indicesDisponiveis[Math.floor(Math.random() * indicesDisponiveis.length)];
    if (escolha) jogar(escolha, 'O');
    turnoO = !turnoO;
}

function verificarVencedor(simbolo) {
    return combinacoesVencedoras.some(combinacao => {
        return combinacao.every(index => {
            return celulas[index].textContent === simbolo;
        });
    });
}

function verificarEmpate() {
    return Array.from(celulas).every(c => c.textContent);
}

function fimDeJogo(empate) {
    if (empate) {
        mensagem.textContent = 'Empate!';
    } else {
        mensagem.textContent = `${turnoO ? 'O' : 'X'} Venceu!`;
    }
    reiniciar.style.display = 'block';
}

function reiniciarJogo() {
    celulas.forEach(celula => {
        celula.textContent = '';
        celula.classList.remove('jogadorX', 'jogadorO');
    });
    mensagem.textContent = '';
    turnoO = false;
    reiniciar.style.display = 'none';
}

reiniciar.style.display = 'none';