import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { responsiveWidth as w, responsiveFontSize as fs, responsiveHeight as h } from 'react-native-responsive-dimensions'
import Header from '../Components/Header'

const Onboarding3 = () => {
    return (
        <View style={styles.parent}>
            <StatusBar />
            <Header />
            <View style={styles.image_View}>
                <Image style={styles.image} source={require('../../assets/OnboardingScreens/SplashScreen3.png')} />
            </View>
            <View style={styles.header_View}>
                <Text style={styles.heading}>Get Your Order</Text>
            </View>
            <View style={styles.para}>
                <Text>Amet minim mollit non deserunt ullamco est</Text>
                    <Text> sit aliqua dolor do amet sint. Velit officia</Text>
                        <Text> consequat duis enim velit mollit.</Text>
            </View>

        </View>
    )
}

export default Onboarding3
const styles = StyleSheet.create({
    image: {
        height: h(48),
        width: h(48),
    },
    image_View: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: h(13),
        // backgroundColor:'red',
    },
    parent: {
       paddingHorizontal:w(4),
    //    backgroundColor:'green'
    },
    header_View: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    para:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:h(1)
    },
    heading:{
        fontSize:fs(3)
    }
})