import { StyleSheet, Modal, useState, View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import React from 'react';



const ConfigurationScreen = () => {
  const [visible, setVisible] = useState(false);
  const scale = useRef(new Animated.View(0)).current;
  const options = [
    {
      title: 'Publicar',
      icon: 'favicon.png',
      action: () => alert('publicar'),
    },
    {
      title: 'Story',
      icon: 'favicon.png',
      action: () => alert('Story'),
    },
    {
      title: 'Video do reels',
      icon: 'favicon.png',
      action: () => alert('Video do reels'),
    },
    {
      title: 'Transmissaõa ao vivo',
      icon: 'favicon.png',
      action: () => alert('Transmissão'),
    },
  ];
  function resizeBox(to) {
    to === 1 && setVisible(true);
    Animated.timing(scale, {
      toValue: to,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.linear,
    }).start(() => to === 0 && setVisible(false));
  }
  return (
    <View >
      <TouchableOpacity onPress={() => realizeBox(1)}>
        <Icon name="favicon" size={26} color={'#2121211'} />
      </TouchableOpacity>
      <Modal transparent visible={visible}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }} onTouchStart={() => resizeBox(0)}>
          <Animeted.View
            style={[
              styles.popup,
              {opacity: scale.interpolate({inputRange:[0,1], outputRange:[0,1]})},
              {
                transform: [{ scale }]
              },
            ]}
          >
            {options.map((op, i) => (
              <TouchableOpacity style={styles.option} key={i} onPress={() => op.action}>
                <Text>{op.title}</Text>
                <Icon name={op.icon} size={26} color={'#212121'} />
              </TouchableOpacity>
            ))},
          </Animeted.View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  popup: {
    borderRadius: 8,
    borderColor: '#333',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddinHorizontal: 10,
    position: 'absolute',
    top: 78,
    right: 0,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
    borderBottomColor: '#ccc',
  },
});

export default ConfigurationScreen;