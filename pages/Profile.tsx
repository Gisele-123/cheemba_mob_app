import React, { useState } from "react"
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from "react-native"
import TabBar from "@/components/TabBar"

export const Profile = () => {
    return (
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#6FCF97', flex: 1, }}>
            <ScrollView contentContainerStyle={styles.homeContainer}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '100%', gap: 90, marginTop: 10 }}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>Profile</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: 5, marginBottom: 16 }}>
                  <Image source={require('../assets/icons/profile.png')} />
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Mr Lee</Text>
                    <Text style={{ color: '#8D918D' }}>lee@gmail.com</Text>
                </View>
                <View style={styles.profileContainer}>
                    <View style={styles.detailsContainer}>
                        <View style={styles.row}>
                            <Text style={{ color: '#ACACAC' }}>First Name</Text>
                            <Text style={{ color: '#343434' }}>Lee87</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={{ color: '#ACACAC' }}>Last Name</Text>
                            <Text style={{ color: '#343434' }}>Lee</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={{ color: '#ACACAC' }}>Marital status</Text>
                            <Text style={{ color: '#343434' }}>Male</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={{ color: '#ACACAC' }}>Email</Text>
                            <Text style={{ color: '#343434' }}>lee@gmail.com</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={{ color: '#ACACAC' }}>Location</Text>
                            <Text style={{ color: '#343434' }}>Kigali, Rwanda</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{ color: '#4A4A4A' }}>Update Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={styles.logout}>
                            <Text style={{ color: '#fff' }}>Update Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View>
                <TabBar />
            </View>
        </View>
    )
}

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
})