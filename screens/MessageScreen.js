import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import tw from "twrnc";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/core";
import getMatchedUserInfo from "../lib/getMatchedUserInfo";



const MessageScreen = ({ title, callEnabled }) => {
    const navigation = useNavigation();
    const [ input, setInput ] = useState("");
    const sendMessage = () => {};
    const Button = () => {};
    

    return (
        <SafeAreaView>
            <View style={tw`p-2 flex-row items-center justify-between`}>
                <View style={tw`flex flex-row items-center`}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={tw`p-2`}>
                        <Ionicons name="chevron-back-outline" size={34} color="#FF5864" />
                    </TouchableOpacity>
                    <Text style={tw`text-2xl front-bold pl-2`}>{title}Guilherme</Text>
                </View>

                {callEnabled && (
                    <TouchableOpacity style={tw`rounded-full mr-4 p-3 bg-red-200`}>
                        <Foundation style={tw``} name="telephone" size={20} color="red" />
                    </TouchableOpacity>
                )}          
                <View
                style={tw`flex-row justify-between items-center border-t border-gray-200 px-5 py-2`}>
                    <TextInput 
                        style={tw`h-10 text-lg`}
                        placeholder="send Message.."
                        onChangeText={setInput}
                        onSubmitEditing={sendMessage}
                        value={input}
                    
                    />
                    <Button onPress={sendMessage} title="send" color="#FF5864"/>
                </View>
            </View>
        </SafeAreaView>
 
    );
};

export default MessageScreen;