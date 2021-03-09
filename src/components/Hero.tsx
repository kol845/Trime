import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HeroTopWave from './../images/svg/HeroTopWave';
import HeroWave from '../images/svg/HeroWave';





const Hero = () => {
  
    return( 
    
      <View>
       
       
         <ImageBackground  style={styles.height} source={require('./../images/hero-image.png') }>
         <HeroTopWave style={styles.topWave}/>
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
      marginTop:140,
      backgroundColor:'rgba(85, 110, 116,0.9)',
      borderRadius:9
    
      
      

    },
    height: {
      
      height:345,
      
      width:'100%',
      flex:1,
      resizeMode: "stretch",
      justifyContent: "center"
      

        
      
    },
    wave:{
      marginTop:280,
      
       right:0
    },
    topWave:{
      position:'absolute',
      left:0,
      right:0,
      
      
      transform: [
        { rotateX: "175deg" },
        { rotateY:"175deg"}
      
      ] ,
   
    }
  });
  
  export default Hero;