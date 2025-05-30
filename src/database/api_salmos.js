const axios = require("axios");
const fs = require("fs");

// Configuração
const API_URL = "http://localhost:5500/salmos";
const JSON_FILE = "Salmos.json";

async function main() {
  try {
    // 1. Buscar salmosda API
    console.log(`Buscando salmosde ${API_URL}...`);
    const response = await axios.get(API_URL);
    const salmos= Array.isArray(response.data)
      ? response.data
      : [response.data];

    // 2. Processar e salvar os salmosno ficheiro JSON
    console.log(`Processando ${salmos.length} hinos...`);
    salvarHinos(salmos);

    console.log("Dados salvos com sucesso!");

    // 3. Mostrar estatísticas
    mostrarEstatisticas();
  } catch (error) {
    console.error("Erro durante o processo:", error);
  }
}

function salvarHinos(salmos) {
  // Carregar os dados existentes, se houver
  let dadosExistentes = [];
  if (fs.existsSync(JSON_FILE)) {
    const rawData = fs.readFileSync(JSON_FILE);
    dadosExistentes = JSON.parse(rawData);
  }

  // Adicionar os novos hinos
  const dadosAtualizados = [...dadosExistentes, ...salmos];

  // Salvar no ficheiro JSON
  fs.writeFileSync(JSON_FILE, JSON.stringify(dadosAtualizados, null, 2));
  console.log("salmossalvos no ficheiro JSON.");
}

function mostrarEstatisticas() {
  if (!fs.existsSync(JSON_FILE)) {
    console.log("Nenhum dado encontrado.");
    return;
  }

  const rawData = fs.readFileSync(JSON_FILE);
  const salmos= JSON.parse(rawData);

  console.log("\nEstatísticas:");
  console.log(`- Total de hinos: ${salmos.length}`);

  // Mostrar alguns salmoscomo exemplo
  console.log("\nAlguns salmosarmazenados:");
  salmos.slice(0, 3).forEach((h) => console.log(`#${h.numero} - ${h.titulo}`));
}

// Executar o processo
main();
