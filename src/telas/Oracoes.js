import React from "react";
import { Text, View } from "react-native";
import Head from "../componentes_aula/Head";

import {
  FireIcon,
  HeartIcon,
  Bars4Icon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import ListItem from "../componentes_aula/ListItem";

export default function Oracoes() {
  return (
    <View>
      <Head
        title={"Orações e Credo"}
        leftIcon={Bars4Icon}
        centerIcon={FireIcon}
        rightIcon={HeartIcon}
        searchIcon={MagnifyingGlassIcon}
        placeholder
      />
      <ListItem />
    </View>
  );
}
