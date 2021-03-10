import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const primary300 = '#E2A88A'


// Tool for making react-native svgs: https://transform.tools/svg-to-react-native
// Will contain: 1) ---or---, 2) bouble svg:s, 3) two social media icons
const s = ()=>{}

export default function SmallBtn(props: { text: string, onPress?:Function }) {
    const onPress = props.onPress ? props.onPress: ()=>{};
    return(
        <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        
      >
        <Text style={styles.sbText}>{props.text}</Text>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
      borderRadius: 6,
      paddingHorizontal:12,
      paddingVertical:6,
      backgroundColor:primary300,
      color:"white",
    },
    sbText:{
      color:"white",
    }

  });