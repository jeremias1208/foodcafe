import React, {useEffect} from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, ImageBackground} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Splash({navigation}){
const image = require('../../assets/image/Splash_2.png');

        useEffect(()=>{
            const timer =setTimeout(()=>{
                navigation.replace('Home');
            }, 3000);

            return () => clearTimeout(timer)
        }, [])
    return(
        <View className=" flex-1 ">
            <ImageBackground source={image} className="flex-1">
                <ActivityIndicator animating={true} size={'large'} color={"#ffff"} hidesWhenStopped={false} style={styles.load}/>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
  load: {
    
    bottom:50,
    right:'46.5%',
    alignItems:"center",
    position:"absolute"

}
});