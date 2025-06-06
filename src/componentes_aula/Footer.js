// components/Rodape.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  HeartIcon,
  ShareIcon,
  PlusIcon,
  MinusIcon,
  SunIcon,
  MoonIcon,
} from "react-native-heroicons/solid";
import AppText from "./AppText";

const Footer = ({
  isFavorito,
  onFavoritoPress,
  fontSize,
  onIncreaseFont,
  onDecreaseFont,
  isDarkMode,
  onToggleDarkMode,
  onSharePress,
}) => {
  const tIcon = 30;
  return (
    <View style={[styles.footer, isDarkMode && styles.footerDark]}>
      <View style={styles.container}>

      <TouchableOpacity style={styles.footerButton} onPress={onFavoritoPress}>
        <HeartIcon
          size={tIcon}
          color={isDarkMode ? "#ffff" : "#ffff"} 
          />
        <AppText
          style={[
            styles.footerButtonText,
            isDarkMode && styles.footerButtonTextDark,
            { color: isDarkMode ? "#ffff" : "#ffff" },
          ]}
          >
          {isFavorito ? "Favorito" : "Favoritar"}
        </AppText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton} onPress={onDecreaseFont}>
        <MinusIcon size={tIcon} color={isDarkMode ? "#ffff" : "#ffff"} />
        <AppText
          style={[
            styles.footerButtonText,
            isDarkMode && styles.footerButtonTextDark,
            { color: isDarkMode ? "#ffff" : "#ffff" },
          ]}
          >
          A-
        </AppText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton} onPress={onIncreaseFont}>
        <PlusIcon size={tIcon} color={isDarkMode ? "#ffff" : "#ffff"} />
        <AppText
          style={[
            styles.footerButtonText,
            isDarkMode && styles.footerButtonTextDark,
            { color: isDarkMode ? "#ffff" : "#ffff" },
          ]}
          >
          A+
        </AppText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton} onPress={onToggleDarkMode}>
        {isDarkMode ? (
          <SunIcon size={tIcon} color="#ffff" />
        ) : (
          <MoonIcon size={tIcon} color="#ffff" />
        )}
        <AppText
          style={[styles.footerButtonText, isDarkMode && { color: "#ffff" }]}
          >
          {isDarkMode ? "Claro" : "Escuro"}
        </AppText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton} onPress={onSharePress}>
        <ShareIcon size={tIcon} color={isDarkMode ? "#ffff" : "white"} />
        <AppText
          style={[
            styles.footerButtonText,
            { color: isDarkMode ? "#ffff" : "#ffff" },
          ]}
          >
          Compartilhar
        </AppText>
      </TouchableOpacity>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "relative",
backgroundColor: "#FF7E82",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    height:90,
  },

  container:{
     flexDirection: "row",
     paddingVertical: 10,
    marginHorizontal: 24,

  },
  footerDark: {
    backgroundColor: "#2d2d2d",
    borderTopColor: "#333",
  },
  footerButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footerButtonText: {
    marginTop: 4,
    fontSize: 10,
    color: "#fff",
  },
  footerButtonTextDark: {
    color: "#aaa",
  },
});

export default Footer;
