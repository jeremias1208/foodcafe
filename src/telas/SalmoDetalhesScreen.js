import React from "react";
import DetalhesGenerico from "../componentes_aula/DetalhesGenerico";
import salmo from "../database/dados/Salmos.json";
import {  FireIcon } from "react-native-heroicons/solid";

export default function SalmoDetalhesScreen({ route, navigation }) {
  return (
      <DetalhesGenerico
        navigation={navigation}
        route={route}
        dataSource={salmo}
        iconeCabecalho={FireIcon}
        secaoTitulo="Salmo"
      />
    );
  }