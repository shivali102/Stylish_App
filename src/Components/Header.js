import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight as h ,responsiveFontSize as fs,responsiveWidth as w } from 'react-native-responsive-dimensions'
import { Colors } from '../Themes/Color'
const Header = () => {
  return (
    <View style={styles.header}>
    <View style={{justifyContent:'center',justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:20}}>1</Text>
    </View>
    <View style={{justifyContent:'center'}}>
      <TouchableOpacity>
        <Text style={{fontSize:fs(2)}}>Skip</Text>
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
    paddingTop:h(1),
    // backgroundColor:'yellow'
    // borderWidth:1,
}
})