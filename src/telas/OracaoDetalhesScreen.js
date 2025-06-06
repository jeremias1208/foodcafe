import React from "react";
import DetalhesGenerico from "../componentes_aula/DetalhesGenerico";
import oracao from "../database/dados/Oracoes.json";
import { FireIcon } from "react-native-heroicons/solid";

export default function OracaoDetalhesScreen({ route, navigation }) {
  return (
      <DetalhesGenerico
        navigation={navigation}
        route={route}
        dataSource={oracao}
        iconeCabecalho={FireIcon}
        secaoTitulo="Oracao"
      />
    );
  }