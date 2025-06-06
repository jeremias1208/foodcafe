import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  Bars4Icon,
  BookOpenIcon,
} from "react-native-heroicons/solid";
import Head from "../componentes_aula/Head";
import MenuLateral from "../componentes_aula/MenuLateral";
import AppText from "./AppText";

export default function ListaComBusca({
  navigation,
  dados,
  icone = BookOpenIcon,
  titulo = "Lista",
  nomeDetalhes = "",
  placeholder = "Pesquisar...",
  nomeDaProp
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    setDadosFiltrados(dados);
  }, [dados]);

  useEffect(() => {
    if (searchText.trim() === "") {
      setDadosFiltrados(dados);
    } else {
      const texto = searchText.toLowerCase();
      const filtrados = dados.filter((item) =>
        item.numero.toString().includes(texto) ||
        item.titulo?.toLowerCase().includes(texto) ||
        item.descricao?.toLowerCase().includes(texto) ||
        item?.Idioma?.nome?.toLowerCase().includes(texto)
      );
      setDadosFiltrados(filtrados);
    }
  }, [searchText, dados]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="border-b border-gray-200 py-3 px-4 mx-4 mt-2"
       onPress={() => navigation.navigate(nomeDetalhes, { [nomeDaProp]: item })}
    >
      <View className="flex-row items-center">
        <View className="bg-blue-100 rounded-full w-8 h-8 items-center justify-center mr-3">
          <AppText className="text-blue-800 font-bold text-xl">{item.numero}</AppText>
        </View>
        <AppText className="text-gray-800 flex-1 text-xl" numberOfLines={1}>
          {item.titulo?.replace(/<[^>]*>/g, "")}
        </AppText>
        {icone && React.createElement(icone, { size: 25, color: "#3b82f6" })}
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 mb-2">
      <Head
        title={titulo}
        leftIcon={Bars4Icon}
        centerIcon={icone}
        rightIcon={HeartIcon}
        searchIcon={MagnifyingGlassIcon}
        acao={setSearchText}
        value={searchText}
        acaoLeft={() => setMenuVisible(true)}
        placeholder={placeholder}
      />

      <MenuLateral
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />

      {loading ? (
        <ActivityIndicator size="large" className="mt-8" />
      ) : error ? (
        <AppText className="text-red-500 text-center mt-8">{error}</AppText>
      ) : (
        <FlatList
          data={dadosFiltrados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={
            <AppText className="text-gray-500 text-center mt-8">
              Nenhum item encontrado
            </AppText>
          }
        />
      )}
    </View>
  );
}
