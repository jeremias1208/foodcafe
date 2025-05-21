import React from "react";
import { Text, View } from "react-native";
import Head from "../componentes_aula/Head";
import { useNavigation } from "@react-navigation/native";

import {
  MagnifyingGlassIcon,
  HeartIcon,
  Bars4Icon,
  ChatBubbleLeftEllipsisIcon,
} from "react-native-heroicons/solid";
import ListItem from "../componentes_aula/ListItem";

export default function Litanias() {
  const navigation = useNavigation();
  const listLitanias = [
    { numero: "1", titulo: "Chamada Para Adoração " },
    { numero: "2", titulo: "Súplica Geral" },
    { numero: "3", titulo: "Petição de Coragem" },
    { numero: "4", titulo: "Acção de Graças" },
  ];
  return (
    <View>
      <Head
        title={"Litanias"}
        leftIcon={Bars4Icon}
        centerIcon={ChatBubbleLeftEllipsisIcon}
        rightIcon={HeartIcon}
        searchIcon={MagnifyingGlassIcon}
        placeholder
      />
      {listLitanias.map((lita) => (
        <View key={lita.numero}>
          <ListItem
            numero={lita.numero}
            letra={lita.letra}
            titulo={lita.titulo}
            hino={"LitaniaScreen"}
          />
        </View>
      ))}
    </View>
  );
}
