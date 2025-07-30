<h1>Desafio de projeto do João Filho: Mario Kart.JS</h1>

<table>
    <tr>
        <td>
            <img src="./docs/header.gif" alt="Mario Kart" width="200">
        </td>
        <td>
            <b>Objetivo:</b>
            <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. O desafio foi criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            <p>Este projeto foi desenvolvido em <b>Node.js</b> e executado via terminal, utilizando lógica de dados, sorteios aleatórios, e confrontos dinâmicos entre personagens do universo Mario. A corrida ocorre em cinco rodadas com interações baseadas nos atributos dos personagens.</p>
        </td>
    </tr>
</table>

---

<h2>🎮 Players</h2>

<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Mario</p>
            <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 4</p>
            <p>Manobrabilidade: 3</p>
            <p>Poder: 3</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Peach</p>
            <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 3</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 2</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Yoshi</p>
            <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 2</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 3</p>
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Bowser</p>
            <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 5</p>
            <p>Manobrabilidade: 2</p>
            <p>Poder: 5</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Luigi</p>
            <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 3</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 4</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Donkey Kong</p>
            <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 2</p>
            <p>Manobrabilidade: 2</p>
            <p>Poder: 5</p>
        </td>
    </tr>
</table>

---

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<ul>
  <li>O jogador escolhe seu personagem no terminal</li>
  <li>O computador escolhe aleatoriamente um personagem oponente</li>
</ul>

<b>Pistas:</b>

<ul>
  <li>Os personagens irão competir por 5 rodadas em uma pista aleatória</li>
  <li>Em cada rodada, será sorteado um tipo de bloco:
    <ul>
      <li><b>RETA:</b> cada jogador rola um dado de 6 lados + VELOCIDADE. Quem tiver maior valor ganha 1 ponto.</li>
      <li><b>CURVA:</b> cada jogador rola um dado + MANOBRABILIDADE. Quem tiver maior valor ganha 1 ponto.</li>
      <li><b>CONFRONTO:</b> cada jogador rola um dado + PODER. O perdedor pode:
        <ul>
          <li>Perder pontos com penalidades (casco: -1 ponto, bomba: -12 pontos, mas limitado aos pontos disponíveis)</li>
          <li>O vencedor pode ganhar um TURBO extra (+1 ponto com 50% de chance)</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Os pontos nunca podem ser negativos</li>
</ul>

<b>Condição de vitória:</b>

<ul>
  <li>Vence quem tiver mais pontos após as 5 rodadas</li>
</ul>

---

<h3>🚀 Como rodar o projeto</h3>

1. Certifique-se de ter o Node.js instalado.
2. Clone este repositório.
3. No terminal, execute:
   ```bash
   node index.js
4. Siga as instruções no terminal para jogar.

<h3>🛠️ Tecnologias utilizadas</h3>
Node.js

JavaScript (ES6+)

readline (interface CLI)

Simulação com Math.random() e Math.floor()


<h3>📸 Prévia</h3> <p><i>Personagens enfrentando-se em uma corrida dinâmica por blocos variados!</i></p> <img src="./docs/preview.gif" alt="Prévia Mario Kart.JS">
<h3>📄 Licença</h3>
MIT © João Filho