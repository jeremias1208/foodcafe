import { View, Text, Image, StatusBar, TextInput, TouchableOpacity} from "react-native";
import React from "react";
import Animated, 
{
    useSharedValue, withTiming, useAnimatedStyle, Easing, FadeIn, FadeInUp, FadeInDown

} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function AnimatedStyleUpadateExample(props){
    const navigation =useNavigation ();


    
    return(
        <View className="bg-white h-full w-full">
           <StatusBar style="light"/>
           <Image className="h-full w-full absolute" source={require('../../assets/image/background_1.png')}/>
           
           <View className="flex-row justify-around w-full absolute">
                <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[225] w-[90]" source={require('../../assets/image/light.png')}/>
                <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className="h-[160] w-[65]" source={require('../../assets/image/light.png')}/>
           </View>
           {/*Title and form */}
           <View className="h-full w-full flex justify-around pt-40 pb-10 ">
                <View className="flex items-center">
                    <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold -tracking-wider text-5xl">
                        Sing Up</Animated.Text>
                </View>

                <View className="flex items-center mx-4 space-y-4">
                    <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-2 rounded-2xl w-full mb-3">
                        <TextInput placeholder="Username" placeholderTextColor={"gray"}/>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-2 rounded-2xl w-full mb-3">
                        <TextInput placeholder="Email" placeholderTextColor={"gray"} secureTextEntry/>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-black/5 p-2 rounded-2xl w-full mb-3">
                        <TextInput placeholder="Password" placeholderTextColor={"gray"} secureTextEntry/>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="w-full">
                        <TouchableOpacity className="w-full bg-sky-400 p-4 rounded-2xl mb-3 ">
                            <Text className="text-white text-xl font-bold text-center">SingUp</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className="flex-row justify-center">
                        <Text>Already have an account?</Text>
                        <TouchableOpacity onPress={()=> navigation.push('Login')}>
                            <Text className="text-sky-600"> Login</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    
                </View>
           </View> 
        </View>
    )
}


