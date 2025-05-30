import React, {useState, useEffect
} from "react";
import { Text, View } from "react-native";
import Head from "../componentes_aula/Head";
import { useNavigation } from "@react-navigation/native";
import MenuLateral from "../componentes_aula/MenuLateral";


import {
  MagnifyingGlassIcon,
  HeartIcon,
  Bars4Icon,
  ChatBubbleLeftEllipsisIcon,
} from "react-native-heroicons/solid";
import ListItem from "../componentes_aula/ListItem";

export default function Litanias() {
    const [menuVisible, setMenuVisible] = useState(false);

  const navigation = useNavigation();
  const listLitanias = [
    { numero: "1", titulo: "Chamada Para Adoração " },
    { numero: "2", titulo: "Súplica Geral" },
    { numero: "3", titulo: "Petição de Coragem" },
    { numero: "4", titulo: "Acção de Graças" },
    { numero: "5", titulo: "Acção de Graças" },
    { numero: "6", titulo: "Acção de Graças" },
    { numero: "7", titulo: "Acção de Graças" },
    { numero: "8", titulo: "Acção de Graças" },
    { numero: "9", titulo: "Acção de Graças" },
    { numero: "10", titulo: "Acção de Graças" },
    { numero: "41", titulo: "Acção de Graças" },
    { numero: "14", titulo: "Acção de Graças" },
    { numero: "400", titulo: "Acção de Graças" },
    { numero: "425", titulo: "Acção de Graças" },
    { numero: "20", titulo: "Acção de Graças" },
    { numero: "42", titulo: "Acção de Graças" },
    { numero: "46", titulo: "Acção de Graças" },
    { numero: "435", titulo: "Acção de Graças" },
    { numero: "48", titulo: "Acção de Graças" },
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
        acaoLeft={()=>setMenuVisible(true)}
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

      <MenuLateral
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />
    </View>
  );
}
