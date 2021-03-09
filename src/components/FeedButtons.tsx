import React from 'react';
import { StyleSheet, Text, TouchableOpacity,View } from 'react-native';



const FeedButtons = ({name, image}) => {
    return (
        
             <TouchableOpacity style={styles.button}>

                <View style={{alignSelf:'center'}}>{image}</View>
                <Text style={{color:'#fff',alignSelf:'center'}}> {name}</Text>
                
            </TouchableOpacity>
        
        );
    

}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'rgba(213, 130, 88,0.8)',
        borderRadius:5,
        paddingVertical:4,
        paddingHorizontal:8,
        width:80
        
    
        
       }

})
export default FeedButtons;