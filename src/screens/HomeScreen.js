import { View, Text, TouchableOpacity, ScrollView, Image} from "react-native";
import React, {useRef} from "react";
import {useNavigation} from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import t from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(){
    const animation = useRef (null);
    const navigation = useNavigation();
        

    return(
        <View style={{flex:1,backgroundColor:"#ffff",} }>
         <StatusBar style="dark"/> 
         
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom:50,
                    }}
                    style= {t`space-y-6 pt-14`}
                    >
                    <View style={{
                        justifyContent:"space-between",
                        flex:"rr"
                    }}>
                        <Image size={hp(4)} color={"gray"} source={require("../../assets/image/shana.jpeg")}/>
                        <Image source={require("../../assets/image/shana.jpeg")}
                        style={{
                            width: wp(5),
                            height: hp(5),
                            resizeMode:"cover"
                        }}
                        />
                    </View>    
                </ScrollView>
            </SafeAreaView>
                 
        </View>
    )
}