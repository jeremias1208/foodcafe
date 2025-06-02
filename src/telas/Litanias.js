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
  BookOpenIcon
} from "react-native-heroicons/solid";
import Head from "../componentes_aula/Head";
import MenuLateral from "../componentes_aula/MenuLateral";
import litanias from "../database/Litanias.json";


export default function Litanias({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredLitanias, setFilteredLitanias] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  // Inicializa com todos os Litanias
  useEffect(() => {
    setFilteredLitanias(litanias);
  }, []);

  // Filtra os Litanias conforme o texto de pesquisa
  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredLitanias(litanias);
    } else {
      const filtered = litanias.filter(
        (litania) =>
          litania.numero.toString().includes(searchText)||
          litania.titulo.toLowerCase().includes(searchText)||
          litania.descricao.toLowerCase().includes(searchText.toLocaleLowerCase)||
          litania.Idioma.nome.toLowerCase().includes(searchText)
       
      );
      setFilteredLitanias(filtered);
    }
  }, [searchText]);

  const renderLitaniaItem = ({ item }) => (
    <TouchableOpacity
      className="border-b border-gray-200 py-3 px-4 mx-4 mt-2"
      onPress={() => navigation.navigate("LitaniaDetalhesScreen", { litania: item })}
    >
      <View className="flex-row items-center">
        <View className="bg-blue-100 rounded-full w-8 h-8 items-center justify-center mr-3">
          <Text className="text-blue-800 font-bold text-xl">{item.numero}</Text>
        </View>
        <Text className="text-gray-800 flex-1 text-xl" numberOfLines={1}>
          {item.titulo.replace(/<[^>]*>/g, "")}
        </Text>
        <BookOpenIcon size={25} color="#3b82f6" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View >
      <Head
        title={"Litanias"}
        leftIcon={Bars4Icon}
        centerIcon={BookOpenIcon

        }
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

      {/* Lista de Litanias */}
      {loading ? (
        <ActivityIndicator size="large" className="mt-8" />
      ) : error ? (
        <Text className="text-red-500 text-center mt-8">{error}</Text>
      ) : (
        <FlatList
          data={filteredLitanias}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderLitaniaItem}
          ListEmptyComponent={
            <Text className="text-gray-500 text-center mt-8">
              Nenhum litania encontrado
            </Text>
          }
        />
      )}
    </View>
  );
}
