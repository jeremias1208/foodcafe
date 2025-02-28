import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Cabecalho from "../componentes_aula/cabecalho";
import Rodape from "../componentes_aula/rodape";
import Corpo from "../componentes_aula/corpo";

export default function Aula (){

    return(

        <View style={Styles.container}>
            <Cabecalho/>
            <View>
                <Corpo/>
            </View>
            <Rodape/>
        </View>
    )
}
const Styles= StyleSheet.create({
    
    container:{
       
        flex:1,
        backgroundColor:"#ffff",
        justifyContent:"space-between"
   
      }
})