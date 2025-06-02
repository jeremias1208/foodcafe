// screens/HinoDetalhesScreen.js
import React from "react";
import { View, Text, ScrollView, StyleSheet, Linking, Share} from "react-native";
import { ChevronLeftIcon, BookOpenIcon } from "react-native-heroicons/solid";
import HTMLView from "react-native-htmlview";
import Footer from "../componentes_aula/Footer";
import Cabecalho from "../componentes_aula/cabecalho";

export default function LitaniaDetalhesScreen({ route, navigation }) {
  const { litania } = route.params;
  const [isFavorito, setIsFavorito] = React.useState(false);
  const [fontSize, setFontSize] = React.useState(20);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleCompartilhar = async () => {
    try {
      await Share.share({
        message: `Litania ${litania.numero} - ${litania.titulo}\n\n${litania.replace(
          /<[^>]*>/g,
          ""
        )}`,
      });
    } catch (error) {
      console.error("Erro ao compartilhar:", error.message);
    }
  };

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 26));
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 12));
  };

  const stylesheet = StyleSheet.create({
    p: {
      fontSize: fontSize,
      lineHeight: fontSize * 1,
      color: isDarkMode ? "#ddd" : "#444",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Roboto",
      fontVariant: "Roboto",
      marginBottom:0,
       borderWidth: 2,         // Largura da borda
    borderColor: 'blue',
      
      
    },
    b: {
      fontWeight: "bold",
    },
    i: {
      fontStyle: "italic",
    },
   
   
    div: {
      fontSize: fontSize,
      lineHeight: fontSize * 1,
      color: isDarkMode ? "#ddd" : "#444",
      paddingTop:10,
      paddingBottom:20

      
    },
  });

  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkMode ? "#1a1a1a" : "#fff",
  };

  const headerStyle = {
    ...styles.header,
    borderBottomColor: isDarkMode ? "#333" : "#eee",
  };

  const tituloStyle = {
    ...styles.titulo,
    color: isDarkMode ? "#FF7E82" : "#fffff",
  };

  return (
    <View style={containerStyle}>
      <Cabecalho
        title={`Litania ${litania.numero}`}
        centerIcon={BookOpenIcon}
        LeftIcon={ChevronLeftIcon}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={headerStyle}>
          <Text style={tituloStyle}>{litania.titulo}</Text>
        </View>

        <HTMLView
          value={`<div>${litania.descricao}</div>`}
          stylesheet={stylesheet}
          onLinkPress={(url) => Linking.openURL(url)}
          textComponentProps={{ style: styles.letra }}
        />
      </ScrollView>

      <Footer
        Favorito={isFavorito}
        onFavoritoPress={() => setIsFavorito(!isFavorito)}
        fontSize={fontSize}
        onIncreaseFont={increaseFontSize}
        onDecreaseFont={decreaseFontSize}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onSharePress={handleCompartilhar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,

  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 15,
    
  },
  numero: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3b82f6",
    marginBottom: 5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "600",
    
  },
  letra: {
    fontSize: 16,
    
    
  },
});
