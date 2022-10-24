import { StyleSheet, View, Text, Button, TextInput, ImageBackground, Image } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import tw from "twrnc";
import backgound from '../img/FundoLoginCadastro.png'
import logo from '../img/LogoBege.png'

const LoginScreen = () => {
  const { signinWithGoogle } = useAuth();
  
  return (
    <View style={tw`flex-1 justify-center`}> 
      <ImageBackground source={backgound} resizeMode="cover" style={tw`flex-1 justify-end text-center`}>
          <Text style={tw`justify-end`}>Login</Text>
          <Image  style={styles.logo}  source={logo}/>  

          <View style={tw`container px-10`}>
            <TextInput placeholder='Email' placeholderTextColor='#F2CF8D' style={styles.input} />
            <TextInput placeholder='Senha' placeholderTextColor='#F2CF8D' style={styles.input2} secureTextEntry />
          </View>
          

          <Button title='Login' onPress={signinWithGoogle} />

        
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
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
    marginBottom: 25,
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