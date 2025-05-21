import React from "react";
import { Text, View } from "react-native";
import Head from "../componentes_aula/Head";

import {
  MagnifyingGlassIcon,
  HeartIcon,
  Bars4Icon,
  BookOpenIcon,
} from "react-native-heroicons/solid";
import ListItem from "../componentes_aula/ListItem";

export default function Invocatorias() {
  return (
    <View>
      <Head
        title={"Invocatórias"}
        leftIcon={Bars4Icon}
        centerIcon={BookOpenIcon}
        rightIcon={HeartIcon}
        searchIcon={MagnifyingGlassIcon}
        placeholder
      />
    </View>
  );
}
