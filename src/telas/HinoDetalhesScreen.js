import React from "react";
import DetalhesGenerico from "../componentes_aula/DetalhesGenerico";
import hino from "../database/dados/Hinos.json";
import { MusicalNoteIcon } from "react-native-heroicons/solid";

export default function HinoDetalhesScreen({ route, navigation }) {
  return (
      <DetalhesGenerico
        navigation={navigation}
        route={route}
        dataSource={hino}
        iconeCabecalho={MusicalNoteIcon}
        secaoTitulo="Hino"
      />
    );
  }