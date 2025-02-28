import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Head({
  title,
  leftIcon: LeftIcon,
  centerIcon: CenterIcon,
  rightIcon: RightIcon,
  searchIcon: SearchIcon,
}) {
  return (
    <View style={Styles.container_1}>
      {/* Linha do cabeçalho */}
      <View style={Styles.container}>
        {/* Ícone Esquerdo */}
        <View style={Styles.text}>
          {LeftIcon && <LeftIcon size={30} color="white" />}
        </View>

        {/* Ícone Central + Título */}
        <View style={Styles.text}>
          {CenterIcon && <CenterIcon size={30} color="white" />}
          <Text style={Styles.text1}>{title}</Text>
        </View>

        {/* Ícone Direito */}
        <View style={Styles.text}>
          <TouchableOpacity>
            {RightIcon && <RightIcon size={30} color="white" />}
          </TouchableOpacity>
        </View>
      </View>

      {/* Campo de Pesquisa */}
      <View style={Styles.containerSearch}>
        {SearchIcon && <SearchIcon size={30} color="gray" />}
        <TextInput
          placeholder="Pesquisar por número ou letra..."
          placeholderTextColor="#828282"
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container_1: {
    height: 145,
    backgroundColor: "#FF7E82",
  },
  container: {
    marginTop: 49,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  text: {
    marginHorizontal: 55,
    flexDirection: "row",
    justifyContent: "center",
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
});
