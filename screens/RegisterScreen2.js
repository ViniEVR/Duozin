import { StyleSheet, View, Text, route, props, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc";
import backgound from '../img/FundoHome.png'
import logo from '../img/LogoBege.png'
import arrow from '../img/arrow.png'
import { useNavigation } from '@react-navigation/native'

const onChanged = (text) => {
    let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
        else {
            alert("Digite um número inteiro");
        }
    }
    this.setState({ Idade: newText });
}


const RegisterScreen2 = (props) => {
    const navigation = useNavigation();

    let name = ""
    let idade = ""
    let password = ""


  return (
    <View style={tw`flex-1 justify-center`}>
      <ImageBackground source={backgound} resizeMode="cover" style={tw`flex-1 justify-end text-center`}>
      <Text style={styles.textCadastro}>Cadastro</Text>
        <Image  style={styles.logo}  source={logo}/>  
        
        <Text style={styles.textHello}>Digite só mais alguns dados</Text>
        <View style={tw`px-10`}>
            <TextInput placeholder='Nickname' placeholderTextColor='#F2CF8D' style={styles.input} value={name}
          onChangeText={text => name(text)}/>

            <TextInput placeholder='Idade' keyboardType='numeric' maxLength={3} placeholderTextColor='#F2CF8D' onChangeText={text => idade = text} style={styles.input}/>

            <TextInput placeholder='Senha' placeholderTextColor='#F2CF8D' style={styles.input2} secureTextEntry  />
        </View>
      </ImageBackground>
          <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
              <Image style={styles.arrowStyle} source={arrow} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}> 
              <Image style={styles.arrowStyle2} source={arrow}  />
          </TouchableOpacity>
    </View>
  )
}

export default RegisterScreen2
const styles = StyleSheet.create({
    arrowStyle: {
      width: 50,
      height: 50,
      marginTop: -55,
      marginBottom: -35,
      marginLeft: 310,
    },
    arrowStyle2: {
      width: 50,
      height: 50,
      marginTop: -15,
      marginTop: -55,
      marginLeft: 0,
      scaleX: -1
    },
    textHello:{
        marginBottom: 10,
        textAlign: "center",
        color: '#F2CF8D',
        fontSize: 20
    },
    textCadastro:{
        marginBottom: -30,
        textAlign: "center",
        color: '#F2CF8D',
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
      marginBottom: 10,
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
  