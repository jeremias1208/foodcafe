import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Linking, Modal, Pressable, Share } from "react-native";
import HTMLView from "react-native-htmlview";
import Footer from "./Footer";
import Cabecalho from "./cabecalho";
import AppText from "./AppText";

export default function DetalhesGenerico({
  navigation,
  route,
  dataSource,
  iconeCabecalho,
  secaoTitulo, // exemplo: "Hino", "Oração"
}) {
  const itemRecebido = route.params[secaoTitulo.toLowerCase()];
  const [isFavorito, setIsFavorito] = useState(false);
  const [fontSize, setFontSize] = useState(20);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [itensPorIdioma, setItensPorIdioma] = useState([]);
  const [itemAtual, setItemAtual] = useState(null);
  const [mostrarIdiomas, setMostrarIdiomas] = useState(false);

  useEffect(() => {
    const mesmosNumero = dataSource.filter((item) => item.numero === itemRecebido.numero);
    const atual = mesmosNumero.find((item) => item.id === itemRecebido.id);
    setItensPorIdioma(mesmosNumero);
    setItemAtual(atual);
  }, []);

  const handleCompartilhar = async () => {
    try {
      await Share.share({
        message: `${secaoTitulo} ${itemRecebido.numero} - ${itemRecebido.titulo}\n\n${itemRecebido.descricao.replace(/<[^>]*>/g, "")}`,
      });
    } catch (error) {
      console.error("Erro ao compartilhar:", error.message);
    }
  };

  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 26));
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 12));

  const stylesheet = StyleSheet.create({
    div: {
      fontSize: fontSize,
      lineHeight: fontSize * 1.1,
      color: isDarkMode ? "#ddd" : "#444",
      paddingTop: 10,
      paddingBottom: 20,
      textAlign: "center",
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
    color: isDarkMode ? "#FF7E82" : "#222",
  };

  return (
    <View style={containerStyle}>
      <Cabecalho
        title={`${secaoTitulo} ${itemAtual?.numero}`}
        centerIcon={iconeCabecalho}
        onIdiomaPress={() => setMostrarIdiomas(true)}
        idiomaNome={itemAtual?.Idioma?.nome}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={headerStyle}>
         <AppText style={tituloStyle}>{itemAtual?.titulo}</AppText>
        </View>
     
        <HTMLView
          value={`<div>${itemAtual?.descricao||itemAtual?.letra || itemAtual?.deescricao}</div>`}
          stylesheet={stylesheet}
          onLinkPress={(url) => Linking.openURL(url)}
          textComponentProps={{ style: styles.letra }}
        />
      </ScrollView>

      <Modal visible={mostrarIdiomas} transparent animationType="fade">
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#00000088" }}>
          <View style={{ margin: 20, backgroundColor: "white", padding: 20, borderRadius: 10 }}>
           <AppText style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>
              Escolher idioma
            </AppText>
            {itensPorIdioma.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => {
                  setItemAtual(item);
                  setMostrarIdiomas(false);
                }}
                style={{ paddingVertical: 10 }}
              >
               <AppText style={{ fontSize: 18 }}>{item.Idioma.nome}</AppText>
              </Pressable>
            ))}
            <Pressable onPress={() => setMostrarIdiomas(false)} style={{ marginTop: 10 }}>
             <AppText style={{ textAlign: "right", color: "gray" }}>Fechar</AppText>
            </Pressable>
          </View>
        </View>
      </Modal>

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
  container: { flex: 1 },
  scrollContent: { padding: 24 },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "600",
  },
  letra: {
    fontSize: 16,
    lineHeight: 24,
  },
});
