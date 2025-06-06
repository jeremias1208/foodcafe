import React from "react";
import DetalhesGenerico from "../componentes_aula/DetalhesGenerico";
import litania from "../database/dados/Litanias.json";
import { BookOpenIcon } from "react-native-heroicons/solid";

export default function LitaniaDetalhesScreen({ route, navigation }) {
  return (
      <DetalhesGenerico
        navigation={navigation}
        route={route}
        dataSource={litania}
        iconeCabecalho={BookOpenIcon}
        secaoTitulo="Litania"
      />
    );
  }