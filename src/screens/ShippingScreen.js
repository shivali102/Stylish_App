import React from "react";
import {View,Text,StyleSheet,AntDesign,Feather } from "react-native"
const ShippingScreen=()=>{
    return (
        <View style={styles.parent}>
        <View>
            <AntDesign name="left" size={14} color="black"/>
        </View>
        <View>
            <Text>Shopping Bag</Text>
        </View>
        <View>
            <Feather name="heart" size={12} color="black"/>
        </View>
        </View>

    )

}
const styles=StyleSheet.create({
    parent:{
    flexDirection:'row',   
    justifyContent:'space-between',
        

    }
})
export default ShippingScreen