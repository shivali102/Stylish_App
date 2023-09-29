import react from "react";
import { View, Text, StyleSheet, Platform, StatusBar, Image, TextInput } from "react-native"
import { Entypo } from "react-native-vector-icons"
import { responsiveHeight as h, responsiveWidth as w } from "react-native-responsive-dimensions";
import Color, { Colors } from '../Themes/Color'
const Shipping = () => {
    return (
        <View >
            <StatusBar />
            <View style={styles.parent}>
                <View style={styles.icon_view}>
                    <Entypo name='chevron-thin-left' size={18} color={'black'} />
                </View>
                <View style={{ flex: 2, paddingVertical: 15, justifyContent: 'center' }}>
                    <Text style={{}}>Checkout</Text>
                </View>
            </View>
            <View style={styles.header}>
                
            <View style={styles.sub_header}>
                <View style={{}}>
                    <Text>Order</Text>
                </View>
                <View style={{}}>
                    <Text>     
                        <Text>{'\u20B9'}</Text>
                        <Text>7000</Text>
                    </Text>
                
                </View>
            </View>
            <View style={styles.sub_header}>
                <View style={{}}>
                    <Text>Shipping</Text>
                </View>
                <View style={{}}>
                    <Text>     
                        <Text>{'\u20B9'}</Text>
                        <Text>30</Text>
                    </Text>
                
                </View>
            </View>
            <View style={styles.sub_header1}>
                <View style={{}}>
                    <Text>Total</Text>
                </View>
                <View style={{}}>
                    <Text>     
                        <Text>{'\u20B9'}</Text>
                        <Text>7030</Text>
                    </Text>
                
                </View>
            </View>
            <View>
                <Text>Payment</Text>
            </View>
            <View>
                
            </View>
        </View>
        <View style={styles.Input1}>
            <View style={styles.icon1_View}>
                <Image style={{height:h(3),width:w(14)}} source={require("../Images/ShippingScreen_Icon/Visa_Icon.png")}/>
            </View>
            <View>
                <TextInput placeholder="card number"/>
            </View>
        </View>
        </View>

    )
}
export default Shipping
const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',

    },
    icon1_View:{
    justifyContent:'center',
    // alignItems:'center',
    // alignSelf:'center',
    
    },

    icon_view: {
        // alignItems:'center',
        // backgroundColor:'red',
        justifyContent: "center",
        // alignItems:"center",
        flex: 1.4,
        paddingLeft: 10
    },
    sub_header: {
        paddingHorizontal: w(3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'blue',
    
    },
    sub_header1: {
        paddingHorizontal: w(3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'blue',
        borderBottomWidth:StyleSheet.hairlineWidth,
        paddingBottom:10 
    },
    header:{
        marginHorizontal:10,
    },
    Input1:{
        flexDirection:"row",
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:Colors.borderColor
    }

})