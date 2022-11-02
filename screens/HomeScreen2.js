import { StyleSheet, View, Text, Button, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc";
import backgound from '../img/FundoHome.png'
import logo from '../img/LogoBege.png'
import perfil from '../img/ProfilePicture2.png'
import botao from '../img/BotaoDuozin.png'
import botaoX from '../img/BotaoXDuozin.png'
import menu from '../img/Menu.png'
import joystick from '../img/Joystick.png'
import { useNavigation } from '@react-navigation/native'


const HomeScreen2 = () => {
const navigation = useNavigation();

return (
    <View style={tw`flex-1 justify-center`}> 
      <ImageBackground source={backgound} resizeMode="cover" style={tw`flex-1 justify-end text-center`}>


          <View style={tw`px-30`}>

            <View style={styles.fundo}>
              <TouchableOpacity onPress={() => navigation.navigate("Menu2")}> 
                <Image style={styles.menu} source={menu}  />
              </TouchableOpacity>
              <Image source={logo} style={styles.logo} />
              <Image source={perfil} style={styles.profileImage} />
              <View style={styles.footer}>
                    <Text style={styles.textFooter}>Shaconeles</Text>
                    <Text style={styles.textFooter2}>Procuro alguém para tiltar </Text>
                    <Text style={styles.textFooter2}>mid ruim</Text>
                    <Text style={styles.textFooter2}>Jogo o dia inteiro</Text>
                    <Image source={joystick} style={styles.joystick} />
                    <Text style={styles.textGame}>-LOL</Text>
              </View>
            </View>           
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Home3")}> 
              <Image style={styles.arrowStyle} source={botao}  />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate("Home3")}> 
              <Image style={styles.arrowStyle2} source={botaoX}  />
          </TouchableOpacity>
          
        
        </ImageBackground>
    </View>
)}


const styles = StyleSheet.create({
  menu:{
    width: 60,
    height: 60,
    marginTop: -60,
    marginLeft: -25,
  },
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
    backgroundColor: '#4649A6',
    width: 300,
    height: 400,
    marginLeft: -90,
    borderRadius: 30,
    marginBottom: 70
  },
  footer:{
    backgroundColor: 'rgba(16, 15, 15, 0.7)',
    width: 300,
    height: 100,
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30, 
    marginTop: -100,
  },
  textFooter:{
    color: '#F2CF8D',
    fontSize: 20,
    marginLeft: 10,
  },
  textFooter2:{
    color: '#F2CF8D',
    fontSize: 15,
    marginLeft: 10,
  },
  textGame:{
    color: '#F2CF8D',
    fontSize: 15,
    marginLeft: 245,
    marginTop: -5,
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
    width: 80,
    height: 80,
    marginLeft: 110,
    marginBottom: -15,
    marginTop: -65
  },
  joystick: {
    width: 60,
    height: 40,
    marginLeft: 230,
    marginTop: -80
  }
})


export default HomeScreen2