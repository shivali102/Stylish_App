import {View,Text,StyleSheet,Platform, StatusBar} from "react-native"
import React from "react"
import { Colors } from "../Themes/Color"
const PlaceOrder =()=>{
    return(
        <View style={styles.parent}>
          <View>
            <Text>hii</Text>
            </View>
        </View>
 

    )
}
export default PlaceOrder
const styles=StyleSheet.create({
parent:{
    ...Platform.select({
        android:{
        marginTop:StatusBar.currentHeight    
        },
    }
        
    ),
    backgroundColor:Colors.Screen_color
}
})