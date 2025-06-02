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
  MusicalNoteIcon,
} from "react-native-heroicons/solid";
import Head from "../componentes_aula/Head";
import MenuLateral from "../componentes_aula/MenuLateral";
import hinos from "../database/Hino.json";


export default function Hinos({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredHinos, setFilteredHinos] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  // Inicializa com todos os hinos
  useEffect(() => {
    setFilteredHinos(hinos);
  }, []);

  // Filtra os hinos conforme o texto de pesquisa
  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredHinos(hinos);
    } else {
      const filtered = hinos.filter(
        (hino) =>
          hino.titulo.toLowerCase().includes(searchText) ||
          hino.letra.toLowerCase().includes(searchText.toLowerCase()) ||
          hino.numero.toString().includes(searchText) ||
          hino.Idioma.nome.toLowerCase().includes(searchText)
      );
      setFilteredHinos(filtered);
    }
  }, [searchText]);

  const renderHinoItem = ({ item }) => (
    <TouchableOpacity
      className="border-b border-gray-200 py-3 px-4 mx-4 mt-2"
      onPress={() => navigation.navigate("HinoDetalhesScreen", { hino: item })}
    >
      <View className="flex-row items-center">
        <View className="bg-blue-100 rounded-full w-8 h-8 items-center justify-center mr-3">
          <Text className="text-blue-800 font-bold text-xl">{item.numero}</Text>
        </View>
        <Text className="text-gray-800 flex-1 text-xl" numberOfLines={1}>
          {item.letra.replace(/<[^>]*>/g, "")}
        </Text>
        <MusicalNoteIcon size={25} color="#3b82f6" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View >
      <Head
        title={"Hinos"}
        leftIcon={Bars4Icon}
        centerIcon={MusicalNoteIcon}
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

      {/* Lista de hinos */}
      {loading ? (
        <ActivityIndicator size="large" className="mt-8" />
      ) : error ? (
        <Text className="text-red-500 text-center mt-8">{error}</Text>
      ) : (
        <FlatList
          data={filteredHinos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderHinoItem}
          ListEmptyComponent={
            <Text className="text-gray-500 text-center mt-8">
              Nenhum hino encontrado
            </Text>
          }
        />
      )}
    </View>
  );
}
