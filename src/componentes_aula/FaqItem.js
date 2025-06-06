import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation,  Linking } from "react-native";
import { ChevronDownIcon, ChevronUpIcon } from "react-native-heroicons/outline";
import { useTheme } from "../Context/ThemeContext";
import AppText from "./AppText";


// Habilita animações no Android

export default function FaqItem({ pergunta, resposta, acao }) {
    const { isLightTheme, toggleTheme, colors } = useTheme();
    const [expandido, setExpandido] = useState(false);

  const toggleExpandido = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandido(!expandido);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableOpacity onPress={toggleExpandido} style={styles.perguntaContainer}>
        <AppText style={[styles.perguntaTexto, { color: colors.text }]}>{pergunta}</AppText>
        {expandido ? (
          <ChevronUpIcon size={20} color="#FF7E82" />
        ) : (
          <ChevronDownIcon size={20} color="#FF7E82" />
        )}
      </TouchableOpacity>
      {expandido && (
        <TouchableOpacity style={styles.respostaContainer} onPress={acao}>
            <AppText style={[styles.respostaTexto, { color: colors.text }]}>{resposta}</AppText>
         </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 14,
    marginHorizontal:12
  },
  perguntaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  perguntaTexto: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    color: "#333",
  },
  respostaContainer: {
    marginTop: 8,
    paddingLeft: 4,
  },
  respostaTexto: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
});
