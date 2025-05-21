import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import HTMLView from "react-native-htmlview";
import Cabecalho from "../componentes_aula/cabecalho";
import Rodape from "../componentes_aula/rodape";
import { MusicalNoteIcon } from "react-native-heroicons/solid";

export default function Hinos() {
  const htmlContent = `<p>1. Vinde todos sem demora</p><p>Ao convite do Senhor.</p><p>Ele salva e mesmo agora</p><p>Vos convida com amor.</p><br><p><strong>Seu convite é admirável,</strong></p><p><strong>Vem a Cristo, ó pecador.</strong></p><p><strong>Seu convite é aceitável,</strong></p><p><strong>Vem agora ao Salvador.</strong></p><p><br></p><p>2. Ele está-vos convidando</p><p>Para o divinal festim.</p><p>Voz eterna vos chamando:</p><p>Pecadores, vinde a Mim.</p><p><br></p><p>3. Aos contritos pecadores</p><p>Vestes brancas Ele dá.</p><p>Aflições, tristezas, dores,</p><p>Tudo, Cristo acabará.</p>`;
  return (
    <View>
      <Cabecalho centerIcon={MusicalNoteIcon} title={"Hinos"} />
      <View style={styles.center}>
        <HTMLView value={htmlContent} StyleSheet={styles.center} />
      </View>
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  hinoItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
  },
  hinoNumber: {
    fontWeight: "bold",
    marginRight: 10,
    width: 30,
  },
  hinoTitle: {
    flex: 1,
  },
  p: {
    fontWeight: "300",
    color: "#FF3366", // make links coloured pink
  },
});
