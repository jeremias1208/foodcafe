import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Menu({ title, icon: Icon, uri, color }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        height: "33.4%",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => navigation.navigate(uri)}
    >
      {Icon && <Icon size={30} color="white" />}
      <Text style={Styele.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const color = { color };
const Styele = StyleSheet.create({
  container: {
    height: 10,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
