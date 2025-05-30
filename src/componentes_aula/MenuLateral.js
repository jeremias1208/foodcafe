import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";

const { width } = Dimensions.get("window");

export default function MenuLateral({ visible, onClose, navigation }) {
  const translateX = useRef(new Animated.Value(-width * 0.7)).current;

  // Configura o PanResponder para detectar swipe para fechar
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // responder somente se o gesto for horizontal e para esquerda
        return gestureState.dx < -10;
      },
      onPanResponderMove: (_, gestureState) => {
        // Atualiza a posição do menu conforme movimento horizontal
        if (gestureState.dx < 0) {
          translateX.setValue(Math.max(gestureState.dx, -width * 0.7));
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        // Se o gesto arrastar para esquerda mais que 50 px, fecha menu
        if (gestureState.dx < -50) {
          fecharMenu();
        } else {
          abrirMenu();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (visible) {
      abrirMenu();
    } else {
      fecharMenu();
    }
  }, [visible]);

  function abrirMenu() {
    Animated.spring(translateX, {
      toValue: 0,
      useNativeDriver: true,
      bounciness: 5,
    }).start();
  }

  function fecharMenu() {
    Animated.spring(translateX, {
      toValue: -width * 0.7,
      useNativeDriver: true,
      bounciness: 0,
    }).start(() => {
      onClose();
    });
  }

  return (
    <Animated.View
      style={[styles.menuContainer, { transform: [{ translateX }] }]}
      {...panResponder.panHandlers}
    >
     <View style={styles.menu}>
          <Text style={[styles.menuTitle, { color: "#FF7E82" }]}>Menu</Text>
          <TouchableOpacity onPress={() => { onClose(); navigation.navigate("Home"); }}>
            <Text style={styles.menuItem}>Início</Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => { onClose(); navigation.navigate("Hinos"); }}>
            <Text style={styles.menuItem}>Hinos</Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => { onClose(); navigation.navigate("Litanias"); }}>
            <Text style={styles.menuItem}>Litanias</Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => { onClose(); navigation.navigate("Salmos"); }}>
            <Text style={styles.menuItem}>Salmos</Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => { onClose(); navigation.navigate("Invocatorias"); }}>
            <Text style={styles.menuItem}>Invocatórias</Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => { onClose(); navigation.navigate("Oracoes"); }}>
            <Text style={styles.menuItem}>Orações</Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => { onClose(); navigation.navigate("Favorito"); }}>
            <Text style={styles.menuItem}>Favoritos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { onClose(); navigation.navigate("Sobre"); }}>
            <Text style={styles.menuItem}>Sobre</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { onClose(); alert("Sobre o App"); }}>
            <Text style={styles.menuItem}>Sobre</Text>
          </TouchableOpacity>
          </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: width * 0.7,
    zIndex: 99,
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  menu: {
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 20,
    paddingVertical: 12,
  },
});
