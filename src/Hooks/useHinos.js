// useHinos.js
import { useEffect, useState } from "react";
import {
  fetchAndStoreHinos,
  getLocalHinos,
  refreshHinosData,
} from "../services/favorito";

export const useHinos = () => {
  const [hinos, setHinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadHinos = async () => {
    try {
      setLoading(true);

      // Tenta carregar os dados locais primeiro
      const localHinos = await getLocalHinos();

      if (localHinos) {
        setHinos(localHinos);
      }

      // Sempre tenta buscar dados atualizados da API
      const freshHinos = await fetchAndStoreHinos();
      setHinos(freshHinos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const refreshHinos = async () => {
    try {
      setLoading(true);
      const freshHinos = await refreshHinosData();
      setHinos(freshHinos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHinos();
  }, []);

  return { hinos, loading, error, refreshHinos };
};
