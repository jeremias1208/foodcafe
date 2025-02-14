import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, TextComponent} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import t from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Categorias from "../components/Categorias";
import axios from "axios";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function HomeScreen(){
    const animation = useRef (null);
    const navigation = useNavigation();

    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
        
    useEffect(() => {
        getCategories();
        //getRecipes();
    }, [])

    const handleChangeCategory = (category)=>{
       // getRecipes(category);
        setActiveCategory(category);
        setMeals([]);

    }

    const getCategories =async ()=>{
        try {
            const responsive =await axios.get(
                "www.themealdb.com/api/json/v1/1/categories.php"
            );
            if(responsive && responsive.data){
                setCategories (responsive.data.categories);

            }
        } catch (error) {
            console.log(error.message);
            
        }
    };


    return(
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />

            <SafeAreaView>
                <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50,
                }}
                style={{paddingTop:14, marginTop:6}}
                >
                    <View className="ml-4 mr-4 flex-row justify-between items-center">
                       <FontAwesome name="sliders" size={hp(4)} color="gray"/>
                       <Image
                            source={require("../../assets/image/user.png")}
                            style={{
                                width:hp(5),
                                height:hp(5.5),
                                resizeMode:"cover"
                            }}
                            className="rounded-full"
                       />
                    </View>
                    <View className="m-4 space-y-1 mb-2" >
                        <View>
                            <Text style={{fontSize: hp(3.5), fontWeight:"800"}}>Fast & Delicious</Text>
                        </View>
                        <Text  style={{fontSize: hp(3.5), fontWeight:"900", }}>
                            Fast You 
                            <Text style={{color:"#f64e32"}}> Love</Text>
                        </Text>
                    </View>
                    <View className="m-4 flex-row items-center border rounded-xl border-black p-1">
                        <View style={t`ml-1 bg-white`}>

                        <FontAwesome name="search" size={hp(3)} color="gray" strokeWidth={3}/>
                        </View>
                        <TextInput
                        placeholder="Search your favorite Food"
                        placeholderTextColor={"gray"}
                        style={{
                            fontSize:hp(2)
                        }}
                        />
                    </View>
                    <View>
                        <Categorias/>
                    </View>
                </ScrollView>
            </SafeAreaView>

        </View>
    )
}