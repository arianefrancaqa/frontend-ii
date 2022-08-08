let readlineSync = require("readline-sync");
// Programaremos um pequeno jogo de Pedra, Papel ou Tesoura. Neste jogo o usuário poderá escolher entre uma das três opções e o computador escolherá aleatoriamente uma das três opções, essas opções serão então comparadas e no final será mostrado quem ganhou e quem perdeu a disputa. Para fazer essa atividade é importante lembrar das regras básicas deste jogo:

// Pedra ganha de Tesoura.
// Tesoura ganha de Papel.
// Papel ganha de Pedra.
let escolhasDoJogo = ["pedra", "papel", "tesoura"];
let escolhaRandomicaComputador = escolhasDoJogo[Math.floor((Math.random() * escolhasDoJogo.length))];
console.log(escolhaRandomicaComputador);

let nome = readlineSync.question(`
Qual seu nome? 
`);

function pedraPapelTesoura(escolhaJogadorA, escolhaJogadorB) {
    let resposta;

    console.log(`

        O Jogador ${nome} escolheu: ${escolhaJogadorA}
        O Computador escolheu: ${escolhaJogadorB}

        `);
    if (
        (escolhaJogadorA == "pedra" && escolhaJogadorB == "tesoura") ||
        (escolhaJogadorA == "tesoura" && escolhaJogadorB == "papel") ||
        (escolhaJogadorA == "papel" && escolhaJogadorB == "pedra")
    ) {
        resposta = console.log(`
        Jogador ${nome} ganhou
        `);
    } else if (escolhaJogadorA == escolhaJogadorB ) {
        resposta = "EMPATE!"
    }else if (escolhaJogadorA == escolhaJogadorB ) {
        resposta = "EMPATE!"
    }
    else {
        resposta = console.log(`
        O Computador ganhou
        `);
    }
    return resposta;
}

// Após termos as regras e o sistema com uma partida do jogo, ficará ao encargo das mesas de trabalho:

// Implementar uma regra de que só é declarado como ganhador, quem ganhou 2 rodadas, para auxiliar use uma variável para armazenar o vencedor de cada rodada;
// Empate no jogo, não dá pontuação para nenhum dos jogadores.
// Tente utilizar funções e a estrutura de decisão switch em seu código;
// Comente o código e utilize qualquer outro recurso para deixá-lo melhor formatado.

let escolhaJogador = readlineSync.question(`

BEM VINDO AO PEDRA PAPEL E TESOURA

Por favor digite uma das opcoes abaixo

-------------------------------//--------------------------
Digite 'Pedra' para jogar com a Pedra 
Digite 'Papel' para jogar com o Papel 
Digite 'Tesoura' para jogar com a Tesoura 

`);



pedraPapelTesoura(escolhaJogador.toLowerCase(), escolhaRandomicaComputador);
