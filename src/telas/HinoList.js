import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import hinos from "../database/hinario.json"; // Importação direta

export default function HinoList() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    setDados(hinos); // Define os dados do JSON
  }, []);

  return (
    <View>
      {dados.map((hino) => (
        <Text key={hino.id}>
          #{hino.numero} - {hino.titulo}
        </Text>
      ))}
    </View>
  );
}
