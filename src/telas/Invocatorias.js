import React, {useState} from "react";
import { Text, View } from "react-native";
import Head from "../componentes_aula/Head";
import MenuLateral from "../componentes_aula/MenuLateral";


import {
  MagnifyingGlassIcon,
  HeartIcon,
  Bars4Icon,
  BookOpenIcon,
} from "react-native-heroicons/solid";
import ListItem from "../componentes_aula/ListItem";

export default function Invocatorias({navigation}) {
    const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View>
      <Head
        title={"Invocatórias"}
        leftIcon={Bars4Icon}
        centerIcon={BookOpenIcon}
        rightIcon={HeartIcon}
        searchIcon={MagnifyingGlassIcon}
        placeholder
        acaoLeft={()=> setMenuVisible(true)}
      />
      <MenuLateral
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />
    </View>
  );
}
