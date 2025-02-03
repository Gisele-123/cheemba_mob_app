import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import { Button } from '@/components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios

interface confirmPhone {
    phone: number;
}

export const EnterInfo: React.FC<confirmPhone> = ({ phone }) => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [chCode, setChCode] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [phone_number, setPhoneNumner] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://10.12.73.185:5000/signup', {
                name,
                email,
                location,
                password,
                ch_code: chCode,
                marital_status: maritalStatus,
                phone_number: phone_number,                
            });

            if (response.status === 200 || response.status ===201) {
                Alert.alert('Success', response.data.message);
                navigation.navigate('Signin');
            } else {
                Alert.alert('Error', response.data.message);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };

    const handleSignin = () => {
        navigation.navigate('Signin');
    };

    return (
        <View style={styles.welcome}>
            <View style={styles.container}>
                <Text style={styles.chee}>
                    Chee-<Text style={styles.mba}>mba</Text>
                </Text>
                <Text style={styles.desc}>Mobile waste management app</Text>
            </View>
            <View style={styles.welcomeCont}>
                <View style={{ display: 'flex', gap: 10 }}>
                    <Text style={{ color: '#404040', fontWeight: '600', fontSize: 24, textAlign: 'left' }}>
                        Enter information
                    </Text>
                    <View style={{ display: 'flex' }}>
                        <Text style={{ color: '#404040', fontWeight: '400', fontSize: 12, textAlign: 'left', width: 200 }}>
                            Create an account to this app to get all features
                        </Text>
                    </View>
                    <TextInput style={styles.input} placeholder="Names" onChangeText={setName} />
                    <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
                    <TextInput style={styles.input} placeholder="Location" onChangeText={setLocation} />
                    <TextInput style={styles.input} placeholder="Marital status" onChangeText={setMaritalStatus} />
                    <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} secureTextEntry />
                    <TextInput style={styles.input} placeholder="Ch_Code" onChangeText={setChCode} />
                    <TextInput style={styles.input} placeholder="Phone number" onChangeText={setPhoneNumner} />
                </View>
                <Button title="Sign up" onPress={handleSignup} />
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
                    Already have an account,{' '}
                    <Text style={{ fontWeight: '600', textDecorationLine: 'underline' }} onPress={handleSignin}>
                        Login
                    </Text>{' '}
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
                    Forgot{' '}
                    <Text style={{ fontWeight: '600', textDecorationLine: 'underline' }}>Password?</Text>{' '}
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
        paddingTop: 2,
        alignItems: 'center',
        padding: 10,
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
    welcomeCont: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        padding: 20,
        position: 'relative',
        // top: -5,
        borderRadius: 20,
        width: 300,
        height: 520,
        gap: 20,
    },
    input: {
        width: 250,
        backgroundColor: '#CFCFCF36',
        borderRadius: 50,
        display: 'flex',
        paddingHorizontal: 25,
    },
});
