import React from "react";
import { Text } from "react-native";
import { useText } from "../Context/TextContext";

export default function AppText({ style, children, ...props }) {
  const { getFontFamily } = useText();

  return (
    <Text style={[{ fontFamily: getFontFamily() }, style]} {...props}>
      {children}
    </Text>
  );
}
