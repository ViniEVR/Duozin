import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import tw from "twrnc";
import logo from "../img/LogoBege.png"
import backgound from '../img/FundoHome.png'
import menuX from '../img/MenuX.png'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const MenuScreen = () => {
const navigation = useNavigation();
const handleSignOut = () =>{
    auth
    .signOut()
    .then(() => {
      navigation.replace("InitialReturn")
    })
    .catch(error => alert(error.message))
   }
  return (
    <View style={tw`flex-1 justify-center`}> 
      <ImageBackground source={backgound} resizeMode="cover" style={tw`flex-1 justify-end text-center`}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}> 
                <Image style={styles.menuX} source={menuX}  />
            </TouchableOpacity>

          <View style={tw`px-30`}>
            <Image source={logo} style={styles.logo} />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>FAQ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={handleSignOut}>
              <Text style={styles.textButton}>Sair</Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    menuX:{
        width: 40,
        height: 40,
        marginLeft: 15,
        marginBottom: 35
    },
    button:{
      backgroundColor: '#3C3F8C',
      padding: 10,
      borderRadius: 15,
      marginBottom: 20
    },
    button2:{
        backgroundColor: '#3C3F8C',
        padding: 10,
        borderRadius: 15,
        marginBottom: 150
      },
    textButton: {
      color: '#F2CF8D',
      textAlign: 'center',
      fontSize: 20
    },
    logo: {
        width: 80,
        height: 80,
        marginLeft: 15,
        marginBottom: 70,
        marginTop: -65
      }
  })

  
export default MenuScreen