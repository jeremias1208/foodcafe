import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Share,
  StyleSheet,
  Linking,
} from "react-native";
import {
  LightBulbIcon,
  HeartIcon,
  ShareIcon,
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
  ArrowLeftIcon,
  LanguageIcon,
} from "react-native-heroicons/solid";

export default function Rodape({ minus, plus }) {
  return (
    <View style={Styles.container}>
      <View style={Styles.text}>
        <TouchableOpacity onPress={plus}>
          <MagnifyingGlassPlusIcon size={30} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={Styles.text}>
        <TouchableOpacity onPress={minus}>
          <MagnifyingGlassMinusIcon size={30} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={Styles.text}>
        <TouchableOpacity
          onPress={() => {
            dark;
          }}
        >
          {isDarkMode ? (
            <SunIcon size={20} color="#ffcc00" />
          ) : (
            <MoonIcon size={20} color="#666" />
          )}
          <LightBulbIcon size={30} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={Styles.text}>
        <TouchableOpacity onPress={() => navigation.navigate(title)}>
          <HeartIcon size={30} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={Styles.text}>
        <TouchableOpacity onPress={() => navigation.navigate(title)}>
          <ShareIcon size={30} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF7E82",
    height: 70,
    paddingVertical: 10,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "static",
    alignSelf: "flex-end",
  },
  text: {
    marginHorizontal: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
