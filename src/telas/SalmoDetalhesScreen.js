import React from "react";
import DetalhesGenerico from "../componentes_aula/DetalhesGenerico";
import salmo from "../database/dados/Salmos.json";
import {  ChatBubbleBottomCenterTextIcon } from "react-native-heroicons/solid";

export default function SalmoDetalhesScreen({ route, navigation }) {
  return (
      <DetalhesGenerico
        navigation={navigation}
        route={route}
        dataSource={salmo}
        iconeCabecalho={ChatBubbleBottomCenterTextIcon}
        secaoTitulo="Salmo"
      />
    );
  }