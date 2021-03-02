// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, Alert, ImageBackground } from 'react-native';
import Hero from './../components/Hero.tsx';
// import heroImg from "./../images/hero-image.png"

import FacebookIcon from "../images/svg/icon/FacebookIcon";
import GoogleIcon from "../images/svg/icon/GoogleIcon";

export default function Login() {
  return (
    <ScrollView>
      <Hero height="300" />
      <View>

        <Text>Email</Text>
        
        <TextInput placeholder="Enter email"/>
        <Text>Password</Text>
        <TextInput secureTextEntry={true} placeholder="Enter password"/>
        <Text>Forgot password?</Text>
        <View>
          <Button 
          title="Sign in"
          onPress={() => Alert.alert('Sign in pressed!')}/>
          <Button
            title="Sign up"
            onPress={() => console.log('Sign up pressed!')}/>
          
        </View>
        <View>
          <Text>Or</Text>
          <View/>
          <View/>
        </View>
        <FacebookIcon/>
        <GoogleIcon/>
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