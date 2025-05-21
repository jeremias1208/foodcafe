import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function ListItem({ numero, letra, titulo, hino }) {
  const scrollRef = useRef();
  const navigation = useNavigation();

  var { wid, heig } = Dimensions.get("window");

  return (
    <TouchableOpacity onPress={() => navigation.navigate(hino)}>
      <View style={Style.containerHino}>
        <View style={Style.containerTitle}>
          <Text style={Style.text_title}>{numero} - </Text>
          <Text style={Style.text_title}>{titulo} </Text>
          <Text style={Style.text_title}>{letra}</Text>
        </View>
        <ArrowRightIcon size={25} color={"black"} />
      </View>
    </TouchableOpacity>
  );
}
const Style = StyleSheet.create({
  containerHino: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 24,
    shadowRadius: 10,
    shadowColor: "red",
  },
  containerTitle: {
    flexDirection: "row",
    marginRight: 45,
  },
  text_title: {
    fontSize: 20,
    color: "black",
  },
});
