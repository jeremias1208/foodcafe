const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Configurações
const BASE_URL = "http://localhost:5500";
const DATA_FOLDER = path.join(__dirname, "dados");

const ENDPOINTS = {
  oracoes: "oracoes",
  hinos: "hinos",
  litanias: "litanias",
  salmos: "salmos",
  invocatorias: "invocatorias",
};

async function main() {
  // Criar pasta se não existir
  if (!fs.existsSync(DATA_FOLDER)) {
    fs.mkdirSync(DATA_FOLDER, { recursive: true });
  }

  for (const [tipo, endpoint] of Object.entries(ENDPOINTS)) {
    const url = `${BASE_URL}/${endpoint}`;
    const filePath = path.join(DATA_FOLDER, `${capitalize(tipo)}.json`);
    try {
      console.log(`🔄 Buscando ${tipo} de ${url}`);
      const response = await axios.get(url);
      const dados = Array.isArray(response.data)
        ? response.data
        : [response.data];

      const count = salvarDadosSemDuplicar(filePath, dados);
      console.log(`✅ ${count} novos ${tipo} adicionados em ${filePath}\n`);
    } catch (error) {
      console.error(`❌ Erro ao buscar ${tipo}:`, error.message);
    }
  }

  console.log("✅ Todos os dados processados!");
}

function salvarDadosSemDuplicar(filePath, novosDados) {
  let dadosExistentes = [];
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath);
    dadosExistentes = JSON.parse(raw);
  }

  const numerosExistentes = new Set(dadosExistentes.map((d) => d.numero));
  const dadosFiltrados = novosDados.filter((d) => !numerosExistentes.has(d.numero));
  const dadosAtualizados = [...dadosExistentes, ...dadosFiltrados];

  if (dadosFiltrados.length > 0) {
    fs.writeFileSync(filePath, JSON.stringify(dadosAtualizados, null, 2));
  }

  return dadosFiltrados.length;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Executar
main();
