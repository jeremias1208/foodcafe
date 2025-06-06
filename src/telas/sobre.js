import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";
import Cabecalho from "../componentes_aula/cabecalho";
import { Cog6ToothIcon } from "react-native-heroicons/solid";

import { useTheme } from "../Context/ThemeContext";
import { useText } from "../Context/TextContext";

export default function SettingsScreen() {
  const { isLightTheme, toggleTheme } = useTheme();
  const { fontType, setFontType, getFontFamily } = useText();
  const [idioma, setIdioma] = React.useState("pt");

  const cores = {
    fundo: isLightTheme ? "#ffffff" : "#121212",
    texto: isLightTheme ? "#222" : "#f2f2f2",
    cartao: isLightTheme ? "#f4f4f4" : "#2a2a2a",
    destaque: "#FF7E82",
  };

  const estiloDinamico = {
    textoPadrao: {
      color: cores.texto,
      fontFamily: getFontFamily(),
    },
    textoNegrito: {
      color: cores.texto,
      fontFamily: getFontFamily(),
      fontWeight: "bold",
    },
  };

  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <Cabecalho title="Configurações" centerIcon={Cog6ToothIcon} visible={false} />

      <ScrollView style={{ padding: 20 }}>
        {/* Idioma */}
        <Text style={[styles.titulo, estiloDinamico.textoNegrito]}>Idioma</Text>
        <View style={styles.linha}>
          <TouchableOpacity
            style={[
              styles.botao,
              idioma === "pt" && { backgroundColor: cores.destaque },
            ]}
            onPress={() => setIdioma("pt")}
          >
            <Text style={[styles.textoBotao, estiloDinamico.textoPadrao]}>🇦🇴 Português</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.botao,
              idioma === "en" && { backgroundColor: cores.destaque },
            ]}
            onPress={() => setIdioma("en")}
          >
            <Text style={[styles.textoBotao, estiloDinamico.textoPadrao]}>🇺🇸 nglês</Text>
          </TouchableOpacity>
        </View>

        {/* Tema */}
        <Text style={[styles.titulo, estiloDinamico.textoNegrito]}>Tema</Text>
        <View style={styles.linha}>
          <Text style={[styles.textoSecao, estiloDinamico.textoPadrao]}>Modo Escuro</Text>
          <Switch value={!isLightTheme} onValueChange={toggleTheme} />
        </View>

        {/* Tipo de Letra */}
        <Text style={[styles.titulo, estiloDinamico.textoNegrito]}>Tipo de Letra</Text>
        <View style={styles.linha}>
          {["Padrao", "Serifada", "Manuscrita"].map((tipo) => (
            <TouchableOpacity
              key={tipo}
              style={[
                styles.botao,
                fontType === tipo && { backgroundColor: cores.destaque },
              ]}
              onPress={() => setFontType(tipo)}
            >
              <Text style={[styles.textoBotao, estiloDinamico.textoPadrao]}>{tipo}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Ficha Técnica */}
        <Text style={[styles.titulo, estiloDinamico.textoNegrito]}>Ficha Técnica</Text>
        <View style={[styles.ficha, { backgroundColor: cores.cartao }]}>
          <Text style={[styles.textoFicha, estiloDinamico.textoPadrao]}>Nome do App: Meu Hinário</Text>
          <Text style={[styles.textoFicha, estiloDinamico.textoPadrao]}>Versão: 1.0.0</Text>
          <Text style={[styles.textoFicha, estiloDinamico.textoPadrao]}>Desenvolvedor: Jeremias Edson</Text>
          <Text style={[styles.textoFicha, estiloDinamico.textoPadrao]}>Contacto: +244 944 200 105</Text>
          <Text style={[styles.textoFicha, estiloDinamico.textoPadrao]}>Ano: 2025</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  linha: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  botao: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  textoBotao: {
    fontWeight: "500",
  },
  textoSecao: {
    fontSize: 16,
  },
  ficha: {
    marginTop: 10,
    padding: 12,
    borderRadius: 10,
  },
  textoFicha: {
    fontSize: 14,
    marginBottom: 5,
  },
});
