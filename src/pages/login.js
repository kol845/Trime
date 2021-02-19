import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput } from 'react-native';

export default function Login() {
  return (
    <ScrollView>
        <View style={styles.container}>
                <Text>Email</Text>
            <TextInput/>
            <StatusBar style="auto" />
        </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    hero:{
        backgroundColor:"red",
    }
  });