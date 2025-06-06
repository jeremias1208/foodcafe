import React from "react";
import { View, Text, ScrollView, StyleSheet, Linking } from "react-native";
import Cabecalho from "../componentes_aula/cabecalho";
import FaqItem from "../componentes_aula/FaqItem";
import { Cog6ToothIcon, InformationCircleIcon } from "react-native-heroicons/solid";
import { useTheme } from "../Context/ThemeContext";
import AppText from "../componentes_aula/AppText";


const listaFaq = [
  {
    pergunta: "Como posso encontrar um hino específico?",
    resposta: "Use a barra de pesquisa para digitar o número, parte da letra ou o idioma do hino."
  },
  {
    pergunta: "O que significam os ícones na parte superior da tela?",
    resposta: "Eles permitem abrir o menu, pesquisar, ver favoritos e mudar de idioma."
  },
  {
    pergunta: "É possível alternar entre diferentes idiomas dos hinos?",
    resposta: "Sim. Basta tocar no ícone de idioma na tela de detalhes do hino."
  },
  {
    pergunta: "Posso marcar hinos como favoritos?",
    resposta: "Ainda não, mas essa funcionalidade está prevista para uma versão futura."
  },
  {
    pergunta: "Consigo acessar o app sem internet?",
    resposta: "Sim. O conteúdo dos hinos está salvo localmente no aplicativo."
  },
  {
    pergunta: "Existe uma versão com áudio dos hinos?",
    resposta: "Ainda não, mas estamos estudando essa possibilidade."
  },
  {
  pergunta: "Como posso sugerir melhorias ou reportar erros?",
  resposta: "Toque aqui para falar conosco via WhatsApp.",
  acao: ()=> Linking.openURL("https://wa.me/244944200105")
}
];

export default function AjudaScreen() {
   const { isLightTheme, toggleTheme, colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Cabecalho
        title="Sobre o Hinário"
        centerIcon={InformationCircleIcon}
        visible={false}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <AppText style={[styles.titulo,  { color: colors.text }]}>Perguntas Frequentes</AppText>
        {listaFaq.map((item, index) => (
          <FaqItem
            key={index}
            pergunta={item.pergunta}
            resposta={item.resposta}
          />
        ))}
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    
    marginBottom: 16,
  },
  footer: {
    marginTop: 40,
    alignItems: "center",
  },
  rodape: {
    fontSize: 14,
    
  },
  contato: {
    fontSize: 14,
   
    marginTop: 4,
  }
});
