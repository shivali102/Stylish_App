import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
// import MaterialIcons from 'react-native-vector-icons'
import { Entypo, Ionicons } from 'react-native-vector-icons'

import { responsiveFontSize as fs, responsiveHeight as h, responsiveScreenWidth as w } from 'react-native-responsive-dimensions'
import { Colors } from '../Themes/Color'
const PasswordInput = () => {
    return (
        <View style={styles.outerView}>
            {/* <MaterialIcons name='lock' /> */}
            {/* <View style={styles.Icon_View}> */}
                <Entypo style={styles.icon} name="lock" size={22} color={'#626262'} />
            {/* </View> */}
            <View style={styles.inner_view}>
                <View style={styles.TextBox}>
                    <TextInput placeholder='Password' />
                </View>
                <View style={styles.Icon_View2}>
                    <Ionicons name='eye-outline' size={18} color={'#626262'} />
                </View>
            </View>
        </View>
    )
}

export default PasswordInput
const styles = StyleSheet.create({
    outerView: {
        backgroundColor:Colors.input_color,
        paddingVertical: h(2),
        borderWidth: .4,
        flexDirection: 'row',
        paddingHorizontal: w(3),
        borderRadius:8,
    

    },
    Icon_View: {
        justifyContent: 'center',
        // alignItems: 'center',
        // flex:.1,
        // justifyContent:'flex-start',
        alignItems:'center',
        // backgroundColor:'red',

    },
    Icon_View2: {
        // justifyContent: 'center',
        // alignItems: 'center',
        alignItems:'flex-end',
        justifyContent:'center',
        flex:.2,
        // backgroundColor:'grey'


    },
    TextBox: {
        alignContent: 'center',
        justifyContent:'center',
        // marginHorizontal:h(11),
        // flex:.8,
        // backgroundColor:'green'

    },
    inner_view: {
        flexDirection: 'row',      
        //  backgroundColor:'red',
         justifyContent:'space-between',
        paddingHorizontal:w(1),
    },
    icon:{
        alignSelf:'center',
    }
})