import React, { useEffect } from 'react';
import { createStackNavigator, StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import SplashScreen from '@/pages/SplashScreen';
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
import { Notifications } from '@/pages/Notifications';

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

const Stack = createStackNavigator<AppStackParamList>();

export default function App({ phone }: { phone: number }) {
  return (
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
        options={{ headerShown: false }}
      >
        {props => <EnterInfo {...props} phone={phone} />}
      </Stack.Screen>
      <Stack.Screen
        name="Signin"
        options={{ headerShown: false }}
      >
        {props => <Signin {...props} phone={phone} />}
      </Stack.Screen>
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

const ConfirmWrapper: React.FC<StackScreenProps<AppStackParamList, 'Confirm'>> = ({
  route,
  navigation,
}) => {
  const { phone } = route.params ?? { phone: null };

  if (!phone) {
    navigation.replace('Welcome');
    return null;
  }

  return <Confirm phone={phone} />;
};
