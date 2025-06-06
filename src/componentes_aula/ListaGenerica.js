import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Head from "../componentes_aula/Head";
import MenuLateral from "../componentes_aula/MenuLateral";
import { Bars4Icon, HeartIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import AppText from "./AppText";

export default function ListaGenerica({
  dados,
  navigation,
  nomeSessao, // Ex: "Hinos"
  iconeCentro, // Ex: MusicalNoteIcon
  renderItemCustom,
  rotaDetalhes,
  campoBusca = ["letra", "numero", "Idioma.nome"],
  ordenarPor,
}) {
  const [searchText, setSearchText] = useState("");
  const [filtrados, setFiltrados] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ordenados = ordenarPor ? [...dados].sort(ordenarPor) : dados;
    setFiltrados(ordenados);
  }, []);

  useEffect(() => {
    if (!searchText.trim()) {
      const ordenados = ordenarPor ? [...dados].sort(ordenarPor) : dados;
      setFiltrados(ordenados);
    } else {
      const texto = searchText.toLowerCase();
      const filtrado = dados.filter((item) =>
        campoBusca.some((campo) => {
          const valor = campo.split('.').reduce((o, i) => o?.[i], item);
          return valor?.toString().toLowerCase().includes(texto);
        })
      );
      const ordenados = ordenarPor ? [...filtrado].sort(ordenarPor) : filtrado;
      setFiltrados(ordenados);
    }
  }, [searchText]);

  return (
    <View className="flex-1">
      <Head
        title={nomeSessao}
        leftIcon={Bars4Icon}
        centerIcon={iconeCentro}
        rightIcon={HeartIcon}
        searchIcon={MagnifyingGlassIcon}
        acao={setSearchText}
        value={searchText}
        acaoLeft={() => setMenuVisible(true)}
        placeholder={`Pesquisar ${nomeSessao.toLowerCase()}...`}
      />

      <MenuLateral
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />

      {loading ? (
        <ActivityIndicator size="large" className="mt-8" />
      ) : (
        <FlatList
          data={filtrados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            renderItemCustom ? renderItemCustom(item) : (
              <TouchableOpacity
                className="border-b border-gray-200 py-3 px-4 mx-4 mt-2"
                onPress={() => navigation.navigate(rotaDetalhes, { item })}
              >
                <AppText className="text-lg text-gray-800">{JSON.stringify(item)}</AppText>
              </TouchableOpacity>
            )
          }
          ListEmptyComponent={
            <AppText className="text-gray-500 text-center mt-8">
              Nenhum resultado encontrado
            </AppText>
          }
        />
      )}
    </View>
  );
}
