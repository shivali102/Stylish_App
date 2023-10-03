import React from "react";
import {View ,Text, TextInput,StyleSheet} from "react-native"
import { responsiveWidth as w,responsiveHeight as h ,responsiveFontSize as fs} from "react-native-responsive-dimensions";
import { Colors } from "../Themes/Color";
const Input=({TextInputHeading,placeholder_Name})=>{
    return (
        <View>
            <Text style={styles.TextInput_Heading}>{TextInputHeading}</Text>
            <View style={styles.TextInput_View}>
            <TextInput placeholder={placeholder_Name}/>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    TextInput_View:{
        borderWidth:1,
        borderRadius:4,
        paddingHorizontal:w(2),
        paddingVertical:h(.6),
        borderColor:Colors.TextInput_Border
    },
    TextInput_Heading:{
        paddingVertical:h(1),
        fontSize:fs(1.5)
    }
})
export default Input