import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import tw from "twrnc";
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAut';



export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator  />
      </AuthProvider>           
    </NavigationContainer>    
  );
}
