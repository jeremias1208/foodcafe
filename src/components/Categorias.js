import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import {categoryData} from "../constants"
import { TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp} from "react-native-responsive-screen";


export default function Categorias({ categories, activeCategory, handleChangeCategory}){
    return(
        <View>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator
            style={{
                display:"flex",
            }}
            contentContainerStyle={{
                paddingHorizontal:15
            }}
            >

            {categoryData.map((category, index)=>{
                let isActive = category.strCategory == activeCategory;
                let activeButtonClass = isActive ? "bg-[#f64e32]": "gray";

                return(
                    <TouchableOpacity 
                        key={index}
                        style={{
                            display:"flex",
                            marginRight:14,
                            justifyContent:"center",
                            
                            
                            
                        }}
                       
                     >
                        <View style={t`rounded-xl`+ activeButtonClass}>
                            <Image source={{uri: category.strCategoryThumb}}
                            style={{
                                width:hp(6),
                                height: hp(6),
                                borderRadius:9999,
                                
                        }}
                        
                        />
                        <Text style={{fontSize:hp(1.6)}}>{category.strCategory}</Text>
                        </View>
                       
                    </TouchableOpacity>
                )

            })}
            </ScrollView>
        </View>
    )
}