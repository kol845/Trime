import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: "320px",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginTop: 16,
    left: "7.73%",
    right: "6.93%",
    top: "79.68%",
    bottom: "13.55%",
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
}) {

  const { isSecondary, text } = props;
  return (
    <TouchableOpacity onPress={() => { }} style={[styles.button, (isSecondary ? styles.secondary : styles.primary)]}>
      <Text style={styles.textSignIn}> {text}</Text>
    </TouchableOpacity>
  );
}

