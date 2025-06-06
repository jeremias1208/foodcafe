import React from "react";
import DetalhesGenerico from "../componentes_aula/DetalhesGenerico";
import invocatorias from "../database/dados/Invocatorias.json";
import { ChatBubbleLeftIcon } from "react-native-heroicons/solid";

export default function InvocatoriaDetalhesScreen({ navigation, route }) {
  return (
    <DetalhesGenerico
      navigation={navigation}
      route={route}
      dataSource={invocatorias}
      iconeCabecalho={ChatBubbleLeftIcon}
      secaoTitulo="Invocatoria"
    />
  );
}
