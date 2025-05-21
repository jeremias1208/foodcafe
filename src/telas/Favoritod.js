import React from "react";
import { Text, View } from "react-native";
import Head from "../componentes_aula/Head";

import {
  MagnifyingGlassIcon,
  HeartIcon,
  Bars4Icon,
  BookOpenIcon,
} from "react-native-heroicons/solid";

export default function Favorito() {
  return (
    <View>
      <Head
        title={"Favoritos"}
        leftIcon={Bars4Icon}
        centerIcon={BookOpenIcon}
        rightIcon={HeartIcon}
        searchIcon={MagnifyingGlassIcon}
      />
    </View>
  );
}
