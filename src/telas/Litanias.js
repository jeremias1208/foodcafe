import React from "react";
import ListaComBusca from "../componentes_aula/ListaGenerica";
import litanias from "../database/dados/Litanias.json";
import { BookOpenIcon } from "react-native-heroicons/solid";

export default function Litanias({ navigation }) {
  return (
    <ListaComBusca
      navigation={navigation}
      dados={litanias}
      icone={BookOpenIcon}
      titulo="Litanias"
      nomeDetalhes="LitaniaDetalhesScreen"
      nomeDaProp={"litania"}
      placeholder="Pesquisar por número, título ou letra..."
    />
  );
}
