import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import InitialScreen from "./screens/InitialScreen";
import RegisterScreen from "./screens/RegisterScreen";
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
            <Stack.Screen name="Game" component={GameSelectorScreen} />
            
            
        </Stack.Navigator>
    )
}

export default StackNavigator