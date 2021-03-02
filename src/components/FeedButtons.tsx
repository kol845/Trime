import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



const FeedButtons = ({name, image}) => {
    return (
        <View>
             <TouchableOpacity style={styles.button}>
                <Text style={{color:'#fff'}}>{image} {name}</Text>
                
        
           </TouchableOpacity>
        </View>
           
        );
    

}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'rgba(213, 130, 88,0.8)',
        width:90,
        borderRadius:5,
        padding:4,
        paddingTop:8,
        paddingBottom:8,
        textAlign:'center'
    
        
    }

})
export default FeedButtons;