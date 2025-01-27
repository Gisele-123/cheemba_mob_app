import React, { useEffect } from 'react';
import SplashScreen from '@/pages/SplashScreen';
import { StyleSheet } from 'react-native';
import OnBoarding from '@/pages/OnBoarding';
import Qrcode from '@/pages/qrcode';
import { Welcome } from '@/pages/Welcome';
import { Confirm } from '@/pages/Confirm';
import { EnterInfo } from '@/pages/EnterInfo';
import { Signin } from '@/pages/Signin';
import { Home } from '@/pages/Home';
import { Profile } from '@/pages/Profile';
import { Status } from '@/pages/Status';
import { Statistics } from '@/pages/Statistics';
import { ScrollView } from 'react-native';
import { Notifications } from '@/pages/Notifications';
import { createStackNavigator, StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

// Define types for navigation stack parameters
type AppStackParamList = {
  Splash: undefined;
  OnBoarding: undefined;
  Welcome: undefined;
  Qrcode: undefined;
  Confirm: { phone: number };
  EnterInfo: { phone: number }; 
  Signin: undefined;
  Home: undefined;
  Statistics: undefined;
  Status: undefined;
  Profile: undefined;
  Noti: undefined;
};

type AppProps = StackScreenProps<AppStackParamList, 'Confirm'>; // Define app props type for Confirm screen

const Stack = createStackNavigator<AppStackParamList>();

export default function App({ phone }: { phone: number }) { // Explicitly type phone prop
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreenWrapper}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Qrcode"
          component={Qrcode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirm"
          component={ConfirmWrapper}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnterInfo"
          component={(props: StackScreenProps<AppStackParamList, 'EnterInfo'>) => <EnterInfo {...props} phone={phone} />}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={(props: StackScreenProps<AppStackParamList, 'Signin'>) => <Signin phone={phone} {...props} />}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Statistics"
          component={Statistics}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Status"
          component={Status}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Noti"
          component={Notifications}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ScrollView>
  );
}

type SplashScreenProps = {
  navigation: StackNavigationProp<AppStackParamList, 'Splash'>;
};

const SplashScreenWrapper: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return <SplashScreen />;
};

const ConfirmWrapper = ({ route, navigation }: StackScreenProps<AppStackParamList, 'Confirm'>) => {
  const { phone } = route.params;
  return <Confirm phone={phone}  />; 
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: '#6FCF97',
  },
});
