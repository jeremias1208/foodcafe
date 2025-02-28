 import React,{useRef} from 'react'
import {StyleSheet, Text, View, Dimensions } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/solid'; 

export default function Hino(){

    const scrollRef = useRef();
    var {wid, heig} = Dimensions.get("window");

    return (
        <View style={Style.containerHino}>
            <View style={Style.containerTitle}>
                <Text style={Style.text_title}>Nº - </Text>
                <Text style={Style.text_title}>Bem cedinho ao templo eu ...         
                </Text>
            </View>
            <ArrowRightIcon size={25} color={'black'} />
       </View>
    )
  }
  const Style = StyleSheet.create({
containerHino:{
    flexDirection:"row",
    alignItems:"center",
    height:65,
    backgroundColor:"white",
    paddingHorizontal:24,
    shadowRadius:10,
    shadowColor:"#fff"
    
    
    
    

},
containerTitle:{
    
    flexDirection:"row",
    marginRight:45
},
text_title:{
    fontSize:20,
    color:"black",
    
},

})