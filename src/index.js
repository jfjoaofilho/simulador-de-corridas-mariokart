const readline = require('readline');

const personagens = [
    { NOME: "Mario", VELOCIDADE: 4, MANOBRABILIDADE: 3, PODER: 3, PONTOS: 0 },
    { NOME: "Luigi", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 4, PONTOS: 0 },
    { NOME: "Peach", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 2, PONTOS: 0 },
    { NOME: "Bowser", VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 },
    { NOME: "Yoshi", VELOCIDADE: 2, MANOBRABILIDADE: 4, PODER: 3, PONTOS: 0 },
    { NOME: "Donkey Kong", VELOCIDADE: 2, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 }
];

// Cria interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Envolve pergunta em Promise
function perguntar(texto) {
    return new Promise(resolve => rl.question(texto, resolve));
}

// Escolher personagem do jogador
async function escolherPersonagemJogador() {
    const lista = personagens.map((p, i) => `${i + 1}. ${p.NOME}`).join('\n');
    const resposta = await perguntar(`Escolha seu personagem:\n${lista}\n> `);
    const index = parseInt(resposta) - 1;

    if (isNaN(index) || index < 0 || index >= personagens.length) {
        console.log("Escolha inválida. Encerrando.");
        process.exit(1);
    }

    return personagens.splice(index, 1)[0]; // Remove o escolhido da lista
}

// Escolha aleatória para o computador
function escolherPersonagemComputador() {
    const index = Math.floor(Math.random() * personagens.length);
    return personagens.splice(index, 1)[0];
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    if (random < 0.33) return "RETA";
    if (random < 0.66) return "CURVA";
    return "CONFRONTO";
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
        }

        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        }

        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);

            const penalidades = [
                { tipo: "casco", valor: 1 },
                { tipo: "bomba", valor: 2 },
            ];
            const sorteiaPenalidade = () => penalidades[Math.floor(Math.random() * penalidades.length)];
            const sorteiaTurbo = () => Math.random() < 0.5;

            if (powerResult1 > powerResult2) {
                let penalidade = sorteiaPenalidade();
                let perda = Math.min(penalidade.valor, character2.PONTOS);
                if (perda > 0){
                    character2.PONTOS -= perda;
                    console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} foi atingido por um ${penalidade.tipo} e perdeu ${perda} ponto(s) 💥`);
                }

                if (sorteiaTurbo()) {
                    character1.PONTOS++;
                    console.log(`${character1.NOME} ganhou um TURBO! +1 ponto 🚀`);
                }
            } else if (powerResult2 > powerResult1) {
                let penalidade = sorteiaPenalidade();
                let perda = Math.min(penalidade.valor, character1.PONTOS);
                character1.PONTOS -= perda;
                if (perda > 0){
                    console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} foi atingido por um ${penalidade.tipo} e perdeu ${perda} ponto(s) 💥`);
                }

                if (sorteiaTurbo()) {
                    character2.PONTOS++;
                    console.log(`${character2.NOME} ganhou um TURBO! +1 ponto 🚀`);
                }
            } else {
                console.log("Confronto empatado! Nenhum ponto foi perdido 🤝");
            }
        }

        // Verificando o vencedor da rodada (somente para reta ou curva)
        if (block !== "CONFRONTO") {
            if (totalTestSkill1 > totalTestSkill2) {
                console.log(`${character1.NOME} marcou um ponto!`);
                character1.PONTOS++;
            } else if (totalTestSkill2 > totalTestSkill1) {
                console.log(`${character2.NOME} marcou um ponto!`);
                character2.PONTOS++;
            }
        }

        console.log("_______________________________");
    }
}

async function declareWinner(character1, character2) {
    console.log("Resultado final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if (character1.PONTOS > character2.PONTOS)
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
    else if (character2.PONTOS > character1.PONTOS)
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
    else
        console.log("A corrida terminou em empate");
}

(async function main() {
    const player1 = await escolherPersonagemJogador();
    const player2 = escolherPersonagemComputador();

    console.log(`\n🏁🚨 Corrida entre ${player1.NOME} (VOCÊ) e ${player2.NOME} (COMPUTADOR) começando...\n`);
    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);

    rl.close(); // Fecha a interface no final
})();
