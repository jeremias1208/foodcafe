const axios = require("axios");
const fs = require("fs");

// Configuração
const API_URL = "http://localhost:5500/oracoes";
const JSON_FILE = "Oracoes.json";

async function main() {
  try {
    // 1. Buscar oracoes da API
    console.log(`Buscando oracoes de ${API_URL}...`);
    const response = await axios.get(API_URL);
    const oracoes = Array.isArray(response.data)
      ? response.data
      : [response.data];

    // 2. Processar e salvar os oracoes no ficheiro JSON
    console.log(`Processando ${oracoes.length} oracoes...`);
    salvaroracoes(oracoes);

    console.log("Dados salvos com sucesso!");

    // 3. Mostrar estatísticas
    mostrarEstatisticas();
  } catch (error) {
    console.error("Erro durante o processo:", error);
  }
}

function salvaroracoes(oracoes) {
  // Carregar os dados existentes, se houver
  let dadosExistentes = [];
  if (fs.existsSync(JSON_FILE)) {
    const rawData = fs.readFileSync(JSON_FILE);
    dadosExistentes = JSON.parse(rawData);
  }

  // Adicionar os novos oracoes
  const dadosAtualizados = [...dadosExistentes, ...oracoes];

  // Salvar no ficheiro JSON
  fs.writeFileSync(JSON_FILE, JSON.stringify(dadosAtualizados, null, 2));
  console.log("oracoes salvos no ficheiro JSON.");
}

function mostrarEstatisticas() {
  if (!fs.existsSync(JSON_FILE)) {
    console.log("Nenhum dado encontrado.");
    return;
  }

  const rawData = fs.readFileSync(JSON_FILE);
  const oracoes = JSON.parse(rawData);

  console.log("\nEstatísticas:");
  console.log(`- Total de oracoes: ${oracoes.length}`);

  // Mostrar alguns oracoes como exemplo
  console.log("\nAlguns oracoes armazenados:");
  oracoes.slice(0, 3).forEach((h) => console.log(`#${h.numero} - ${h.titulo}`));
}

// Executar o processo
main();
