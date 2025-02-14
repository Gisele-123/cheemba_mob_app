import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Alert } from 'react-native';
import { Button } from '@/components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';


interface ConfirmPhoneProps {
    phone: number;
}

export const Confirm: React.FC<ConfirmPhoneProps> = ({ phone }) => {
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const route = useRoute();

    const navigation = useNavigation<StackNavigationProp<any>>();
    const handleEnterInfo = async () => {
        if (!code) {
          Alert.alert('Error', 'Please enter the verification code');
          return;
        }
      
        // Validate phone number format
        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(String(phone))) {
          Alert.alert('Error', 'Invalid phone number format. It should start with 0 and be 10 digits long.');
          return;
        }
      
        // Validate verification code format
        const codeRegex = /^\d{6}$/;
        if (!codeRegex.test(code)) {
          Alert.alert('Error', 'Invalid verification code. It should be a 6-digit number.');
          return;
        }
      
        setLoading(true);
      
        try {
          const response = await axios.post('http://192.168.93.128:5000/confirm-verification', {
            phone_number: String(phone), 
            verification_code: code
          });
      
          if (response.data.success) {
            Alert.alert('Success', 'Phone number verified successfully!');
            navigation.navigate('EnterInfo', { phone: phone });
          } else {
            Alert.alert('Error', response.data.message || 'Invalid verification code');
          }
        } finally {
          setLoading(false);
        }
      };
    const handleLogin = () => {
        navigation.navigate('Signin');
    };
    return (
        <View style={styles.welcome}>
            <View style={styles.container}>
                <Text style={styles.chee}>Chee-<Text style={styles.mba}>mba</Text></Text>
                <Text style={styles.desc}>Mobile waste management app</Text>
            </View>
            <View style={styles.welcomeCont}>
                <View style={{ display: 'flex', gap: 20 }}>
                    <Text style={{ color: '#404040', fontWeight: '600', fontSize: 24, textAlign: 'left' }}>Confirmation Phone Number</Text>
                    <View style={{ display: 'flex' }}>
                        <Text style={{ color: '#404040', fontWeight: '400', fontSize: 12, textAlign: 'left' }}>We sent a code via SMS to {phone}</Text>
                        <Text style={{ color: '#404040', fontWeight: '400', fontSize: 12, textAlign: 'left' }}>Enter it below:</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder='6 Digit Confirmation Pin'
                        value={code}
                        onChangeText={setCode}
                        keyboardType="number-pad"
                    />
                </View>
                <Button
                    title={<Text>{loading ? 'Verifying...' : 'Continue'}</Text>}
                    onPress={handleEnterInfo}
                    disabled={loading}
                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                <View style={{ width: 80, height: 43, borderColor: '#FFFFFF', borderWidth: 2, borderRadius: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/twitter.png')} /></View>
                <View style={{ width: 80, height: 43, borderColor: '#FFFFFF', borderWidth: 2, borderRadius: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/google.png')} /></View>
                <View style={{ width: 80, height: 43, borderColor: '#FFFFFF', borderWidth: 2, borderRadius: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/ig.png')} /></View>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
                    Already have an account,{' '}<Text style={{ fontWeight: '600', cursor: 'pointer', textDecorationLine: 'underline' }} onPress={handleLogin}>Login</Text>
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
                    Forgot{' '}<Text style={{ fontWeight: '600', cursor: 'pointer', textDecorationLine: 'underline' }}>Password?</Text>
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
        backgroundColor: '#6FCF97'
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
        fontWeight: '200'
    },
    welcomeCont: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 20,
        width: 300,
        height: 400,
        gap: 120
    },
    input: {
        width: 250,
        backgroundColor: '#CFCFCF36',
        borderRadius: 50,
        display: 'flex',
        paddingHorizontal: 25,
    }
})
