import React, { createContext, useContext, useState } from "react";

// Criação do contexto
const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const [fontType, setFontType] = useState("Padrao");

  const getFontFamily = () => {
    switch (fontType) {
      case "Serifada":
        return "serif";
      case "Manuscrita":
        return "cursive"; // ou use uma fonte personalizada se tiver
      default:
        return "System";
    }
  };

  return (
    <TextContext.Provider value={{ fontType, setFontType, getFontFamily }}>
      {children}
    </TextContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useText = () => useContext(TextContext);
