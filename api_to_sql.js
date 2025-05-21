const axios = require("axios");
const sqlite3 = require("sqlite3").verbose();

// Configurações
const API_URL = "http://localhost:5500/hinos";
const DB_FILE = "hinario.db";

// Criar conexão com o banco
const db = new sqlite3.Database(
  DB_FILE,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error("Erro ao conectar ao banco:", err.message);
    }
    console.log("Conectado ao banco SQLite");
  }
);

async function main() {
  try {
    // 1. Criar tabelas
    await criarTabelas();

    // 2. Buscar hinos da API
    console.log(`Buscando hinos de ${API_URL}...`);
    const response = await axios.get(API_URL);
    const hinos = Array.isArray(response.data)
      ? response.data
      : [response.data];

    // 3. Processar e salvar os hinos
    console.log(`Processando ${hinos.length} hinos...`);
    for (const hino of hinos) {
      await salvarHino(hino);
    }

    console.log("Dados salvos com sucesso!");

    // 4. (Opcional) Mostrar estatísticas
    await mostrarEstatisticas();
  } catch (error) {
    console.error("Erro durante o processo:", error);
  } finally {
    // Fechar conexão
    db.close();
    console.log("Conexão com o banco encerrada.");
  }
}

function criarTabelas() {
  return new Promise((resolve, reject) => {
    // Executar todas as queries sequencialmente
    db.serialize(() => {
      db.run(
        `
                CREATE TABLE IF NOT EXISTS idiomas (
                    id INTEGER PRIMARY KEY,
                    nome TEXT NOT NULL,
                    createdAt TEXT,
                    updatedAt TEXT
                )`,
        (err) => {
          if (err) return reject(err);

          db.run(
            `
                    CREATE TABLE IF NOT EXISTS hinos (
                        id INTEGER PRIMARY KEY,
                        numero INTEGER NOT NULL,
                        titulo TEXT NOT NULL,
                        letra TEXT,
                        createdAt TEXT,
                        updatedAt TEXT,
                        idiomaId INTEGER,
                        FOREIGN KEY (idiomaId) REFERENCES idiomas(id)
                    )`,
            (err) => {
              if (err) return reject(err);
              resolve();
            }
          );
        }
      );
    });
  });
}

function salvarHino(hino) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Primeiro salva o idioma se existir
      if (hino.Idioma) {
        db.run(
          `INSERT OR IGNORE INTO idiomas (id, nome, createdAt, updatedAt) 
                     VALUES (?, ?, ?, ?)`,
          [
            hino.Idioma.id,
            hino.Idioma.nome,
            hino.Idioma.createdAt,
            hino.Idioma.updatedAt,
          ],
          (err) => {
            if (err)
              console.error(
                `Erro ao salvar idioma ${hino.Idioma.id}:`,
                err.message
              );
          }
        );
      }

      // Depois salva o hino
      db.run(
        `INSERT OR REPLACE INTO hinos 
                 (id, numero, titulo, letra, createdAt, updatedAt, idiomaId) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          hino.id,
          hino.numero,
          hino.titulo,
          hino.letra,
          hino.createdAt,
          hino.updatedAt,
          hino.idiomaId,
        ],
        (err) => {
          if (err) {
            console.error(`Erro ao salvar hino ${hino.id}:`, err.message);
            return reject(err);
          }
          console.log(`Hino ${hino.numero} - "${hino.titulo}" salvo.`);
          resolve();
        }
      );
    });
  });
}

function mostrarEstatisticas() {
  return new Promise((resolve) => {
    db.get("SELECT COUNT(*) as total FROM hinos", (err, hinos) => {
      if (err) console.error("Erro ao contar hinos:", err.message);

      db.get("SELECT COUNT(*) as total FROM idiomas", (err, idiomas) => {
        if (err) console.error("Erro ao contar idiomas:", err.message);

        console.log("\nEstatísticas:");
        console.log(`- Total de hinos: ${hinos?.total || 0}`);
        console.log(`- Total de idiomas: ${idiomas?.total || 0}`);

        // Mostrar alguns hinos como exemplo
        db.all("SELECT id, numero, titulo FROM hinos LIMIT 3", (err, rows) => {
          if (!err && rows?.length) {
            console.log("\nAlguns hinos armazenados:");
            rows.forEach((h) => console.log(`#${h.numero} - ${h.titulo}`));
          }
          resolve();
        });
      });
    });
  });
}

// Executar o processo
main();
