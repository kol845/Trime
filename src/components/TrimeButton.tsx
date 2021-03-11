import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {

    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginTop: 16,
    marginHorizontal:"auto",

  },
  removeMargins:{
    marginTop: 6,
  },
  primary: {
    backgroundColor: "rgba(213, 130, 88, 0.7)",
  },
  secondary: {
    backgroundColor: "rgba(213, 130, 88, 0.5)",
  },
  textSignIn: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  }
});

export default function TrimeButton(props: {
  text: string;
  isSecondary: boolean;
  isSignup ?: boolean;
  onPress ?:Function;
}) {

  const { isSecondary, text } = props;
  const onPress = props.onPress ? props.onPress: ()=>{};
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, (isSecondary ? styles.secondary : styles.primary), (props.isSignup ? styles.removeMargins:null)]}>
      <Text style={styles.textSignIn}> {text}</Text>
    </TouchableOpacity>
  );
}

