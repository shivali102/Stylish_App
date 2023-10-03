import { View, Text, StyleSheet,  SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { responsiveFontSize as fs, responsiveHeight as h, responsiveScreenWidth as w } from 'react-native-responsive-dimensions'
// import Button from '../Components/Button'
import Heading from '../Components/Heading'
import UserInput from '../Components/UserInput'
export default function Signup() {
    return (


        <View style={styles.parent}>
            <SafeAreaView />
            <StatusBar BarStyle='default' hidden={false} />
          
             <Heading heading1='Welcome'
             heading2='Back!'/> 

            <UserInput />
            <UserInput />
            <View style={styles.description}>
            <Text>By clicking the Register button, you agree</Text> 
            <Text>to the public offer</Text>
            </View>
            {/* <Button /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    parent: {
        paddingHorizontal: w(2),
    },
    description:{
        paddingTop:h(2)
    }

})