import { StyleSheet, View, Text, Button, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc";
import backgound from '../img/FundoHome.png'
import logo from '../img/LogoBege.png'
import perfil from '../img/ProfilePicture.png'
import menu from '../img/Menu.png'
import perfil2 from '../img/ProfilePicture3.png'
import { useNavigation } from '@react-navigation/native'


const DuozinScreen = () => {
const navigation = useNavigation();

return (
    <View style={tw`flex-1 justify-center`}> 
      <ImageBackground source={backgound} resizeMode="cover" style={tw`flex-1 justify-end text-center`}>


          <View style={tw`px-30`}>
            
            <View style={styles.fundo}>
              <Image source={logo} style={styles.logo} />
              <Image source={perfil2} style={styles.profileImage2} />
              <Text style={styles.textDuozin}>Vs</Text>
              <Image source={perfil} style={styles.profileImage} />
                
              
            </View>       
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.textButton}>Duozin?</Text>
            </TouchableOpacity>    
          </View>

          
          
        
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
  profileImage: {
    width: 150,
    height: 175,
    borderRadius: 30,
    marginLeft: 175,
    marginTop: -105
  },
  profileImage2: {
    width: 150,
    height: 175,
    borderRadius: 30,
    marginLeft: - 25
  },
  textDuozin:{
    color: '#F2CF8D',
    fontSize:30,
    marginLeft: 130,
    marginTop: -110
  },
  fundo:{
    width: 300,
    height: 400,
    marginLeft: -90,
    borderRadius: 30,
    marginBottom: -20
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
    marginBottom: 105
  },
  textButton: {
    color: '#F2CF8D',
    textAlign: 'center',
    fontSize: 20
  },
  logo: {
    width: 175,
    height: 175,
    marginLeft: 65,
    marginBottom: -15,
    marginTop: -5
  },

})


export default DuozinScreen