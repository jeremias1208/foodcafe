import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HinoItem = ({ numero, titulo, letra }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {numero} - {titulo}
      </Text>
      <Text style={styles.letra}>{letra}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  letra: {
    fontSize: 14,
    color: "#555",
  },
});

export default HinoItem;
