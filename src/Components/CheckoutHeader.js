import react from "react"
import { View, Text, StatusBar } from "react-native"
import { Entypo  } from 'react-native-vector-icons'
import { StyleSheet } from "react-native"
import {responsiveHeight as h,responsiveWidth as w } from "react-native-responsive-dimensions"
const CheckoutHeader = () => {
    return (
        <View style={styles.parent}>
            <StatusBar barStyle={"default"} backgroundColor={"black"}/>
            <View style={styles.icon_view}>
                
        <Entypo name="chevron-thin-left" size={22} colour={'grey'}/>
    </View>
    <View style={styles.heading_view}>
    <Text>
        Checkout
    </Text>
    </View>
     
            {/* <Text>hii</Text> */}
            {/* <Text>An application programming interface (API) is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software.[1] A document or standard that describes how to build or use such a connection or interface is called an API specification. A computer system that meets this standard is said to implement or expose an API. The term API may refer either to the specification or to the implementation.</Text> */}
        </View>
    )
}
export default CheckoutHeader
const styles = StyleSheet.create({
    parent: {
        flexDirection:'row',
        paddingVertical:h(2)
    },
    icon_view:{
        flex:2
    },
    heading_view:{
     
        flex:3,
        justifyContent:'center',
        // backgroundColor:'red'
    }
})