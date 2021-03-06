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


export default function Login({ navigation }) {
  const [ptInfoVisible, setPtInfoVisible] = useState(false);
  
  return (

    <View style={styles.loginRoot}>
      <InfoModal visible={ptInfoVisible} closeFunc={()=>setPtInfoVisible(!ptInfoVisible)}>
        Answer the questions so we can give you the best recommendations on PT’s just for you!{"\n"}{"\n"}
        You can also fill it in on your profile later on. 
      </InfoModal>
      <Hero  />

      <ScrollView style={styles.bodyContainer}>
          
        
   
        <View style={styles.bodyContainer}>
          <LoginInput label="Email" placeholder="Enter email" isPassword={false}/>
          <LoginInput label="Password" placeholder="Enter password" isPassword={true}/>
          <Text style={styles.forgotText}>Forgot password?</Text>
          <View>
            <TrimeButton text="Sign In" isSecondary={false} onPress={()=>navigation.navigate('Feed')}/>
            <TrimeButton text="Sign Up" isSecondary={true} onPress={()=>navigation.navigate('Signup')}/>
          </View>
        </View>
      </ScrollView>
      <Footer  isSignUp={false}/>
    </View>
    
  );
}
const styles = StyleSheet.create({
    loginRoot:{
      // Makes sure that the footer falls to the bottom
      // flex: 1,
      // paddingTop: ( Platform.OS === 'ios' ) ? 20 : StatusBar.currentHeight,
      // height:vh,
      // fontFamily:
    },


    bodyContainer:{
      // flex:1,
      paddingHorizontal:16,
    },
    forgotText:{
      textAlign:"right"      
    }
  });