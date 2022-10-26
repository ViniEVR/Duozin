import { StyleSheet, View, Text, Button, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import tw from "twrnc";
import backgound from '../img/FundoHome.png'
import logo from '../img/LogoBege.png'
import arrow from '../img/arrow.png'
import fortnite from '../img/fortnite.jpg'
import cs from '../img/cs.jpg'
import freefire from '../img/freefire.jpg'
import overwatch from '../img/overwatch.jpg'
import mk from '../img/mk.jpg'
import lol from '../img/lol.jpg'
import rainbowsix from '../img/rainbowsix.jpg'
import valorant from '../img/valorant.png'
import { useNavigation } from '@react-navigation/native'


const GameSelectorScreen = () => {
const navigation = useNavigation();
const { signinWithGoogle } = useAuth();
  return (
    <View style={tw`flex-1 justify-center`}> 
      <ImageBackground source={backgound} resizeMode="cover" style={tw`flex-1 justify-end text-center`}>

        <View>
        <Image  style={styles.games}  source={fortnite}/>
        <Image  style={tw`float-right`}  source={overwatch}/>
        </View>
          <View style={tw`px-30`}>
            
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textButton}>TESTE</Text>
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
  fundo:{
    backgroundColor: '#292759',
    resizeMode: 'cover', 
  },
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
  },
  games: {
    width: 170,
    height: 95,
  },
  games2: {
    width: 170,
    height: 95,
  }
})


export default GameSelectorScreen