import React, { useState } from "react"
import { StyleSheet, View, ScrollView, Text, Image } from "react-native"
import TabBar from "@/components/TabBar"
import { Button } from "@/components/Button"
import { PowerUsageChart } from "@/components/charts/PowerUsageChart"

export const Statistics = () => {
    return (
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#6FCF97', flex: 1, }}>
            <ScrollView contentContainerStyle={styles.homeContainer}>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'semibold' }}>Conserve Energy</Text>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, paddingVertical: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 40 }}>
                        <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'light' }}>Today</Text>
                        <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'light' }}>This Month</Text>
                        <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'light' }}>C02 Saved</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'semibold' }}>238 kWh</Text>
                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'semibold' }}>1344.68 kWh</Text>
                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'semibold' }}>4230.54 kg</Text>
                    </View>
                </View>
                <PowerUsageChart />
                <View style={{ width: 290, gap: 10, padding: 20, borderRadius: 10, backgroundColor: '#FFFFFF1A', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ width: 160, textAlign: 'left', color: '#fff', fontSize: 12, fontWeight: 'medium' }}>Cheemba is consuming 24 kWh. Switch it off to save energy</Text>
                    <Button title="Turn Off" textStyle={{ color: '#fff', fontSize: 16, fontWeight: 'semibold', textAlign: 'center' }} buttonStyle={{ backgroundColor: '#EA5A42', padding: 10, borderRadius: 5, width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                </View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'#ffffff', width: 280, borderRadius: 10, gap: 10, padding: 10, paddingHorizontal: 20}}>
                    <Text style={{ color: '#304D59', fontSize: 18, fontWeight: 'bold', textAlign: 'left', width: 270,}}>My device</Text>
                    <View style={{width: 250, display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', gap: 20, borderWidth: 1, borderColor:'#E9E8E8', padding: 10, borderRadius: 10}}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 50, backgroundColor: '#F8E7E4', width: 50, height: 50 }}>
                            <Image source={require('../assets/status/device.png')} />
                        </View>
                        <View style={{display:'flex', justifyContent:'center', alignItems:'flex-start'}}>
                            <Text style={{color:'#304D59', fontSize: 16, fontWeight:'bold'}}>Cheemba</Text>
                            <Text style={{color:'#304D59', fontSize: 12, fontWeight:'medium'}}>Consuming 10 kWh</Text>
                        </View>
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
        backgroundColor: '#395C6A',
        width: 320,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#F5F5F55C',
        padding: 10,
        paddingBottom: 80,
        gap: 30,
    },
})