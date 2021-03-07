import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HeroTopWave from './../images/svg/HeroTopWave';
import HeroWave from '../images/svg/HeroWave';





const Hero = ({height}) => {
  
    return( 
    
      <View>
       
         <HeroTopWave style={styles.topWave}/>
         <ImageBackground  style={styles.height} source={require('./../images/hero-image.png') }>
          <View>
            <Text style={styles.text} >Trime</Text>
          </View>
         </ImageBackground>
         <HeroWave style={styles.wave}/>
    </View>
   
    )
  };
 
  const styles = StyleSheet.create({
    text: {
     // fontFamily:'helvetica',
      marginLeft:30,
      marginRight:30,
      fontSize: 60,
      color:'#D58258',
      fontWeight:'900',
      textAlign:'center',
      marginTop:170,
      backgroundColor:'rgba(85, 110, 116,0.9)',
      borderRadius:9
    
      
      

    },
    height: {
      position:'absolute',
      height:450,
      zIndex:-1,
      marginTop:10,
      width:'100%',
      flex:1,
      resizeMode: "stretch",
      justifyContent: "center"
      

        
      
    },
    wave:{
      marginTop:326,
       zIndex:3,
       right:0
    },
    topWave:{
      transform: [
        { rotateX: "175deg" },
        { rotateY:"175deg"}
      
      ] ,
      zIndex:1 
    }
  });
  
  export default Hero;