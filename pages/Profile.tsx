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
        const token = await AsyncStorage.getItem('token');
        if (!token) {
          Alert.alert('Error', 'No authentication token found');
          return;
        }
        
        const response = await axios.get('http://192.168.93.128:5000/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        Alert.alert('Error', 'Failed to load profile data');
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
          Alert.alert('Error', 'No authentication token found');
          return;
        }

        const response = await fetch('http://192.168.93.128:5000/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
          Alert.alert("Logout successfully")
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.homeContainer}>
        <View style={styles.header}>
          <Text style={styles.profileTitle}>Profile</Text>
        </View>
        <View style={styles.profileInfo}>
          <Image source={require('../assets/icons/profile.png')} />
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.email}>{userData.ch_code}</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.detailsContainer}>
            {[
              { label: 'Username', value: userData.name },
              { label: 'Cheemba code', value: userData.ch_code },
              { label: 'Marital status', value: userData.marital_status },
              { label: 'Phone', value: userData.phone_number },
              { label: 'Email', value: userData.email },
              { label: 'Location', value: userData.location },
            ].map((item, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.logout} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#6FCF97',
  },
  homeContainer: {
    backgroundColor: '#134D64',
    width: 320,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 20,
    gap: 20,
    paddingTop: 10,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
  profileTitle: {
    color: '#fff',
    fontSize: 16,
  },
  profileInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 5,
    marginBottom: 16,
  },
  name: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  email: {
    color: '#8D918D',
  },
  profileContainer: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  detailsContainer: {
    backgroundColor: '#fff',
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
  label: {
    color: '#ACACAC',
  },
  value: {
    color: '#343434',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
  },
  buttonText: {
    color: '#4A4A4A',
  },
  logout: {
    display:'flex',
    position:'relative',
    top:10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#4C4C4C',
  },
  logoutText: {
    color: '#fff',
  },
});

export default Profile;