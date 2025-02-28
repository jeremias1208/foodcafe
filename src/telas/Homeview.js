import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput} from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LinearGradient } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import {MagnifyingGlassIcon, UserCircleIcon} from "react-native-heroicons/outline";
import Categories from "../components/categories.js";
import SortCategories from "../components/sortCategories.js";

export default function Homeview (){
    const navigation = useNavigation();
    return(
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView showsVerticalScrollIndicator={false} className="space-y-6">
                {/*Avatar */}
                <View className="mx-5 flex-row justify-between items-center mt-10">
                    <Text style={{fontSize: wp(7)}} className="font-bold text-neutral-700">Let's Discover</Text>
                    <TouchableOpacity>
                        <Image source={require('../../assets/imageTravel/avatar.png')} style={{height:wp(12), width: wp(12)}} />
                    </TouchableOpacity>
                </View>

                {/*search */}
                <View className="mx-5 mt-8">
                    <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
                   <MagnifyingGlassIcon size={20} strokeWidth={3} color={'gray'}/>
                    <TextInput 
                    placeholder="Search destination..."
                    placeholderTextColor={'gray'}
                    className="flex-1 te pl-1 tracking-wider"
                    />
                    </View>
                </View>
                {/*Categorias */}
                <View className="mb-4 ">
                    <Categories/>
                </View>

                {/*ShortCategorias */}
                <View className="mb-4 ">
                    <SortCategories/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}