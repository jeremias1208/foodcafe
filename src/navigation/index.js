import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen"
import login from "../screens/login";
import singUp from "../screens/singUp";

const Stack =createNativeStackNavigator();

export default function AppNavigation(){
    return(

        <NavigationContainer>
         <Stack.Navigator
         initialRouteName="Login"
         screenOptions={{headerShown: false}}
         >
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={login}/>
            <Stack.Screen name="SingUp" component={singUp}/>
         </Stack.Navigator>
        </NavigationContainer>
    )
}