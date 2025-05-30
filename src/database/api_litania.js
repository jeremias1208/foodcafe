const axios = require("axios");
const fs = require("fs");

// Configuração
const API_URL = "http://localhost:5500/litanias";
const JSON_FILE = "Litanias.json";

async function main() {
  try {
    // 1. Buscar litanias da API
    console.log(`Buscando litanias de ${API_URL}...`);
    const response = await axios.get(API_URL);
    const litanias = Array.isArray(response.data)
      ? response.data
      : [response.data];

    // 2. Processar e salvar os litanias no ficheiro JSON
    console.log(`Processando ${litanias.length} litanias...`);
    salvarlitanias(litanias);

    console.log("Dados salvos com sucesso!");

    // 3. Mostrar estatísticas
    mostrarEstatisticas();
  } catch (error) {
    console.error("Erro durante o processo:", error);
  }
}

function salvarlitanias(litanias) {
  // Carregar os dados existentes, se houver
  let dadosExistentes = [];
  if (fs.existsSync(JSON_FILE)) {
    const rawData = fs.readFileSync(JSON_FILE);
    dadosExistentes = JSON.parse(rawData);
  }

  // Adicionar os novos litanias
  const dadosAtualizados = [...dadosExistentes, ...litanias];

  // Salvar no ficheiro JSON
  fs.writeFileSync(JSON_FILE, JSON.stringify(dadosAtualizados, null, 2));
  console.log("litanias salvos no ficheiro JSON.");
}

function mostrarEstatisticas() {
  if (!fs.existsSync(JSON_FILE)) {
    console.log("Nenhum dado encontrado.");
    return;
  }

  const rawData = fs.readFileSync(JSON_FILE);
  const litanias = JSON.parse(rawData);

  console.log("\nEstatísticas:");
  console.log(`- Total de litanias: ${litanias.length}`);

  // Mostrar alguns litanias como exemplo
  console.log("\nAlguns litanias armazenados:");
  litanias.slice(0, 3).forEach((h) => console.log(`#${h.numero} - ${h.titulo}`));
}

// Executar o processo
main();
