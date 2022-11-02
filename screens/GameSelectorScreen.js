import { StyleSheet, View, Text, Button, TextInput, TouchableWithoutFeedback, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native'
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
import imagem from '../img/csChecked.png'
import { useNavigation } from '@react-navigation/native'
import { discovery } from 'expo-auth-session/build/providers/Google';


const GameSelectorScreen = () => {
const navigation = useNavigation();
const { signinWithGoogle } = useAuth();

let imagenzinha = fortnite

const SwitchImage1 = () => {
  imagenzinha = valorant
  console.log("Clicado né")

  
}
  return (
    <View style={tw`flex-1 justify-center`}> 
      <ImageBackground source={backgound} resizeMode="cover" style={tw`flex-1 justify-end text-center`}>

      <View style={{}}>
        <Text style={{color: '#F2CF8D', fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 10}}>Escolha seus 3 jogos favoritos:</Text>
      </View>

      <View style={{marginLeft: 30, marginRight: 30, borderWidth: 5, borderStyle: 'solid', borderColor: '#F2CF8D', height: 350, alignItems: 'center'}}>

      {/* Comentário aleatório*/}

      <ScrollView style={{}}>
        <TouchableOpacity onPress={SwitchImage1}>
          <Image style={styles.games} source={imagenzinha}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.games} source={overwatch}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.games} source={rainbowsix}/>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image style={styles.games} source={cs}/>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image style={styles.games} source={freefire}/>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image style={styles.games} source={lol}/>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image style={styles.games} source={valorant}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.games} source={mk}/>
        </TouchableOpacity>
        
        
      </ScrollView>
      </View>

          <View style={tw`px-30`}>
            

            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>

            

          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
    marginBottom: 60,
    marginTop: 10
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
    width: 305,
    height: 170,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    paddingBottom: 10,
  },
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
})


export default GameSelectorScreen