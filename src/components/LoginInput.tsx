import React from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';



const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

const primary300 = '#E2A88A'

// Tool for making react-native svgs: https://transform.tools/svg-to-react-native
// Will contain: 1) ---or---, 2) bouble svg:s, 3) two social media icons

export default function LoginInput(props:{ isSignup?:boolean, label:string, placeholder:string, isPassword:boolean}) {

    return(
      <View style={[styles.container, (props.isSignup ? styles.signupContainer:null)]}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput style={[styles.input, (props.isSignup ? styles.signupInput:null)]} placeholder={props.placeholder} secureTextEntry={props.isPassword}/>
      </View>

    )
}
const styles = StyleSheet.create({
    container:{
      marginVertical:6,
    },
    signupContainer:{
      marginVertical:0,
    },
    label:{
        fontWeight:"bold",
        fontSize:15,
        color:"rgba(0,0,0,0.7)"
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:'rgba(0, 0, 0, 0.1)',
    },
    signupInput:{
      padding:3,
    },
  });