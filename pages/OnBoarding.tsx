import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

export default function OnBoarding() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handlePress = () => {
    navigation.navigate('Welcome');
  };
  return (
    <View style={{display:'flex', flex:1, backgroundColor:'#6FCF97'}}>
    <ImageBackground
      source={require('../assets/images/splash-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <Image source={require('../assets/images/qr.png')} style={{ position: 'relative', top: 20, left: 19, width: 160, height: 160 }} />
      <View style={styles.content}>
        <Text style={styles.header}>Get Started</Text>
        <Text style={styles.text}>Scan the qr code on the head of cheemba
          to get real-time alerts on your
          mobile application.
          Fast & Secure</Text>
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Image source={require('@/assets/images/arrow.png')} />
      </TouchableOpacity>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    resizeMode: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 20,
    top: -40,
  },
  text: {
    fontSize: 12,
    color: '#3E3E4299',
    width: 300,
    textAlign: 'center',
    position: 'relative',
    left: 15,
  },

  content: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gap: 20,
    position:'relative',
    top: 90,
  },
  header: {
    fontSize: 40,
    color: '#333333',
    fontWeight: 'bold',
    position: 'relative',
    left: 20,
  },
  button: {
    backgroundColor: '#E9E9E9FF',
    height: 60,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    position:'relative',
    top: 130,
    left: 90,
    cursor:'pointer',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 30,
  }
});
