import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon, LanguageIcon } from "react-native-heroicons/solid";

export default function Cabecalho({ title, centerIcon: CenterIcon, idoma }) {
  const navigation = useNavigation();

  return (
    <View style={Styles.container_1}>
      <View style={Styles.container}>
         <TouchableOpacity style={Styles.text} onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size={30} color={"white"} />
          </TouchableOpacity>
        <View style={Styles.text}>
            {CenterIcon && <CenterIcon size={30} color="white" />}
            <Text style={Styles.text1}>{title}</Text>
          </View>
          <View style={Styles.text}>
            <TouchableOpacity onPress={()=> {idoma}}>
            <LanguageIcon size={30} color={"white"} />
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container_1: {
    height: 95,
    backgroundColor: "#FF7E82",
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
  
});
