import { Text, View } from "react-native";
import MenuLateral from "../componentes_aula/MenuLateral";
import Head from "../componentes_aula/Head";

import {
  FireIcon,
  HeartIcon,
  Bars4Icon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import ListItem from "../componentes_aula/ListItem";
import { useEffect, useState } from "react";

export default function Oracoes({navigation}) {
    const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View>
      <Head
        title={"Orações e Credo"}
        leftIcon={Bars4Icon}
        centerIcon={FireIcon}
        rightIcon={HeartIcon}
        searchIcon={MagnifyingGlassIcon}
        placeholder
        acaoLeft={()=>setMenuVisible(true) }
      />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <MenuLateral
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />
    </View>
  );
}
