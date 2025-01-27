import React, { useState } from "react"
import { StyleSheet, View, ScrollView, Text, Image } from "react-native"
import TabBar from "@/components/TabBar"

export const Status = () => {
    return (
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#6FCF97', flex: 1, }}>
            <ScrollView contentContainerStyle={styles.homeContainer}>
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
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Image source={require('../assets/status/cheemba.png')}/>
                    <Image source={require('../assets/status/meter.png')} style={{position:'relative', right: 70, top: 40}}/>
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
        width: 320,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        gap: 20,
        paddingBottom: 80,
    },
})