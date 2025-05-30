import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import {
  BookOpenIcon,
  MusicalNoteIcon,
  FireIcon,
  InformationCircleIcon,
  ChatBubbleLeftIcon,
  ChatBubbleBottomCenterTextIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import Menu from "../componentes_aula/Menu";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const navigation = useNavigation();

  const MenuItemsList = [
    {
      icon: MusicalNoteIcon,
      title: "Hinos",
      uri: "Hinos",
      color: "#FF7E82",
    },
    {
      icon: BookOpenIcon,
      title: "Litanias",
      uri: "Litanias",
      color: "#F7BABC",
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: "Salmos",
      uri: "Salmos",
      color: "#F1BCBC",
    },
    {
      icon: ChatBubbleLeftIcon,
      title: "Invocatórias",
      uri: "Invocatorias",
      color: "#D88487",
    },

    {
      icon: FireIcon,
      title: "Orações",
      uri: "Oracoes",
      color: "#D0888A",
    },
    {
      icon: InformationCircleIcon,
      title: "Sobre",
      uri: "Sobre",
      color: "#F19A9D",
    },
  ];

  return (
    <View style={{flex:1}}>
      <View style={Styele.containerImage}>
        <Image
          source={require("../../assets/image/liry.png")}
          className="absolute w-full h-full"
          />
      </View>
      <View style={Styele.containerMenu}>
        {MenuItemsList.map((itemsList, index) => {
          return (
            <Menu
            key={index}
            title={itemsList.title}
            icon={itemsList.icon}
            uri={itemsList.uri}
            color={itemsList.color}
            />
          );
        })}
      </View>
        </View>
  );
}

const Styele = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    height: "45%",
  },
  containerMenu: {
    flexDirection: "row",
    height: "55%",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
});
