import react from 'react'
import { View, Text, StyleSheet, TextInput, StatusBar } from 'react-native'
import { responsiveWidth as w, responsiveHeight as h, responsiveFontSize as f } from 'react-native-responsive-dimensions'
import { Colors } from '../Themes/Color'
import { FontAwesome } from 'react-native-vector-icons'
import Icon from '../Components/Icon'
import UserInput from '../Components/UserInput'
import Button from '../Components/Button'
const Forgettenpassword = () => {
  return (

    <View style={styles.parent}>
      <StatusBar />
      <View style={{ flex:2.4,justifyContent:'center'}}>
        <Text style={styles.heading1}>Forget</Text>
        <Text style={styles.heading1}>Password?</Text>
      </View>
      <View style={{ flex:1.3}}>
        <UserInput
          icon_name={'envelope'}
          icon_size={18}
          placeholder_name={'Enter your  Email Address'} />
      </View>
      <View style={{flex:1}}>
        <Text>* We will send you a message to set or reset your new password</Text>
      </View>
      <View style={{flex:7.3}}>
      <Button ButtonName={'Submit'}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  heading1: {
    fontSize: f(4.5),

  },
  parent: {
    paddingHorizontal: w(4),
    // flex:1,
    height:"100%",
    backgroundColor: Colors.Screen_color,
  
  },
  email_textbox: {
    flexDirection: 'row',
    borderWidth: .6,
    paddingVertical: h(.8)
  },
  email_icon: {
    justifyContent: 'center',
  }
})
export default Forgettenpassword
