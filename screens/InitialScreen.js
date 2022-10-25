import { StyleSheet, View, Text, Button, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import tw from "twrnc";
import backgound from '../img/FundoPrincipal.png'
import logo from '../img/LogoBege.png'
import arrow from '../img/arrow.png'
import { useNavigation } from '@react-navigation/native'


const InitialScreen = () => {
const navigation = useNavigation();
const { signinWithGoogle } = useAuth();
  return (
    <View style={tw`flex-1 justify-center`}> 
      <ImageBackground source={backgound} resizeMode="cover" style={tw`flex-1 justify-end text-center`}>
          <Image  style={styles.logo}  source={logo}/>  

          <View style={tw`px-30`}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textButton}>Cadastro</Text>
          </TouchableOpacity>
          </View>
          
          
        
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3C3F8C',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10
  },
  button2:{
    backgroundColor: '#3C3F8C',
    padding: 10,
    borderRadius: 15,
    marginBottom: 40
  },
  textButton: {
    color: '#F2CF8D',
    textAlign: 'center',
    fontSize: 20
    
  },
  logo: {
    width: 250,
    height: 250,
    marginLeft: 60,
    marginBottom: 140
  }
})


export default InitialScreen