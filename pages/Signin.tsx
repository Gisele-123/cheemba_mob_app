import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TextInput, Alert } from 'react-native'
import { Button } from '@/components/Button'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


interface confirmPhone {
    phone: number;
}

export const Signin: React.FC<confirmPhone> = ({ phone }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [chCode, setChCode] = useState('');

    const navigation = useNavigation<StackNavigationProp<any>>();
       const handleLogin = async () => {
        try {
            const response = await fetch('http://10.12.73.185:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, ch_code: chCode }),
            });
            const data = await response.json();

            if (response.ok) {
                const username = data.username;
                Alert.alert('Success', data.message);
                navigation.navigate('Home', { username });
            } else {
                Alert.alert('Error', data.message);
            }
        } catch (error) {
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };
    const handleSignup = () => {
        navigation.navigate('EnterInfo');
    };
    return (
        <View style={styles.welcome}>
            <View style={styles.container}>
                <Text style={styles.chee}>Chee-<Text style={styles.mba}>mba</Text> </Text>
                <Text style={styles.desc}>Mobile waste management app</Text>
            </View>
            <View style={styles.welcomeCont}>
                <View style={{ display: 'flex', gap: 10 }}>
                    <Text style={{ color: '#404040', fontWeight: 600, fontSize: 24, textAlign: 'left' }}>Sign in </Text>
                    <View style={{ display: 'flex' }}>
                        <Text style={{ color: '#404040', fontWeight: 400, fontSize: 12, textAlign: 'left', width: 150 }}>Log in to this apps to get all features</Text>
                    </View>
                    <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail}/>
                    <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword} secureTextEntry />
                    <TextInput style={styles.input} placeholder='cheemba code' onChangeText={setChCode}/>
                </View>
                <Button title='Login' onPress={handleLogin} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                <View style={{ width: 80, height: 43, borderColor: '#FFFFFF', borderWidth: 2, borderRadius: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/twitter.png')} /></View>
                <View style={{ width: 80, height: 43, borderColor: '#FFFFFF', borderWidth: 2, borderRadius: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/google.png')} /></View>
                <View style={{ width: 80, height: 43, borderColor: '#FFFFFF', borderWidth: 2, borderRadius: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/ig.png')} /></View>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Don't have an account, <Text style={{ fontWeight: 600, cursor: 'pointer', textDecorationLine: 'underline' }} onPress={handleSignup}>Sign up</Text> </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Forgot <Text style={{ fontWeight: 600, cursor: 'pointer', textDecorationLine: 'underline' }}>Password?</Text> </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
         backgroundColor:'#6FCF97'
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
        gap: 30,
    },
    input: {
        width: 250,
        backgroundColor: '#CFCFCF36',
        borderRadius: 50,
        display: 'flex',
        paddingHorizontal: 25,
    }
})