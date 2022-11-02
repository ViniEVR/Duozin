import { StyleSheet, View, Text, Button, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc";
import backgound from '../img/FundoHome.png'
import perfil from '../img/ProfilePicture.png'
import botao from '../img/BotaoDuozin.png'
import botaoX from '../img/BotaoXDuozin.png'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase';


const HomeScreen = () => {
const navigation = useNavigation();

  const handleSignOut = () =>{
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
   }

  return (
    <View style={tw`flex-1 justify-center`}> 
      <ImageBackground source={backgound} resizeMode="cover" style={tw`flex-1 justify-end text-center`}>


          <View style={tw`px-30`}>

            <View style={styles.fundo}>
              <Image source={perfil} style={styles.profileImage} />
            </View>

            <TouchableOpacity style={styles.button2} onPress={handleSignOut}>
              <Text style={styles.textButton}>Sair</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity> 
              <Image style={styles.arrowStyle} source={botao}  />
          </TouchableOpacity>
          
          <TouchableOpacity> 
              <Image style={styles.arrowStyle2} source={botaoX}  />
          </TouchableOpacity>
          
        
        </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  arrowStyle: {
    width: 80,
    height: 80,
    marginTop: -55,
    marginBottom: 10,
    marginLeft: 230,
  },
  arrowStyle2: {
    width: 80,
    height: 80,
    marginTop: -90,
    marginLeft: 50,
    scaleX: -1
  },
  profileImage: {
    width: 300,
    height: 400,
    borderRadius: 30
  },
  fundo:{
    backgroundColor: '#FFFFFF',
    width: 300,
    height: 400,
    marginLeft: -90,
    borderRadius: 30
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
  }
})


export default HomeScreen