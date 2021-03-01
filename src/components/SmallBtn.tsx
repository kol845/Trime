import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';




// Tool for making react-native svgs: https://transform.tools/svg-to-react-native
// Will contain: 1) ---or---, 2) bouble svg:s, 3) two social media icons

export default function SmallBtn(props: { text: string }) {

    return(
        <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.sbText}>{props.text}</Text>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
      padding:6,
      backgroundColor:"#D58258",
      borderRadius:6,
      color:"white",
    },
    sbText:{
      color:"white",
    }

  });