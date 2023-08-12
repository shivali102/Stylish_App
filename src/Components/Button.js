import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight as h, responsiveFontSize as fs, responsiveWidth as w } from 'react-native-responsive-dimensions'
const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button_touchable}>
      <View style={styles.buttonView}>
        <Text style={styles.Button}>{props.ButtonName}</Text>
        </View>
    </TouchableOpacity>

  )
}

export default Button
const styles = StyleSheet.create({
  buttonView: {
    paddingVertical: h(2),
    backgroundColor: '#F83758',
    borderRadius:6,
   
  },
  Button: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  button_touchable:{
    // activeOpacity:.1
  }
})