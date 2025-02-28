import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {LightBulbIcon, HeartIcon, ShareIcon, MagnifyingGlassPlusIcon, MagnifyingGlassMinusIcon, ArrowLeftIcon, LanguageIcon } from "react-native-heroicons/solid"

export default function Rodape (){

    return(
        <View style={Styles.container}>
          <View style={Styles.text}>
            <TouchableOpacity>
             <MagnifyingGlassPlusIcon size={30} color={'white'}/>
            </TouchableOpacity>
          </View>
          <View style={Styles.text}>
            <TouchableOpacity>
              <MagnifyingGlassMinusIcon size={30} color={'white'}/>
            </TouchableOpacity>
          </View>
          <View style={Styles.text}>
            <TouchableOpacity>
              < LightBulbIcon size={30} color={'white'}/>
            </TouchableOpacity>
          </View>
          <View style={Styles.text}>
           <TouchableOpacity>
              <HeartIcon size={30} color={'white'}/>
           </TouchableOpacity>
          </View>
          <View style={Styles.text}>
            <TouchableOpacity>
              <ShareIcon size={30} color={'white'}/>
            </TouchableOpacity>
          </View>
        </View>
    )
} 

const Styles= StyleSheet.create({
    
    container:{
        backgroundColor:"#FF7E82",
        height:70,
        paddingVertical:10,
        paddingHorizontal:10,  
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        position:"static",
        alignSelf:"flex-end"
    },
  text:{
       marginHorizontal:25,
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
    
    

    
  }

})