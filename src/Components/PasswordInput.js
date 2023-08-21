import react from "react"
import { TextInput, View ,StyleSheet } from "react-native"
import TextBox from "./TextInput"
import {Entypo,Ionicons} from "react-native-vector-icons"
import { responsiveWidth as w,responsiveHeight as h } from "react-native-responsive-dimensions"
import { Colors } from "../Themes/Color"
const PasswordInput=()=>{
    return (
        <View  style={[styles.parent ]}>
        <View style={{flex:.3,justifyContent:'center',alignItems:'center'}}>
            <Entypo name="lock" size={22} color={Colors.textinput_icon_color}/>
        </View>
        
        <View style={{flex:2.4}}>
        <TextInput placeholder={"Password"} />
    </View>
        <View style={{flex:.3,justifyContent:'center',alignItems:'center'}}>
         <Ionicons name="eye-outline" size={22} color={Colors.textinput_icon_color}/>
        </View>
        
               </View>
    )
}
export default PasswordInput
const styles=StyleSheet.create({
parent:{
    flexDirection:'row',
    justifyContent:'space-between',
    // marginHorizontal:w(1),
    borderWidth:.2,
    paddingVertical:h(2),
    borderRadius:4,
    paddingHorizontal:w(1),
    backgroundColor:Colors.input_color
}
})