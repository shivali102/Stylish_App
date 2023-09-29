import { View, Text, StatusBar, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { responsiveHeight as h, responsiveFontSize as fs, responsiveScreenWidth as w } from 'react-native-responsive-dimensions'
const Onboarding2 = () => {
    return (
        <View style={styles.parent}>
            <ScrollView>
                <StatusBar />
                <Header />
                <View style={styles.outer_image_view}>
                    <Image   resizeMode='center' style={styles.image} source={require('../Images/OnboardingScreens/SplashScreen2.png')} />
                </View>
                <View>
                    <Text style={styles.heading}> Make Payment</Text>
                </View>
                <View style={styles.heading_View}>
                    <Text>Amet minim mollit non deserunt ullamco est</Text>
                    <Text> sit aliqua dolor do amet sint. Velit officia </Text> 
                    <Text>consequat duis enim velit mollit.</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Onboarding2
const styles = StyleSheet.create({
    image: {
        height: h(33),
        width: h(50),
        // backgroundColor:'red',
      
    },
    outer_image_view: {
       
        marginTop:h(18) 
      
    },
    heading: {
        textAlign: 'center',
        paddingTop:h(4),
        fontSize:fs(3),
    
    },
    heading_View:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:h(1),
    },
    parent:{
        marginHorizontal:h(2)
    }
})