// apiService.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = "http://127.0.0.1:5500/hinos";
const LOCAL_STORAGE_KEY = "hinos_data";

export const fetchAndStoreHinos = async () => {
  try {
    // Busca dados da API
    const response = await axios.get(API_URL);
    const hinosData = response.data;

    // Armazena localmente
    await AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(hinosData));

    return hinosData;
  } catch (error) {
    console.error("Erro ao buscar hinos:", error);
    throw error;
  }
};

export const getLocalHinos = async () => {
  try {
    const storedData = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : null;
  } catch (error) {
    console.error("Erro ao recuperar hinos locais:", error);
    throw error;
  }
};

export const refreshHinosData = async () => {
  try {
    // Busca novos dados e atualiza o armazenamento local
    const newData = await fetchAndStoreHinos();
    return newData;
  } catch (error) {
    console.error("Erro ao atualizar hinos:", error);
    throw error;
  }
};
