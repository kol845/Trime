import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';



const FeedButtons = ({name, image}) => {
    return (
        
             <TouchableOpacity style={styles.button}>

                <Text style={{color:'#fff'}}>{image} {name}</Text>
                
            </TouchableOpacity>
        
        );
    

}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'rgba(213, 130, 88,0.8)',
        borderRadius:5,
        padding:4,
        paddingVertical:8,
        
       }

})
export default FeedButtons;