
const capa = document.getElementById("capa");
const filme = document.getElementById("filme");
const imagemCena = document.getElementById("imagemCena");
const numeroCena = document.getElementById("numeroCena");
const categoria = document.getElementById("categoria");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const pergunta = document.getElementById("pergunta");
const escolhas = document.getElementById("escolhas");
const progresso = document.getElementById("progresso");
const voltar = document.getElementById("voltar");

let cenaAtual = "inicio";
let caminho = [];
let cenasVisitadas = new Set();

function abrirFilme() {
  capa.classList.add("hidden");
  filme.classList.remove("hidden");
  mostrarCena("inicio", false);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function mostrarCena(id, guardar = true) {
  const cena = historia[id];

  if (!cena) {
    console.error("Cena não encontrada:", id);
    return;
  }

  if (guardar && cenaAtual !== id) {
    caminho.push(cenaAtual);
  }

  cenaAtual = id;
  cenasVisitadas.add(id);

  filme.classList.remove("hidden");
  capa.classList.add("hidden");

  categoria.textContent = cena.capitulo || "NOSSA HISTÓRIA";
  titulo.textContent = cena.titulo || "";
  texto.textContent = cena.texto || "";
  pergunta.textContent = cena.pergunta || "";

  numeroCena.textContent = cena.final
    ? "UMA POSSIBILIDADE"
    : "CENA " + String(cenasVisitadas.size).padStart(2, "0");

  const imagem = cena.imagem;
  imagemCena.style.backgroundImage =
    `linear-gradient(0deg, rgba(16,14,18,.5), transparent 50%), url("${imagem}")`;

  progresso.style.width = cena.final
    ? "100%"
    : Math.min(95, cenasVisitadas.size * 9) + "%";

  escolhas.replaceChildren();

  (cena.escolhas || []).forEach(opcao => {
    const botao = document.createElement("button");
    botao.className = "choice";
    botao.textContent = opcao.texto;
    botao.addEventListener("click", () => {
      mostrarCena(opcao.destino);
      salvarProgresso();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    escolhas.appendChild(botao);
  });

  voltar.style.visibility = caminho.length ? "visible" : "hidden";

  document.title = `${cena.titulo} | Nossa História`;

  salvarProgresso();
}

function voltarCena() {
  if (!caminho.length) return;

  const anterior = caminho.pop();
  mostrarCena(anterior, false);
  salvarProgresso();
}

function irInicio() {
  caminho = [];
  cenasVisitadas.clear();
  cenaAtual = "inicio";
  capa.classList.remove("hidden");
  filme.classList.add("hidden");
  document.title = "E se tivesse sido diferente?";
  salvarProgresso();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function salvarProgresso() {
  try {
    localStorage.setItem("nossaHistoriaProgresso", JSON.stringify({
      cenaAtual,
      caminho,
      cenasVisitadas: [...cenasVisitadas]
    }));
  } catch (erro) {
    console.warn("Não foi possível salvar o progresso.", erro);
  }
}

function carregarProgresso() {
  try {
    const salvo = localStorage.getItem("nossaHistoriaProgresso");
    if (!salvo) return;

    const dados = JSON.parse(salvo);

    if (!historia[dados.cenaAtual]) return;

    cenaAtual = dados.cenaAtual;
    caminho = Array.isArray(dados.caminho)
      ? dados.caminho.filter(id => historia[id])
      : [];

    cenasVisitadas = new Set(
      Array.isArray(dados.cenasVisitadas)
        ? dados.cenasVisitadas.filter(id => historia[id])
        : []
    );
  } catch (erro) {
    console.warn("O progresso salvo não pôde ser carregado.", erro);
  }
}

document.getElementById("comecar").addEventListener("click", abrirFilme);
document.getElementById("logo").addEventListener("click", evento => {
  evento.preventDefault();
  irInicio();
});
document.getElementById("inicioNav").addEventListener("click", irInicio);

document.getElementById("historiaNav").addEventListener("click", () => {
  if (filme.classList.contains("hidden")) {
    abrirFilme();
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

document.getElementById("decisoesNav").addEventListener("click", () => {
  document.getElementById("pergunta").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

voltar.addEventListener("click", voltarCena);

carregarProgresso();
