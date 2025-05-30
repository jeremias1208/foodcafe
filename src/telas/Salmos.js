import React, {useState, useEffect} from "react";
import { Text, View } from "react-native";
import Head from "../componentes_aula/Head";
import MenuLateral from "../componentes_aula/MenuLateral";

import {
  MagnifyingGlassIcon,
  HeartIcon,
  Bars4Icon,
  FireIcon,
} from "react-native-heroicons/solid";
import ListItem from "../componentes_aula/ListItem";

export default function Salmos({navigation}) {
    const [menuVisible, setMenuVisible] = useState(false);
  
  return (
    <View>
      <Head
        title={"Salmos"}
        leftIcon={Bars4Icon}
        centerIcon={FireIcon}
        rightIcon={HeartIcon}
        searchIcon={MagnifyingGlassIcon}
        placeholder
        acaoLeft={()=>setMenuVisible(true)}
      />
      <ListItem />
      <MenuLateral
              visible={menuVisible}
              onClose={() => setMenuVisible(false)}
              navigation={navigation}
            />
    </View>
  );
}
