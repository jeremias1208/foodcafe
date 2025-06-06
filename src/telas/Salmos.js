import React from "react";
import { ChatBubbleBottomCenterTextIcon,
} from "react-native-heroicons/solid";
import salmo from "../database/dados/Salmos.json"
import ListaComBusca from "../componentes_aula/ListaGenerica";


export default function Oracoes({ navigation }) {
 
  return (
    <ListaComBusca
      navigation={navigation}
      dados={salmo}
      icone={ChatBubbleBottomCenterTextIcon}
      titulo="Salmos"
      nomeDetalhes="SalmoDetalhesScreen"
      nomeDaProp={"salmo"}
      placeholder="Pesquisar por número, título ou letra..."
    />);
}

