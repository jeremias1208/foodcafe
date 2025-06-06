import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon, LanguageIcon } from "react-native-heroicons/solid";
import AppText from "./AppText";

export default function Cabecalho({ title, centerIcon: CenterIcon, onIdiomaPress, idiomaNome, visible =true}) {
  const navigation = useNavigation();

  return (
    <View style={Styles.container_1}>
      <View style={Styles.container}>
         <TouchableOpacity style={Styles.text} onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size={30} color={"white"} />
          </TouchableOpacity>
        <View style={Styles.text}>
            {CenterIcon && <CenterIcon size={30} color="white" />}
            <AppText style={Styles.text1}>{title}</AppText>
          </View>
     <View style={Styles.text}>
            {visible && (
     <View style={Styles.idiomaArea}>
      <TouchableOpacity onPress={onIdiomaPress} style={Styles.idiomaBotao}>
        <LanguageIcon size={25} color={"white"} />
        <AppText style={Styles.idiomaTexto}>{idiomaNome}</AppText>
      </TouchableOpacity>
    </View>
  )}
          </View>
      </View>
   </View>
  );
}

const Styles = StyleSheet.create({
  container_1: {
    height: 100,
    backgroundColor: "#FF7E82",
  },
  container: {
    marginTop: 55,
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
  idiomaArea: {
  justifyContent: "center",
  alignItems: "center",
},
idiomaBotao: {
  flexDirection: "row",
  alignItems: "center",
},
idiomaTexto: {
  color: "white",
  marginLeft: 5,
  fontSize: 14,
},

  
});
