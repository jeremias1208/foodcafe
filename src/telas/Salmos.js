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
  FireIcon,
} from "react-native-heroicons/solid";
import Head from "../componentes_aula/Head";
import MenuLateral from "../componentes_aula/MenuLateral";
import salmos from "../database/Salmos.json";


export default function Salmos({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredSalmos, setFilteredSalmos] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  // Inicializa com todos os salmos
  useEffect(() => {
    setFilteredSalmos(salmos);
  }, []);

  // Filtra os salmos conforme o texto de pesquisa
  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredSalmos(salmos);
    } else {
      const filtered = salmos.filter(
        (salmo) =>
          salmo.titulo.toLowerCase().includes(searchText) ||
          salmo.deescricao.toLowerCase().includes(searchText.toLowerCase()) ||
          salmo.numero.toString().includes(searchText) ||
          salmo.Idioma.nome.toLowerCase().includes(searchText)
      );
      setFilteredSalmos(filtered);
    }
  }, [searchText]);

  const rendersalmoItem = ({ item }) => (
    <TouchableOpacity
      className="border-b border-gray-200 py-3 px-4 mx-4 mt-2"
      onPress={() => navigation.navigate("SalmoDetalhesScreen", { salmo: item })}
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
        title={"Salmos"}
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

      {/* Lista de salmos */}
      {loading ? (
        <ActivityIndicator size="large" className="mt-8" />
      ) : error ? (
        <Text className="text-red-500 text-center mt-8">{error}</Text>
      ) : (
        <FlatList
          data={filteredSalmos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={rendersalmoItem}
          ListEmptyComponent={
            <Text className="text-gray-500 text-center mt-8">
              Nenhum salmo encontrado
            </Text>
          }
        />
      )}
    </View>
  );
}
