import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {HeartIcon } from "react-native-heroicons/outline"
import {BookOpenIcon, MusicalNoteIcon, ArrowLeftIcon, LanguageIcon } from "react-native-heroicons/solid"

export default function Cabecalho (){

    return(
        <View style={Styles.container}>
          <View style={Styles.text}>
            <ArrowLeftIcon size={30} color={'white'}/>
          </View>
          <View style={Styles.text}>
            <MusicalNoteIcon size={25} color={'white'}/>
            <Text style={Styles.text1}>Hinos</Text>
          </View>
          <View style={Styles.text}>
            <LanguageIcon size={30} color={'white'}/>
          </View>
        </View>
    )
} 

const Styles= StyleSheet.create({
    
    container:{
        backgroundColor:"#FF7E82",
        height:90,
        paddingVertical:10,
        paddingHorizontal:10,  
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"flex-start"
    },
  text:{
    marginTop:20,
    marginHorizontal:55,
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
    
    

    
  },
  text1:{
    fontSize:20,
    fontWeight:"bold",
    color:"white",
    paddingLeft:8
    
  }

})