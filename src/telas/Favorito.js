import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Head from "../componentes_aula/Head";
import { getFavoritos } from "../services/favorito";

import {
  MagnifyingGlassIcon,
  HeartIcon,
  Bars4Icon,
  BookOpenIcon,
} from "react-native-heroicons/solid";

export default function Favorito({ navigation }) {

    const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const carregarFavoritos = async () => {
      const lista = await getFavoritos();
      setFavoritos(lista);
    };
    const unsubscribe = navigation.addListener('focus', carregarFavoritos);
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="border-b border-gray-200 py-3 px-4 mx-4 mt-2"
      onPress={() => navigation.navigate("HinoDetalhesScreen", { hino: item })}
    >
      <View className="flex-row items-center">
        <View className="bg-red-100 rounded-full w-8 h-8 items-center justify-center mr-3">
          <Text className="text-red-800 font-bold text-xl">{item.numero}</Text>
        </View>
        <Text className="text-gray-800 flex-1 text-xl" numberOfLines={1}>
          {item.titulo}
        </Text>
        <MusicalNoteIcon size={25} color="#f87171" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>

      <Head
        title={"Favoritos"}
        leftIcon={Bars4Icon}
        centerIcon={BookOpenIcon}
        rightIcon={HeartIcon}
        searchIcon={MagnifyingGlassIcon}
      />
      <Text className="text-center font-bold text-xl my-4">Hinos Favoritos</Text>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text className="text-center text-gray-500 mt-8">Nenhum hino favoritado ainda.</Text>
        }
      />
    </View>
  );
}
