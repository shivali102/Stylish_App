import { View, Text, StatusBar, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveFontSize as fs, responsiveHeight as h, responsiveScreenWidth as w } from 'react-native-responsive-dimensions'
import Button from '../Components/Button'
import UserInput from '../Components/UserInput'
import contants from 'expo-constants'
import PasswordInput from '../Components/PasswordInput'
const SignIn = () => {
    return (
        <View style={styles.parent}>
            <SafeAreaView />
            <StatusBar barStyle={'default'}
                backgroundColor={'black'} />
            <View style={styles.outerview}>
                <Text style={styles.heading}>Welcome</Text>
                <Text style={styles.heading}>Back!</Text>
            </View>
            <View>
            <UserInput />
            </View>
            <View style={{marginTop:h(4)}}>
            <PasswordInput />
            </View>
            <TouchableOpacity>      
        <View style={styles.forgottenPassword}>
                <Text>Forgetten password?</Text>
            </View>
            </TouchableOpacity>

                <View>
                    <Button />
                </View>
                <View>
                    <Text>OR Continue with</Text>
                </View>
                <View>
                 <View style={styles.main_View}>
                    <Text>hello</Text>
                </View>   
                </View>
        </View>
    )
}

export default SignIn
const styles = StyleSheet.create({
    outerview: {
        marginTop:contants.statusBarHeight,
        marginBottom:h(5),        
    },
    heading: {
        fontSize: fs(5)

    },
    parent: {
        marginHorizontal: w(5)

    },
    forgottenPassword: {
        alignItems: 'flex-end',
        paddingTop:h(1),
        paddingBottom:h(5),
    },
    main_View:{
        alignItems:'center',
        // justifyContent:'flex-start',
        flexDirection:'row',
        backgroundColor:'red',
    }

})