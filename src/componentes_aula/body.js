 import React,{useRef} from 'react'
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/solid'; 
import Hino from './Hino';

export default function Body(){

    const scrollRef = useRef();
    var {wid, heig} = Dimensions.get("window");

    return (
      <View style={Style.container}>
          <ScrollView 
         decelerationRate="normal"
         style={{height:800}}
         showsVerticalScrollIndicator={false}>
          <Hino/>
         </ScrollView>  
      </View>
    )
  }
const Style = StyleSheet.create({
    container:{
       
      
       
    }

})