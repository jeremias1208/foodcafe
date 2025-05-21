import { openDatabase } from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

// Nome do banco de dados
const DB_NAME = "hinario.db";

// Função para inicializar o banco de dados
export const initDatabase = async () => {
  // Verifica se o banco já existe
  const sqliteDir = `${FileSystem.documentDirectory}SQLite`;
  const dirInfo = await FileSystem.getInfoAsync(sqliteDir);

  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(sqliteDir, { intermediates: true });
  }

  const dbPath = `${sqliteDir}/${DB_NAME}`;
  const fileInfo = await FileSystem.getInfoAsync(dbPath);

  if (!fileInfo.exists) {
    try {
      // Carrega o arquivo do banco de dados dos assets
      const asset = Asset.fromModule(require("../assets/hinario.db"));
      await asset.downloadAsync();

      // Copia o arquivo para o diretório SQLite
      await FileSystem.copyAsync({
        from: asset.localUri,
        to: dbPath,
      });
      console.log("Banco de dados copiado com sucesso");
    } catch (error) {
      console.error("Erro ao copiar banco de dados:", error);
      throw error;
    }
  }

  // Abre a conexão com o banco de dados
  const db = openDatabase(DB_NAME);
  return db;
};

// Função para executar queries
const executeQuery = async (sql, params = []) => {
  const db = openDatabase(DB_NAME);

  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          sql,
          params,
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error)
        );
      },
      (error) => reject(error)
    );
  });
};

// Métodos para acessar os hinos
export const getHinos = async () => {
  try {
    const query = `
      SELECT h.id, h.numero, h.titulo, h.letra, i.nome as idioma 
      FROM hinos h
      LEFT JOIN idiomas i ON h.idiomaId = i.id
      ORDER BY h.numero
    `;
    return await executeQuery(query);
  } catch (error) {
    console.error("Erro ao buscar hinos:", error);
    throw error;
  }
};

export const getHinoById = async (id) => {
  try {
    const query = `
      SELECT h.id, h.numero, h.titulo, h.letra, i.nome as idioma 
      FROM hinos h
      LEFT JOIN idiomas i ON h.idiomaId = i.id
      WHERE h.id = ?
    `;
    const result = await executeQuery(query, [id]);
    return result[0];
  } catch (error) {
    console.error("Erro ao buscar hino:", error);
    throw error;
  }
};
