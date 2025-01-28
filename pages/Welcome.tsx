import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { Button } from '@/components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

type RouteProp = {
  params?: { scannedText?: string };
  name: string;
  key: string;
};

export const Welcome = () => {
  const route = useRoute<RouteProp>();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [phone, setPhone] = useState('');
  const [scannedText, setScannedText] = useState('000000'); // Default value

  useEffect(() => {
    if (route.params?.scannedText) {
      setScannedText(route.params.scannedText);
      console.log('Scanned Text received:', route.params.scannedText);
    } else {
      console.log('No scanned text provided. Using default.');
    }
  }, [route.params]);

  const handleConfirm = () => {
    console.log('Phone entered:', phone);
    if (phone) {
      navigation.navigate('Confirm', { phone: Number(phone) });
      Alert.alert("Keep ch_code safe. You will need it upon registration")
      console.log('Navigating to Confirm screen...');
    } else {
      Alert.alert("Please enter your phone number");
    }
  };

  const handleLogin = () => {
    navigation.navigate('Signin');
    console.log('Navigating to Signin screen...');
  };

  return (
    <View style={styles.welcome}>
      <View style={styles.container}>
        <Text style={styles.chee}>
          Chee-<Text style={styles.mba}>mba</Text>
        </Text>
        <Text style={styles.desc}>Mobile waste management app</Text>
      </View>
      <View style={styles.cheemba}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.code}>{scannedText}</Text>
      </View>
      <View style={styles.welcomeCont}>
        <View style={{ display: 'flex', gap: 10 }}>
          <Text style={{ color: '#404040', fontWeight: '600', fontSize: 24 }}>Welcome👋</Text>
          <Text style={{ color: '#404040', fontWeight: '400', fontSize: 12 }}>
            Hello there, enter phone number to continue!
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>
        <Button title="Continue" onPress={handleConfirm} />
      </View>
      <View style={styles.socialIcons}>
        <View style={styles.icon}>
          <Image source={require('../assets/icons/twitter.png')} />
        </View>
        <View style={styles.icon}>
          <Image source={require('../assets/icons/google.png')} />
        </View>
        <View style={styles.icon}>
          <Image source={require('../assets/icons/ig.png')} />
        </View>
      </View>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
          Already have an account,{' '}
          <Text onPress={handleLogin} style={{ fontWeight: '600', textDecorationLine: 'underline' }}>
            Login
          </Text>
        </Text>
        <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
          Forgot{' '}
          <Text style={{ fontWeight: '600', textDecorationLine: 'underline' }}>Password?</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#6FCF97',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chee: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mba: {
    color: '#0085CD',
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '200',
  },
  logo: {
    width: 40,
    height: 40,
  },
  cheemba: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  code: {
    fontWeight: '700',
    fontSize: 40,
    color: '#ffffff',
  },
  welcomeCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    width: 300,
    height: 270,
    gap: 40,
  },
  input: {
    width: 250,
    backgroundColor: '#CFCFCF36',
    borderRadius: 50,
    display: 'flex',
    paddingHorizontal: 25,
  },
  socialIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  icon: {
    width: 80,
    height: 43,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
