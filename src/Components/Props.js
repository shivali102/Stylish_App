import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { StatusBar } from 'react-native'
import React from 'react'


const Props = () => {
    return (
        <View style={styles.statusbar}>
            <StatusBar translucent={false} backgroundColor={"black"} barStyle={'default'} />

            <View style={styles.outer_view}>
            <View>
            <Text>this is create account </Text>

               </View>
                <View>
                                <TouchableOpacity>
                    <Text style={styles.register_text}>register</Text>
                </TouchableOpacity>
                
            </View>
            </View>
        </View>

    )
}

export default Props
const styles = StyleSheet.create({
    statusbar: {

    },
    register_text: {
        textDecorationLine: 'underline',
        //  position: 'relative', 
        //  top: 3
        // backgroundColor:'yellow',
        // position:'absolute',
        // top :5
    },
    outer_view:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center'
    }
})