import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome  } from 'react-native-vector-icons'
import { Colors } from '../Themes/Color'
import { responsiveFontSize as fs, responsiveScreenHeight as h, responsiveScreenWidth as w } from 'react-native-responsive-dimensions'
const UserInput = () => {
  return (
    <View style={styles.main_view}>
      {/* <FontAwesome6 name='user-large' size={20} color='#626262' /> */}
      <View style={styles.icon_View}>
        <FontAwesome styles={styles.icon} name='user' size={21} color='#626262' />
      </View>
      <View style={styles.textInput_View}>  
      <TextInput  placeholder='Username or Email' />
      </View>
      <View style={styles.empty_view}>

      </View>
    </View>

    // <View>
    //   <Text>hii</Text>
    // </View>

  )
}
const styles = StyleSheet.create({
  main_view: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: h(2),
    paddingHorizontal: w(1),
    borderWidth: .3,
    borderRadius:5,
    backgroundColor:Colors.input_color,
  },
  icon: {

  },
  icon_View: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:.1,
    // backgroundColor:"red",

  },
  textInput_View:{
    // alignItems:'center',
    // justifyContent:'center',
  flex:.9,
  // backgroundColor:'yellow'
  },
  empty_view:{
    // flex:0.1,
    // backgroundColor:'blue',
  }
})

export default UserInput