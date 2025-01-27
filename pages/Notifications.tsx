import React, { useState } from "react"
import { StyleSheet, View, ScrollView, Text, Image } from "react-native"
import TabBar from "@/components/TabBar"

export const Notifications = () => {
    return (
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#6FCF97', flex: 1, gap: 10, }}>
            <View style={{ width: 300, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                    <Image source={require('../assets/images/logo.png')} style={{ width: 30, height: 30 }} />
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Chee-<Text style={{ color: '#0085CD' }}>mba</Text></Text>
                        <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: 'medium' }}>ch078934</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                    <Image source={require('../assets/status/level.png')} />
                    <Image source={require('../assets/status/wifi.png')} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 2 }}><Text style={{ color: '#D4FFDB', fontSize: 13 }}>59%</Text><Image source={require('../assets/status/battery.png')} /></View>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.homeContainer}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 270 }}><Text style={{ color: '#1F384C', fontSize: 20, fontWeight: 'bold' }}>Notifications</Text><Text style={{ color: '#1F384C', fontSize: 13, fontWeight: 'medium' }}>View all</Text></View>
                <View style={styles.notificationContainer}>
                    <View style={styles.notification}>
                        <Image source={require('../assets/images/logo.png')} style={{ width: 30, height: 30 }} />
                        <View style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}><Text style={styles.notificationText}>🟡ch_005786 is half full</Text><Text style={styles.notificationDate}>04 April, 2021 | 04:00 PM</Text></View>
                    </View>
                    <View style={styles.notification}>
                        <Image source={require('../assets/images/logo.png')} style={{ width: 30, height: 30 }} />
                        <View style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}><Text style={styles.notificationText}>🔴ch_005786 is almost full</Text><Text style={styles.notificationDate}>04 April, 2021 | 04:00 PM</Text></View>
                    </View>
                    <View style={styles.notification}>
                        <Image source={require('../assets/images/logo.png')} style={{ width: 30, height: 30 }} />
                        <View style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}><Text style={styles.notificationText}>🟢ch_005786 is empty</Text><Text style={styles.notificationDate}>04 April, 2021 | 04:00 PM</Text></View>
                    </View>
                    <View style={styles.notification}>
                        <Image source={require('../assets/images/logo.png')} style={{ width: 30, height: 30 }} />
                        <View style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}><Text style={styles.notificationText}>🚚Alert time to move</Text><Text style={styles.notificationDate}>04 April, 2021 | 04:00 PM</Text></View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 0 }}>
                <TabBar />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: '#ffffff',
        width: 320,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#F5F5F55C',
        padding: 10,
        gap: 20,
        paddingBottom: 80,
    },
    notificationContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // gap: 10,
    },
    notification: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        padding: 10,
    },
    notificationText: {
        color: '#23262F',
        fontSize: 16,
        fontWeight: 'semibold',
    },
    notificationDate: {
        color: '#708099',
        fontSize: 10,
        fontWeight: 'medium',
    }
})