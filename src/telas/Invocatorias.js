import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  Bars4Icon,
  ChatBubbleLeftIcon
} from "react-native-heroicons/solid";
import Head from "../componentes_aula/Head";
import MenuLateral from "../componentes_aula/MenuLateral";
import invocatorias from "../database/dados/Invocatorias.json";


export default function Invocatorias({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredInvocatorias, setFilteredInvocatorias] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  // Inicializa com todos os invocatorias
  useEffect(() => {
    setFilteredInvocatorias(invocatorias);
  }, []);

  // Filtra os invocatorias conforme o texto de pesquisa
  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredInvocatorias(invocatorias);
    } else {
      const filtered = invocatorias.filter(
        (invocatoria) =>
          invocatoria.numero.toString().includes(searchText)||
          invocatoria.titulo.toLowerCase().includes(searchText)||
          invocatoria.descricao.toLowerCase().includes(searchText.toLocaleLowerCase)||
          invocatoria.Idioma.nome.toLowerCase().includes(searchText)
       
      );
      setFilteredInvocatorias(filtered);
    }
  }, [searchText]);

  const renderinvocatoriaItem = ({ item }) => (
    <TouchableOpacity
      className="border-b border-gray-200 py-3 px-4 mx-4 mt-2"
      onPress={() => navigation.navigate("InvocatoriaDetalhesScreen", { invocatoria: item })}
    >
      <View className="flex-row items-center">
        <View className="bg-blue-100 rounded-full w-8 h-8 items-center justify-center mr-3">
          <Text className="text-blue-800 font-bold text-xl">{item.numero}</Text>
        </View>
        <Text className="text-gray-800 flex-1 text-xl" numberOfLines={1}>
          {item.titulo.replace(/<[^>]*>/g, "")}
        </Text>
        <ChatBubbleLeftIcon size={25} color="#3b82f6" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 mb-5">
      <Head
        title={"Invocatorias"}
        leftIcon={Bars4Icon}
        centerIcon={ChatBubbleLeftIcon

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

      {/* Lista de invocatorias */}
      {loading ? (
        <ActivityIndicator size="large" className="mt-8" />
      ) : error ? (
        <Text className="text-red-500 text-center mt-8">{error}</Text>
      ) : (
        <FlatList
          data={filteredInvocatorias}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderinvocatoriaItem}
          ListEmptyComponent={
            <Text className="text-gray-500 text-center mt-8">
              Nenhum invocatoria encontrado
            </Text>
          }
        />
      )}
    </View>
  );
}

