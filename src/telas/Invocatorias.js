import React from "react";
import { ChatBubbleLeftIcon} from "react-native-heroicons/solid";
import invocatorias from "../database/dados/Invocatorias.json";
import ListaComBusca from "../componentes_aula/ListaGenerica";


export default function Invocatorias({ navigation }) {
 
  return (
    <ListaComBusca
      navigation={navigation}
      dados={invocatorias}
      icone={ChatBubbleLeftIcon}
      titulo="Invocatorias"
      nomeDetalhes="InvocatoriaDetalhesScreen"
      nomeDaProp={"invocatoria"}
      placeholder="Pesquisar por número, título ou letra..."
    />);
}

