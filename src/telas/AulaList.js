import React from "react";
import { Text, View } from "react-native";
import Head from "../componentes_aula/Head";
import Body from "./HinoDetailScreen";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  Bars4Icon,
  MusicalNoteIcon,
} from "react-native-heroicons/solid";

export default function AulaList() {
  return (
    <View>
      <Head
        title={"Hinos"}
        leftIcon={Bars4Icon}
        centerIcon={MusicalNoteIcon}
        rightIcon={HeartIcon}
        searchIcon={MagnifyingGlassIcon}
      />
      <Body />
    </View>
  );
}
