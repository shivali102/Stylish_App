import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome  } from 'react-native-vector-icons'
import { Colors } from '../Themes/Color'
import { responsiveFontSize as fs, responsiveScreenHeight as h, responsiveScreenWidth as w } from 'react-native-responsive-dimensions'
const UserInput = (props) => {
  return (
    <View style={styles.main_view}>
      {/* <FontAwesome6 name='user-large' size={20} color='#626262' /> */}
      <View style={styles.icon_View}>
        <FontAwesome styles={styles.icon} name={props.icon_name} size={props.icon_size} color={props.icon_color} />
      </View>
      <View style={styles.textInput_View}>  
      <TextInput  placeholder={props.placeholder_name} />
      </View>
    
    </View>

  

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
 

  },
  textInput_View:{
  
  flex:.9,
  
  },
  
})

export default UserInput