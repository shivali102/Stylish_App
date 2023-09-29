import react from "react"
import {View,Text,Image,TextInput,StyleSheet} from "react-native"
import { Colors } from "../Themes/Color"
import { responsiveHeight as h,responsiveWidth as w } from "react-native-responsive-dimensions"
const ShippingInput=()=>{
    return(
        <View style={styles.Input1}>
            <View style={styles.icon1_View}>
                <Image style={{height:h(3),width:w(14)}} source={require("../Images/ShippingScreen_Icon/Visa_Icon.png")}/>
            </View>
            <View>
                <TextInput placeholder="card number"/>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    icon1_View:{
        justifyContent:'center',
    },
    Input1:{
        flexDirection:"row",
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:Colors.borderColor,
        paddingHorizontal:w(2),
        paddingVertical:h(1),
    }


})
export default ShippingInput