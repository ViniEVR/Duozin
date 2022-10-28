import React from "react";
import { View, TouchableOpacity, Modal, SafeAreaView, StyleSheet } from 'react-native'

const popupMenu = () => {
    const [visible, setVisible] = useState(false);
    return (
        <View >
            <TouchableOpacity>
                <Icon name="favicon" size={26} color={'#2121211'} />
            </TouchableOpacity>
            <Modal transparent visible={visible}>
                <SafeAreaView 
                    style={{flex:1, backgroundColor: 'red'}} 
                    onTouchStart={() => setVisible(false)}>
                </SafeAreaView>
            </Modal>
        </View>
    )
}