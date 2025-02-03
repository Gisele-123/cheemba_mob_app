import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity, Alert } from "react-native";
import TabBar from "@/components/TabBar";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    ch_code: '',
    marital_status: '',
    phone_number: '',
    location: ''
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://10.12.73.185:5000/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    try {
        const response = await fetch('http://10.12.73.185:5000/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
            },
        });

        if (response.ok) {
            await AsyncStorage.removeItem('token');

            navigation.navigate('Signin');
        } else {
            const data = await response.json();
            Alert.alert('Error', data.message || 'Logout failed');
        }
    } catch (error) {
        console.error('Logout error:', error);
        Alert.alert('Error', 'Something went wrong. Please try again.');
    }
};

  return (
    <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#6FCF97', flex: 1 }}>
      <ScrollView contentContainerStyle={styles.homeContainer}>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '100%', gap: 90, marginTop: 10 }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Profile</Text>
        </View>
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: 5, marginBottom: 16 }}>
          <Image source={require('../assets/icons/profile.png')} />
          <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>{userData.name}</Text>
          <Text style={{ color: '#8D918D' }}>{userData.email}</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.detailsContainer}>
            <View style={styles.row}>
              <Text style={{ color: '#ACACAC' }}>Username</Text>
              <Text style={{ color: '#343434' }}>{userData.name}</Text>
            </View>
            <View style={styles.row}>
              <Text style={{ color: '#ACACAC' }}>Cheemba code</Text>
              <Text style={{ color: '#343434' }}>{userData.ch_code}</Text>
            </View>
            <View style={styles.row}>
              <Text style={{ color: '#ACACAC' }}>Marital status</Text>
              <Text style={{ color: '#343434' }}>{userData.marital_status}</Text>
            </View>
            <View style={styles.row}>
              <Text style={{ color: '#ACACAC' }}>Phone</Text>
              <Text style={{ color: '#343434' }}>{userData.phone_number}</Text>
            </View>
            <View style={styles.row}>
              <Text style={{ color: '#ACACAC' }}>Email</Text>
              <Text style={{ color: '#343434' }}>{userData.email}</Text>
            </View>
            <View style={styles.row}>
              <Text style={{ color: '#ACACAC' }}>Location</Text>
              <Text style={{ color: '#343434' }}>{userData.location}</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={{ color: '#4A4A4A' }}>Update Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity style={styles.logout} onPress={handleLogout}>
              <Text style={{ color: '#fff' }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View>
        <TabBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#134D64',
    width: 320,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 20,
    gap: 20,
    paddingTop: 10,
  },
  profileContainer: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    color: '#fff'
  },
  detailsContainer: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    gap: 20,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    cursor: 'pointer',
  },
  logout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#4C4C4C',
    cursor: 'pointer',
  },
});