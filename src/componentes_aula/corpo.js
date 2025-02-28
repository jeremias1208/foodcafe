 import React,{useRef} from 'react'
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'

export default function Corpo(){

    const scrollRef = useRef();
    var {wid, heig} = Dimensions.get("window");

    return (
      <View style={Style.container}>
            <Text style={Style.text_title}>Hino nº 00 </Text>
         <ScrollView 
         decelerationRate="normal"
         style={{height:640}}
         showsVerticalScrollIndicator={false}>
            <View style={Style.container_Letra}>
                <Text style={Style.text_letra}>
                    1. Vosi veye lesumbilo,{"\n"}
                    Ha tu imbi etumbangiyo.{"\n"}
                    Yesu eye Onjovoli;{"\n"}
                    Tu sivayi onduko ya'e.{"\n"}
                    {"\n"}
                   <Text style={{fontWeight:"bold", fontStyle:"italic"}}> 
                     Yesu eye o tu sole,{"\n"}
                    Tu siyayi onduko ya'e. (2x){"\n"} </Text>
                    {"\n"}
                    2. Hati nda wa liongoluili,{"\n"}
                    Vonduko yange ndi Yesu.{"\n"}
                    Ndaño wuvañamiñami,{"\n"}
                    Ñala lene lohenda.{"\n"}
                    {"\n"}
                    3. Ndaño o li lovakandu{"\n"}
                    Yesu wa ku kovonga.{"\n"}
                    Hati ndo tambule eyovo,{"\n"}
                    Akandu osi ngecela.{"\n"}

                    
                    {"\n"}
                   <Text style={{fontWeight:"bold", fontStyle:"italic"}}> 
                     Yesu eye o tu sole,{"\n"}
                    Tu siyayi onduko ya'e. (2x){"\n"} </Text>
                    {"\n"}
                    4. Ovisungo tu wimbili,{"\n"}
                    Tu sivaya onduko ya'e.{"\n"}
                    Eye wa tu sumuluisa{"\n"}
                    Ha tu moli esanju la'e{"\n"} 
                    
                    {"\n"}
                   <Text style={{fontWeight:"bold", fontStyle:"italic"}}> 
                     Yesu eye o tu sole,{"\n"}
                    Tu siyayi onduko ya'e. (2x){"\n"} </Text>
                    {"\n"}
                    4. Ovisungo tu wimbili,{"\n"}
                    Tu sivaya onduko ya'e.{"\n"}
                    Eye wa tu sumuluisa{"\n"}
                    Ha tu moli esanju la'e{"\n"} 
                    {"\n"}
                    4. Ovisungo tu wimbili,{"\n"}
                    Tu sivaya onduko ya'e.{"\n"}
                    Eye wa tu sumuluisa{"\n"}
                    Ha tu moli esanju la'e{"\n"} 
                </Text>
             </View>
         </ScrollView>  
      </View>
    )
  }
const Style = StyleSheet.create({
    container:{
       alignItems:"center" ,
       marginTop:30, 
      
       
},
container_Letra:{
    marginHorizontal:41,
    marginVertical:30,
    alignItems:"center"
},
text_title:{
    fontWeight:"bold",
    fontSize:24,
    color:"#FF7E82",
   
    
},
text_letra:{
    fontWeight:"regular",
    fontSize:24,
    color:"#00000",
    textAlign:"center"
    
    
}

})