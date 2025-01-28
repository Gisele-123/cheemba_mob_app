import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Welcome: { scannedText?: string }; 
};

export default function Qrcode() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [hasScanned, setHasScanned] = useState(false); 

  const handleBarcodeScanned = ({ type, data }: { type: string; data: string }) => {
    if (hasScanned) return;

    setHasScanned(true);
    const scannedText = data;
    navigation.navigate('Welcome', { scannedText });
    Alert.alert("Keep ch_code safe. You will need it upon registration")
  };

  useEffect(() => {
    if (!permission) {
      return;
    }
  }, [permission]);

  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to access the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={handleBarcodeScanned}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Scan QR Code</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});
