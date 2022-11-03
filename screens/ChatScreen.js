import { StyleSheet, View, Text, Button, TextInput, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from "react";
import  Header  from "../components/Header";
import backgound from '../img/FundoPrincipal.png'
import profile from '../img/ProfilePicture.png'
import logo from '../img/LogoRoxo.png'
import tw from "twrnc";
import { useNavigation } from '@react-navigation/native'



const ChatScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header title="Chat" />
              <ImageBackground source={backgound} style={tw`flex-1 justify-start text-center`}>
                    
                  <View style={tw`px-5`}>
                    <View > 
                        <TouchableOpacity onPress={() => navigation.navigate('Mensagem')} style={tw`rounded-full h-16 w-150`} style={styles.cardShadow}>
                          <Image  style={tw`rounded-full h-16 w-16 mr-3 m-1`}
                          source={profile}/>
                        </TouchableOpacity>
                        <Text style={styles.text}>Stitch - 626</Text>
                    </View>
                  
                  </View>   
              </ImageBackground>
    </SafeAreaView>
  );
};

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
  },
  cardShadow: {
    backgroundColor: 'white',
    opacity: 0.9,
    width: 2500,
    marginLeft: -20,   
  },
  text: {
    textAlign: 'center',
    top: -55,
    left: -50,
    fontSize: 22,
  }
})

export default ChatScreen;