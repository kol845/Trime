// import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View,ScrollView, TextInput, Button, Alert, ImageBackground, StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

import Hero from './../components/Hero';

// import heroImg from "./../images/hero-image.png"

import Footer from './../components/Footer'
import InfoModal from '../components/modals/InfoModal'
import LoginInput from '../components/LoginInput'
import TrimeButton from '../components/TrimeButton'

const vh = Dimensions.get('window').height/100;


export default function Signup({ navigation }) {
  const [ptInfoVisible, setPtInfoVisible] = useState(false);
  
  return (

    <View style={styles.loginRoot}>
      <InfoModal visible={ptInfoVisible} closeFunc={()=>setPtInfoVisible(!ptInfoVisible)}>
        Answer the questions so we can give you the best recommendations on PT’s just for you!{"\n"}{"\n"}
        You can also fill it in on your profile later on. 
      </InfoModal>
      <Hero  isSignup={true}/>

      <ScrollView style={styles.bodyContainer}>
          
          <LoginInput isSignup = {true} label="Full name" placeholder="Enter full name" isPassword={false}/>
          <LoginInput isSignup = {true} label="Email" placeholder="Enter email" isPassword={false}/>
          <LoginInput isSignup = {true} label="Password" placeholder="Enter password" isPassword={true}/>

          <View>
            <TrimeButton text="Match up with a PT" isSecondary={true}/>
            <TrimeButton text="Your first goal" isSecondary={true} isSignup={true} />
          </View>
          <TrimeButton text="Sign up" isSecondary={false} onPress={()=> navigation.navigate('Signin')}/>
      </ScrollView>
      <Footer  isSignUp={true}/>
    </View>
    
  );
}
const styles = StyleSheet.create({
    loginRoot:{
      // Makes sure that the footer falls to the bottom
      // flex: 1,
      // paddingTop: ( Platform.OS === 'ios' ) ? 20 : StatusBar.currentHeight,
      // height:vh,
    },


    bodyContainer:{
      // flex:1,
      paddingHorizontal:16,
    },

  });