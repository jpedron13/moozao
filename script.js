// Trailer do Amor
const frasesTrailer = [
  "Em um mundo onde dois corações se encontraram…",
  "Ela achava que era só mais um dia… até ele aparecer.",
  "Prepare-se para descobrir o quanto você me conhece.",
  "Está pronta para o Quiz do Amor?"
];

let fraseAtual = 0;

function mostrarFraseTrailer() {
  const fraseEl = document.getElementById("frase-trailer");
  fraseEl.textContent = frasesTrailer[fraseAtual];
  fraseAtual = (fraseAtual + 1) % frasesTrailer.length;
}

setInterval(mostrarFraseTrailer, 8000);
mostrarFraseTrailer();

function iniciarQuiz() {
  document.getElementById("trailer").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  mostrarPergunta();
}

// Quiz do Amor
const perguntas = [
  {
    pergunta: "Quanto foi o nosso primeiro beijo? 💋",
    opcoes: ["No Shopping Dom Pedro", "No seu carro", "Na minha casa", "Não houve beijo"],
    resposta: 3
  },
  {
    pergunta: "Qual minha comida favorita? 🍽️",
    opcoes: ["Pizza", "Sushi", "Lasanha", "Churrasco"],
    resposta: 3
  },
  {
    pergunta: "Qual apelido carinhoso eu te dou? 🐻",
    opcoes: ["Amorzinho", "Vida", "Neném"],
    resposta: 0
  },
  {
    pergunta: "Qual foi nosso primeiro filme juntos? 🎬",
    opcoes: ["A Culpa é das Estrelas", "Up - Altas Aventuras", "Como Eu Era Antes de Você", "Amores Materialistas"],
    resposta: 3
  }
];

let atual = 0;
let pontuacao = 0;
let respondeu = false;

function mostrarPergunta() {
  if (atual >= perguntas.length) {
    mostrarResultadoFinal();
    return;
  }

  const p = perguntas[atual];
  document.getElementById("pergunta").textContent = p.pergunta;
  document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao} pontos`;
  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("botao-proxima").style.display = "none";
  respondeu = false;

  p.opcoes.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.onclick = () => verificarResposta(i);
    opcoesDiv.appendChild(btn);
  });
}

function verificarResposta(i) {
  if (respondeu) return;
  respondeu = true;

  const correta = perguntas[atual].resposta;
  const feedback = document.getElementById("feedback");

  if (i === correta) {
    feedback.textContent = "Acertou! 😍 Você me conhece mesmo!";
    pontuacao += 5;
  } else {
    feedback.textContent = "Hmm... quase! 😅 Tenta lembrar melhor.";
  }

  document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao} pontos`;
  document.getElementById("botao-proxima").style.display = "inline-block";
}

function proximaPergunta() {
  atual++;
  mostrarPergunta();
}

function mostrarResultadoFinal() {
  const container = document.getElementById("quiz");
  container.innerHTML = `
    <h2>Resultado Final 💘</h2>
    <p>Sua pontuação: <strong>${pontuacao} pontos</strong></p>
  `;

  if (pontuacao >= 20) {
    container.innerHTML += `
      <p>🎉 Parabéns! Você realmente me conhece!</p>
      <img src="nos.jpg" alt="Nossa foto" style="width: 100%; border-radius: 10px; margin-top: 15px;" />
      <p style="margin-top: 15px;">Hoje comemoramos <strong>1 mês juntos</strong>, e cada dia ao seu lado é uma nova razão pra sorrir. Te amo! 💖</p>
    `;
  } else {
    container.innerHTML += `
      <p>Você foi bem! Mas acho que precisamos rever alguns momentos juntos 😅</p>
    `;
  }
}
