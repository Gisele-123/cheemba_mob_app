import React, { useState } from "react"
import { StyleSheet, View, ScrollView, Text, Image } from "react-native"
import TabBar from "@/components/TabBar"

export const Status=()=>{
    return (
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#6FCF97', flex: 1, }}>
            <ScrollView contentContainerStyle={styles.homeContainer}>
             <View>
                <View >
                    <Image source={require('../assets/images/logo.png')} style={{width: 24,height: 24}}/>
                    <View>
                        <Text>Chee-<Text>mba</Text></Text>
                        <Text>ch078934</Text>
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
})