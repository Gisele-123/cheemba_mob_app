import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleProp,
} from "react-native";

interface ButtonProps {
  title: string | React.ReactNode;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  disabled
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]} 
      onPress={onPress}
    >
      {typeof title === 'string' ? <Text style={[styles.title, textStyle]}>{title}</Text> : title}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    padding: 10,
    borderRadius: 40,
    backgroundColor: "#4D4D4D",
    cursor: "pointer",
  },
});
