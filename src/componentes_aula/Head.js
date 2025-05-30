import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const placeholderTxt = "Pesquisar por número ou letra";
export default function Head({
  title,
  leftIcon: LeftIcon,
  centerIcon: CenterIcon,
  rightIcon: RightIcon,
  searchIcon: SearchIcon,
  value,
  acao,
acaoLeft
}) {
  const navigation = useNavigation();
  return (
    <View style={Styles.container_1}>
      {/* Linha do cabeçalho */}
      <View style={Styles.container}>
        {/* Ícone Esquerdo */}
        <View style={Styles.text}>
          <TouchableOpacity onPress={acaoLeft}>
            {LeftIcon && <LeftIcon size={30} color="white" />}
          </TouchableOpacity>
        </View>

        {/* Ícone Central + Título */}
        <View style={Styles.text}>
          {CenterIcon && <CenterIcon size={30} color="white" />}
          <Text style={Styles.text1}>{title}</Text>
        </View>

        {/* Ícone Direito */}
        <View style={Styles.text}>
          <TouchableOpacity onPress={() => navigation.navigate("Favorito")}>
            {RightIcon && <RightIcon size={30} color="white" />}
          </TouchableOpacity>
        </View>
      </View>

      {/* Campo de Pesquisa */}
      <View className="px-4 py-2 " style={{ backgroundColor: "#FF7E82" }}>
        <View className="flex-row items-center mx-4 bg-white rounded-lg px-3 py-2 border border-gray-200">
          {SearchIcon && <SearchIcon size={30} color="#9ca3af" />}
          <TextInput
            className="flex-1 ml-2 text-gray-700"
            placeholder="Pesquisar por número, título ou letra..."
            value={value}
            onChangeText={acao}
          />
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container_1: {
    height: 145,
    backgroundColor: "#FF7E82",
    position: "static",
  },
  container: {
    marginTop: 49,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
  },
  text: {
    flexDirection: "row",
    alignContent: "center",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 8,
  },
  containerSearch: {
    marginTop: 12,
    height: 54,
    border: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  textPlaceholder: {
    fontSize: 18,
  },
});
