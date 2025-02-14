import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import t from "tailwind-react-native-classnames";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";

export default function WelcomeScreen(){
    const animation = useRef (null);
    const navigation = useNavigation();
    
    return(
        <View style={[{backgroundColor:'#f64e32'},{gap:20},t`flex-1 justify-center items-center  relative`]}>
          <Image source={require("../../assets/image/background.png")}
          style={{
            position:"absolute",
            width:wp(100),
            height:hp(100),
            resizeMode:"cover",
            
          }}
          />
        
          <StatusBar style="light"/>
          {/* Lottie logo*/}
            <View>
                <LottieView 
                autoPlay
                ref={animation}
                style={{
                    width: wp(60),
                    height:hp(60),
                }}
                source={require("../../assets/lottie/food-logo.json")}
                />
            </View>
          {/*Title and sub*/}
            <View style={{
                alignItems:"center",
                justifyContent:"center",
               
            }}>
                <Text style={t`text-white text-4xl tracking-widest font-bold`}>Food Cafe</Text> 
                <Text style={[t`text-white  tracking-widest font-medium`,
                    {
                       fontSize: hp(2.5)
                    },]  }>Explore some delicious Food</Text>
            </View>
            <View>
                <TouchableOpacity
                style={
                    {
                        backgroundColor:"#ffff",
                        paddingVertical: hp(1.5),
                        paddingHorizontal:hp(5),
                        borderRadius:hp(1.5)

                    }
                }
                onPress={()=> navigation.navigate("Home")}
                >
                    <Text
                    style={{
                        color:"#f64e32",
                        fontSize:hp(2.2),
                        fontWeight:"medium"
                    }}
                    >
                    Get Started
                    </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
