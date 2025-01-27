import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { RNCamera } from "react-native-camera";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export default function QrCode() {
  const [isScanned, setIsScanned] = useState(false);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleBarCodeRead = ({ data }: { data: string }) => {
    if (!isScanned) {
      setIsScanned(true); 
      Alert.alert("QR Code Scanned", `Data: ${data}`, [
        {
          text: "OK",
          onPress: () => navigation.navigate("Welcome", { scannedText: data }),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        onBarCodeRead={handleBarCodeRead}
        captureAudio={false}
        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Align QR code within the frame to scan</Text>
        </View>
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
