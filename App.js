import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Text } from "react-native";
import Home from "./screens/Home";
import Hasil from "./screens/hasil";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();
export default function App() {

  return (    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen 
      name="Home" 
      component={Home}
      options={{headerShown:false}}/>
    <Stack.Screen 
      name="Hasil" 
      component={Hasil}
      options={{headerShown:false}}/>
    </Stack.Navigator>
    <StatusBar style="light"/>
    </NavigationContainer>
  );
}

