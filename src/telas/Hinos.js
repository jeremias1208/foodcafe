import React from "react";
import ListaComBusca from "../componentes_aula/ListaGenerica";
import hinos from "../database/dados/Hinos.json"
import { MusicalNoteIcon } from "react-native-heroicons/solid";

export default function Litanias({ navigation }) {
  return (
    <ListaComBusca
      navigation={navigation}
      dados={hinos}
      icone={MusicalNoteIcon}
      titulo="Hinos"
      nomeDetalhes="HinoDetalhesScreen"
      nomeDaProp={"hino"}
      placeholder="Pesquisar por número, título ou letra..."
    />
  );
}
