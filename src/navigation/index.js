import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {} from "expo";
import Hinos from "../telas/Hinos";
import Salmos from "../telas/Salmos";
import Invocatorias from "../telas/Invocatorias";
import Oracoes from "../telas/Oracoes";
import Litanias from "../telas/Litanias";
import Home from "../telas/Home";
import HinosScreen from "../telas/HinosScreen";
import LitaniaScreen from "../telas/LitaniaScreen";
import Favorito from "../telas/Favoritod";
import HinoList from "../telas/HinoList";
import HinoDetalhesScreen from "../telas/HinoDetalhesScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={login}/>
            <Stack.Screen name="SingUp" component={singUp}/> 
            <Stack.Screen name="Homeview" component={Homeview}/>
            <Stack.Screen name="Welcomeview" component={Welcomeview}/>*/}
        <Stack.Screen name="Hinos" component={Hinos} />
        <Stack.Screen name="Salmos" component={Salmos} />
        <Stack.Screen name="Invocatorias" component={Invocatorias} />
        <Stack.Screen name="Oracoes" component={Oracoes} />
        <Stack.Screen name="Litanias" component={Litanias} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HinosScreen" component={HinosScreen} />
        <Stack.Screen name="LitaniaScreen" component={LitaniaScreen} />
        <Stack.Screen name="Favorito" component={Favorito} />
        <Stack.Screen name="HinoList" component={HinoList} />
        <Stack.Screen
          name="HinoDetalhesScreen"
          component={HinoDetalhesScreen} options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
