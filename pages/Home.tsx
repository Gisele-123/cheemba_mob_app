import React, { useState } from "react"
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity, Animated } from "react-native"
import WhatToDoCard from "@/components/whatToDoCard"
import TabBar from "@/components/TabBar"
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/native';

type HomeRouteParams = {
    username: string;
  };

export const Home = () => {

    const navigation = useNavigation<StackNavigationProp<any>>();
    const route=useRoute()
    const { username } = route.params as HomeRouteParams; 
        const handleHome = () => {
            navigation.navigate('Home');
        };
        const handleProfile =()=>{
            navigation.navigate('Profile');
        };
        const handleStatistics=()=>{
            navigation.navigate('Statistics')
        }
        const handleStatus=()=>{
            navigation.navigate('Status')
        }
        const handleNotifications=()=>{
            navigation.navigate('Noti')
        }
        const handleLogout=()=>{
            navigation.navigate('Signin')
        }
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    return (
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#6FCF97', flex: 1, }}>
            {isSidebarVisible && (
                <Animated.View style={styles.sidebar}>
                    <TouchableOpacity onPress={() => setIsSidebarVisible(!isSidebarVisible)} style={{ width: 35, height: 35, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Text style={{color:'#ffffff', fontSize: 20, fontWeight:'bold', textAlign:'right', width:300}}>X</Text> </TouchableOpacity>
                    <TouchableOpacity onPress={handleHome} style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', padding: 5, gap:10, backgroundColor:'#334F66FF', borderRadius: 10, cursor:'pointer'}}><Image source={require('../assets/home/home.png')}/><Text style={styles.sidebarText}>Home</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handleStatistics} style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', padding: 5, gap:10, backgroundColor:'#334F66FF', borderRadius: 10, cursor:'pointer'}}><Image source={require('../assets/home/statistic.png')}/><Text style={styles.sidebarText}>Statistics</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handleStatus} style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', padding: 5, gap:10, backgroundColor:'#334F66FF', borderRadius: 10, cursor:'pointer'}}><Image source={require('../assets/home/level.png')}/><Text style={styles.sidebarText}>Status</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handleNotifications} style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', padding: 5, gap:10, backgroundColor:'#334F66FF', borderRadius: 10, cursor:'pointer'}}><Image source={require('../assets/home/status.png')}/><Text style={styles.sidebarText}>Notifications</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handleProfile} style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', padding: 5, gap:10, backgroundColor:'#334F66FF', borderRadius: 10, cursor:'pointer'}}><Image source={require('../assets/home/settings.png')}/><Text style={styles.sidebarText}>Settings</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handleProfile} style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', padding: 5, gap:10, backgroundColor:'#334F66FF', borderRadius: 10, cursor:'pointer'}}><Image source={require('../assets/home/profile.png')}/><Text style={styles.sidebarText}>Profile</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handleLogout} style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', padding: 5, gap:10, backgroundColor:'#334F66FF', borderRadius: 10, cursor:'pointer'}}><Image source={require('../assets/home/logout.png')}/><Text style={styles.sidebarText}>Logout</Text></TouchableOpacity>
                </Animated.View>
            )}
            <ScrollView contentContainerStyle={styles.homeContainer}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 275 }}>
                    <TouchableOpacity onPress={() => setIsSidebarVisible(!isSidebarVisible)} style={{ width: 35, height: 35, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/menu.png')} /></TouchableOpacity>
                    <View style={{ width: 35, height: 35, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}><TouchableOpacity onPress={handleProfile}><Image source={require('../assets/icons/profile.png')} /></TouchableOpacity></View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 275 }}>
                    <Text style={{ color: '#233B45', fontWeight: 700, fontSize: 14 }}>Hey {username}👋</Text>
                    <View style={{ width: 20, height: 20, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}> <TouchableOpacity onPress={handleStatus}><Image source={require('../assets/icons/attention.png')} /></TouchableOpacity> </View>
                </View>
                <Text style={{ color: '#233B45', fontSize: 12, textAlign: 'left' }}>Let’s see your contribution to the society</Text>
                <View style={styles.stati}>
                    <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: 275, padding: 10 }}>
                        <Text style={{ color: '#FFFFFF', width: 100, textAlign: 'left' }}>Good Going, Jacob</Text>
                        <Image source={require('../assets/images/4.png')} style={{ width: 28, height: 42 }} />
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: 275, padding: 10, gap: 8, }}>
                        <View>
                            <Image source={require('../assets/images/graph.png')} />
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}><View style={{ width: 8, height: 8, backgroundColor: '#DC7561', borderRadius: 50 }}></View><Text style={{ color: '#ffffff' }}>Plastics</Text></View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}><View style={{ width: 8, height: 8, backgroundColor: '#89C280', borderRadius: 50 }}></View><Text style={{ color: '#ffffff' }}>Metals</Text></View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}><View style={{ width: 8, height: 8, backgroundColor: '#FFDA75', borderRadius: 50 }}></View><Text style={{ color: '#ffffff' }}>Biodegradable</Text></View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}><View style={{ width: 8, height: 8, backgroundColor: '#6983C7', borderRadius: 50 }}></View><Text style={{ color: '#ffffff' }}>Papers</Text></View>
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 10, }}>
                            <Text style={{ color: '#ffffff' }}>41%</Text>
                            <Text style={{ color: '#ffffff' }}>39%</Text>
                            <Text style={{ color: '#ffffff' }}>12%</Text>
                            <Text style={{ color: '#ffffff' }}>8%</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ color: '#233B45', fontSize: 14, fontWeight: "semibold", textAlign: 'left' }}>Things You Can Do</Text>
                <View style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, paddingHorizontal: 10 }}>
                        <WhatToDoCard iconImage={require('../assets/icons/shop.png')} text1="Shop Wisely" text2="Checklists" />
                        <WhatToDoCard iconImage={require('../assets/icons/energy.png')} text1="Conserve Energy" text2="Devices" containerBackgroundColor="#FEF8E8" iconContainerBackgroundColor="#FFF2C9" />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, paddingHorizontal: 10 }}>
                        <WhatToDoCard iconImage={require('../assets/icons/shop.png')} text1="Shop Wisely" text2="Checklists" />
                        <WhatToDoCard iconImage={require('../assets/icons/energy.png')} text1="Conserve Energy" text2="Devices" containerBackgroundColor="#FEF8E8" iconContainerBackgroundColor="#FFF2C9" />
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
    sidebar: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 200,
        backgroundColor: "#233B45",
        padding: 20,
        zIndex: 1,
        gap: 10
    },
    sidebarText: {
        color: "#fff",
        fontSize: 16,
        marginVertical: 10,
    },
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
    stati: {
        width: 294,
        height: 230,
        backgroundColor: '#115976F7',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
    }
})