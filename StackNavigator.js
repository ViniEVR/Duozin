import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import InitialScreen from "./screens/InitialScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RegisterScreen2 from "./screens/RegisterScreen2";
import MenuScreen from "./screens/MenuScreen"
import MenuScreen2 from "./screens/MenuScreen2";
import MenuScreen3 from "./screens/MenuScreen3";
import DuozinScreen from "./screens/DuozinScreen";
import HomeScreen2 from "./screens/HomeScreen2";
import HomeScreen3 from "./screens/HomeScreen3";
import GameSelectorScreen from "./screens/GameSelectorScreen";
import useAuth from "./hooks/useAuth";


const Stack = createNativeStackNavigator();

const StackNavigator = () =>{
    const {user} = useAuth()

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
        {user ? (
            <>
                <Stack.Screen name="Home" component={HomeScreen} />                   
            </>
        ) : (
            <Stack.Screen name="Initial" component={InitialScreen} /> 
        )}                  
            <Stack.Screen name="InitialReturn" component={InitialScreen} /> 
            <Stack.Screen name="Home" component={HomeScreen} /> 
            <Stack.Screen name="Chat" component={ChatScreen} /> 
            <Stack.Screen name="Login" component={LoginScreen} /> 
            <Stack.Screen name="Register" component={RegisterScreen} />          
            <Stack.Screen name="Register2" component={RegisterScreen2}/>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Menu2" component={MenuScreen2} />
            <Stack.Screen name="Menu3" component={MenuScreen3} />
            <Stack.Screen name="Duozin" component={DuozinScreen} />
            <Stack.Screen name="Home2" component={HomeScreen2} />
            <Stack.Screen name="Home3" component={HomeScreen3} />
            <Stack.Screen name="Games" component={GameSelectorScreen} />
            
        </Stack.Navigator>
    )
}

export default StackNavigator