import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

{/*import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen"
import login from "../screens/login";
import singUp from "../screens/singUp";
import Homeview from "../telas/Homeview";
import Welcomeview from "../telas/Welcomeview";
import Aula from "../telas/Aula";
import AulaList from "../telas/AulaList";*/}
import Hinos from "../telas/Hinos";
import Salmos from "../telas/Salmos";
import Invocatorias from "../telas/Invocatorias";
import Oracoes from "../telas/Oracoes"; 
import Litanias from "../telas/Litanias";
import Home from "../telas/Home";



const Stack =createNativeStackNavigator();

export default function AppNavigation(){
    return(

        <NavigationContainer>
         <Stack.Navigator
         initialRouteName="Home"
         screenOptions={{headerShown: false}}
         >
           {/* <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={login}/>
            <Stack.Screen name="SingUp" component={singUp}/> 
            <Stack.Screen name="Homeview" component={Homeview}/>
            <Stack.Screen name="Welcomeview" component={Welcomeview}/>*/}
            <Stack.Screen name="Hinos" component={Hinos}/>
            <Stack.Screen name="Salmos" component={Salmos}/>
            <Stack.Screen name="Invocatorias" component={Invocatorias}/>
            <Stack.Screen name="Oracoes" component={Oracoes}/>
            <Stack.Screen name="Litanias" component={Litanias}/>
            <Stack.Screen name="Home" component={Home}/>
          </Stack.Navigator>
        </NavigationContainer>
    )
}