import React from "react";
import { Text, View } from "react-native";
import Head from "../componentes_aula/Head";

import {
  MagnifyingGlassIcon,
  HeartIcon,
  Bars4Icon,
  FireIcon,
} from "react-native-heroicons/solid";
import ListItem from "../componentes_aula/ListItem";

export default function Salmos() {
  return (
    <View>
      <Head
        title={"Salmos"}
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
