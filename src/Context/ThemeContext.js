import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  // Carregar tema salvo
  useEffect(() => {
    (async () => {
      try {
        const temaSalvo = await AsyncStorage.getItem("tema");
        if (temaSalvo !== null) {
          setIsLightTheme(JSON.parse(temaSalvo));
        }
      } catch (e) {
        console.log("Erro ao carregar tema:", e);
      }
    })();
  }, []);

  // Salvar tema ao trocar
  const toggleTheme = async () => {
    try {
      const novoTema = !isLightTheme;
      setIsLightTheme(novoTema);
      await AsyncStorage.setItem("tema", JSON.stringify(novoTema));
    } catch (e) {
      console.log("Erro ao salvar tema:", e);
    }
  };

  const theme = {
    isLightTheme,
    toggleTheme,
    colors: isLightTheme
      ? {
          background: "#FFFFFF",
          text: "#000000",
          primary: "#FF7E82",
        }
      : {
          background: "#121212",
          text: "#FFFFFF",
          primary: "#FF7E82",
        },
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
