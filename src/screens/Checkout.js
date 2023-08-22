import react from "react"
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native"
import CheckoutHeader from "../Components/CheckoutHeader"
import { SimpleLineIcons } from 'react-native-vector-icons'
import { responsiveHeight as h, responsiveWidth as w } from "react-native-responsive-dimensions"
const Checkout = () => {
    return (
        <View style={styles.parent}>
            <CheckoutHeader />
            <View style={styles.sub_header}>

                <SimpleLineIcons style={{ paddingRight: w(1) }} name="location-pin" size={22} colour={"black"} />
      <View style={{alignItems:'center',justifyContent:'center'}}>

                <Text >Delivery Address</Text>
                </View>

            </View>
        </View>
    )
}
export default Checkout
const styles = StyleSheet.create({
    parent: {
        // flex:1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            },

        }),
        marginHorizontal: h(1),
    },
    sub_header: {
        flexDirection: 'row',
    }

})