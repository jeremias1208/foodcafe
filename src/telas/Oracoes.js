import React from "react";
import { ChatBubbleLeftIcon} from "react-native-heroicons/solid";
import oracao from "../database/dados/Oracoes.json"
import ListaComBusca from "../componentes_aula/ListaGenerica";


export default function Oracoes({ navigation }) {
 
  return (
    <ListaComBusca
      navigation={navigation}
      dados={oracao}
      icone={ChatBubbleLeftIcon}
      titulo="Oracões"
      nomeDetalhes="OracaoDetalhesScreen"
      nomeDaProp={"oracao"}
      placeholder="Pesquisar por número, título ou letra..."
    />);
}

