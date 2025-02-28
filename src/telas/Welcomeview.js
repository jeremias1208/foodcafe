import { Text, View, Image, TouchableOpacity} from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LinearGradient } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

export default function Homeview (){
    const navigation = useNavigation();
    return(
        <View className=" flex-1 flex justify-end">
            <LinearGradient
                colors={['transparant', 'rgba(3,105,161, 0.8']}
                style={{widht: wp(100), height:hp(60)}}
                start={{x: 0.5, y:0}}
                end={{x:0.5, y:1}}
                className="absolute bottom-0"
            />
          <Image 
          source={require('../../assets/imageTravel/_welcome.png')}
          className="h-full w-full absolute"
          />
          <View className="p-8 pb-10 space-y-8">
            <View className="space-y-4">
                <Text className="text-white font-bold text-5xl" style={{fontSize: wp(10)}}>Traveling made easy!</Text>
                <Text className="text-neutral-200 font-mediumm " style={{fontSize: wp(4)}}>
                    Experince the word's best adventure around the world with us
                </Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.push('Homeview')} className="bg-orange-500 mx-auto p-3 px-12  rounded-full">
                <Text className="text-white font-bold" style={{fontSize: wp(5.5)}}>Let's go!</Text>
            </TouchableOpacity>
          </View>
        </View>
    )

}