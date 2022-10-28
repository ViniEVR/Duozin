import { StyleSheet, View, Text, Button, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import tw from "twrnc";
import backgound from '../img/FundoLoginCadastro.png'
import logo from '../img/LogoBege.png'
import arrow from '../img/arrow.png'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'


const LoginScreen = () => {
const navigation = useNavigation();

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
      navigation.replace("Home")
    }
  })

  return unsubscribe
}, [])

const handleLogin = () => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
    })
    .catch(error => alert(error.message))
}

  return (

    <View style={tw`flex-1 justify-center`}> 
      <ImageBackground source={backgound} resizeMode="cover" style={tw`flex-1 justify-end text-center`}>
          <Text style={styles.textLogin}>Login</Text>
          <Image  style={styles.logo}  source={logo}/>  

          <View style={tw`px-10`}>
            <TextInput placeholder='Email' placeholderTextColor='#F2CF8D' style={styles.input}  />
            <TextInput placeholder='Senha' placeholderTextColor='#F2CF8D' style={styles.input2} />
          </View>
          
          <TouchableOpacity onPress={handleLogin}>
              <Image style={styles.arrowStyle} source={arrow}  />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("InitialReturn")}> 
              <Image style={styles.arrowStyle2} source={arrow}  />
          </TouchableOpacity>

        
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  arrowStyle: {
    width: 50,
    height: 50,
    marginTop: -55,
    marginBottom: -35,
    marginLeft: 300,
  },
  arrowStyle2: {
    width: 50,
    height: 50,
    marginTop: -15,
    marginTop: -55,
    marginLeft: 5,
    scaleX: -1
  },
  textLogin:{
      marginBottom: 10,
      marginLeft: 30,
      color: '#4649A6',
      fontSize: 30
  },
  input: {
    height: 40,
    margin: 12,
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#3C3F8C',
    color: '#F2CF8D',
    paddingStart: 20,
    borderColor: '#F2CF8D'
  },
  input2: {
    height: 40,
    margin: 12,
    marginTop: 10,
    marginBottom: 60,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#3C3F8C',
    color: '#F2CF8D',
    paddingStart: 20,
    borderColor: '#F2CF8D'
  },
  logo: {
    width: 250,
    height: 250,
    marginLeft: 60,
    marginBottom: 105
  }
})


export default LoginScreen