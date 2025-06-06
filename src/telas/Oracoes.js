import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  Bars4Icon,
  FireIcon
} from "react-native-heroicons/solid";
import Head from "../componentes_aula/Head";
import MenuLateral from "../componentes_aula/MenuLateral";
import oracoes from "../database/dados/Oracoes.json";


export default function Oracoes({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredOracoes, setFilteredOracoes] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  // Inicializa com todos os Oracoes
  useEffect(() => {
    setFilteredOracoes(oracoes);
  }, []);

  // Filtra os Oracoes conforme o texto de pesquisa
  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredOracoes(oracoes);
    } else {
      const filtered = oracoes.filter(
        (oracao) =>
          oracao.numero.toString().includes(searchText)||
          oracao.titulo.toLowerCase().includes(searchText)||
          oracao.descricao.toLowerCase().includes(searchText.toLocaleLowerCase)||
          oracao.Idioma.nome.toLowerCase().includes(searchText)
       
      );
      setFilteredOracoes(filtered);
    }
  }, [searchText]);

  const renderoracaoItem = ({ item }) => (
    <TouchableOpacity
      className="border-b border-gray-200 py-3 px-4 mx-4 mt-2"
      onPress={() => navigation.navigate("OracaoDetalhesScreen", { oracao: item })}
    >
      <View className="flex-row items-center">
        <View className="bg-blue-100 rounded-full w-8 h-8 items-center justify-center mr-3">
          <Text className="text-blue-800 font-bold text-xl">{item.numero}</Text>
        </View>
        <Text className="text-gray-800 flex-1 text-xl" numberOfLines={1}>
          {item.titulo.replace(/<[^>]*>/g, "")}
        </Text>
        <FireIcon size={25} color="#3b82f6" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View >
      <Head
        title={"Oracoes e Credo"}
        leftIcon={Bars4Icon}
        centerIcon={FireIcon}
        rightIcon={HeartIcon}
        searchIcon={MagnifyingGlassIcon}
        acao={setSearchText}
        value={searchText}
        acaoLeft={()=>setMenuVisible(true)}
        placeholder="Pesquisar por número, título ou letra..."
      />

       <MenuLateral
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />

      {/* Lista de Oracoes */}
      {loading ? (
        <ActivityIndicator size="large" className="mt-8" />
      ) : error ? (
        <Text className="text-red-500 text-center mt-8">{error}</Text>
      ) : (
        <FlatList
          data={filteredOracoes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderoracaoItem}
          ListEmptyComponent={
            <Text className="text-gray-500 text-center mt-8">
              Nenhum oracao encontrado
            </Text>
          }
        />
      )}
    </View>
  );
}
