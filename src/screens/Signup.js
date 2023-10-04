import { View, Text, StyleSheet,  SafeAreaView, StatusBar,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { responsiveFontSize as fs, responsiveHeight as h, responsiveScreenWidth as w } from 'react-native-responsive-dimensions'
// import Button from '../Components/Button'
import Heading from '../Components/Heading'
import UserInput from '../Components/UserInput'
import Button from '../Components/Button'
import { Colors } from '../Themes/Color'
import PasswordInput from '../Components/PasswordInput'
export default function Signup() {
    return (


        <View style={styles.parent}>
            <SafeAreaView />
            <StatusBar BarStyle='default' hidden={false} />
          
             <Heading heading1='Create'
             heading2='an account'/> 
            <View>
            <UserInput
            icon_name={'user'}
            icon_size={16}
            icon_color={Colors.textinput_icon_color}
            placeholder_name={'Email'} />
            </View>
            <View style={styles.userinput_view}>
          <PasswordInput
          placeholdername={'Password'}/>
            </View>
            <View style={styles.userinput_view}>
            <PasswordInput
            placeholdername={'Confirm Password'}/>
            </View>
            <View style={styles.description}>
            <Text>By clicking the Register button, you agree</Text> 
            <Text>to the public offer</Text>
            </View>
            <View style={{paddingVertical:h(1)}}>
            <Button ButtonName={'Create Account'}/>
            </View>
            <Text style={styles.short_heading}>-OR Continue with-</Text>
            <View style={styles.view_parent}>
                        <TouchableOpacity>
                    <View style={styles.image_View}>
                        <Image style={styles.image_style} source={require('.././../assets/IconButton/google.png')} />
                    </View>
                        </TouchableOpacity>
                            <View style={{paddingHorizontal:w(3)}}>
                        <TouchableOpacity>
                    <View style={styles.image_View}>
                        <Image style={styles.image_style} source={require("../../assets/IconButton/ios.png")} />
                    </View>

                    
                        </TouchableOpacity>
                        </View>
                    <TouchableOpacity>
 
                    <View style={styles.image_View}>
                   <Image style={styles.image_style} source={require("../../assets/IconButton/Facebook.png")} />
                       
                    </View>
                    </TouchableOpacity>
                {/* </View> */}
                </View>
                <View style={{alignItems:'center',paddingTop:h(2)}}>
                <View style={{flexDirection:'row'}}>
                <Text>I Already have an account </Text>
                <TouchableOpacity>
                <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
                </View>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    parent: {
        paddingHorizontal: w(2),
    },
    description:{
        paddingTop:h(2)
    },
    short_heading:{
        textAlign:'center',
        paddingVertical:h(2),
    },
    view_parent: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingHorizontal: w(22),
        // backgroundColor:'red',
        marginTop: h(3),
        // backgroundColor:"red"
    },
    image_View: {
        borderColor: Colors.button,
        borderWidth: 1,
        padding: h(2),
        borderRadius: h(6),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.icon_backgroud,
        // flex:1,,
        
    },
    image_style: {
        height: h(3),
        width: h(3)
    },
    login:{
        textDecorationLine:'underline',
        color:Colors.button
    },
    userinput_view:{
        marginTop:h(3.5)
    }

})
