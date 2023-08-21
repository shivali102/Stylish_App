import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { StatusBar } from 'react-native'
import React from 'react'


const Props = () => {
    return (
        <View style={styles.statusbar}>
            <StatusBar translucent={false} backgroundColor={"black"} barStyle={'default'} />

        </View>

    )
}

export default Props
const styles = StyleSheet.create({
    statusbar: {

    },
  
})