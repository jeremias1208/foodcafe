const axios = require("axios");
const fs = require("fs");

// Configuração
const API_URL = "http://localhost:5500/invocatorias";
const JSON_FILE = "Invocatorias.json";

async function main() {
  try {
    // 1. Buscar invocatorias da API
    console.log(`Buscando invocatorias de ${API_URL}...`);
    const response = await axios.get(API_URL);
    const invocatorias = Array.isArray(response.data)
      ? response.data
      : [response.data];

    // 2. Processar e salvar os invocatorias no ficheiro JSON
    console.log(`Processando ${invocatorias.length} invocatorias...`);
    salvarinvocatorias(invocatorias);

    console.log("Dados salvos com sucesso!");

    // 3. Mostrar estatísticas
    mostrarEstatisticas();
  } catch (error) {
    console.error("Erro durante o processo:", error);
  }
}

function salvarinvocatorias(invocatorias) {
  // Carregar os dados existentes, se houver
  let dadosExistentes = [];
  if (fs.existsSync(JSON_FILE)) {
    const rawData = fs.readFileSync(JSON_FILE);
    dadosExistentes = JSON.parse(rawData);
  }

  // Adicionar os novos invocatorias
  const dadosAtualizados = [...dadosExistentes, ...invocatorias];

  // Salvar no ficheiro JSON
  fs.writeFileSync(JSON_FILE, JSON.stringify(dadosAtualizados, null, 2));
  console.log("invocatorias salvos no ficheiro JSON.");
}

function mostrarEstatisticas() {
  if (!fs.existsSync(JSON_FILE)) {
    console.log("Nenhum dado encontrado.");
    return;
  }

  const rawData = fs.readFileSync(JSON_FILE);
  const invocatorias = JSON.parse(rawData);

  console.log("\nEstatísticas:");
  console.log(`- Total de invocatorias: ${invocatorias.length}`);

  // Mostrar alguns invocatorias como exemplo
  console.log("\nAlguns invocatorias armazenados:");
  invocatorias.slice(0, 3).forEach((h) => console.log(`#${h.numero} - ${h.titulo}`));
}

// Executar o processo
main();
