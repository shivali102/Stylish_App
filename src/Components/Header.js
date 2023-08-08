import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight as h ,responsiveFontSize as fs,responsiveWidth as w } from 'react-native-responsive-dimensions'
const Header = () => {
  return (
    <View style={styles.header}>
    <View>
    <Text>1</Text>
    </View>
    <View>
      <TouchableOpacity>
        <Text>Skip</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default Header
const styles=StyleSheet.create({
header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:h(3)
}
})