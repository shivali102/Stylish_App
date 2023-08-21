import { View, Text, StatusBar, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { responsiveFontSize as fs, responsiveHeight as h, responsiveScreenWidth as w } from 'react-native-responsive-dimensions'
import Button from '../Components/Button'
import UserInput from '../Components/UserInput'
import contants from 'expo-constants'
import PasswordInput from '../Components/PasswordInput'
import { Colors } from '../Themes/Color'
const SignIn = () => {
    return (
        <View style={styles.parent}>
            <SafeAreaView />
            <StatusBar barStyle={'default'}
                backgroundColor={'black'} />
            <View style={styles.outerview}>
                <Text style={styles.heading1}>Welcome </Text>
             
                         
                     <Text style={styles.heading1}>Back!</Text>
                     </View>

            <View>
                <UserInput />
            </View>
            <View style={{ marginTop: h(4) }}>
                <PasswordInput />
            </View>
            <TouchableOpacity>
                <View style={styles.forgottenPassword}>
                    <Text style={styles.forget_password_text}> Forget password?</Text>
                </View>
            </TouchableOpacity>

            <View>
                <Button ButtonName={'Login'} />
            </View>



            <Text style={styles.sub_heading}>-OR Continue with-</Text>
            {/* <View style={styles.outer_view}> */}
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
                {/* <View style={styles.login_detail_option}>    */}
                <View style={styles.outer_view}>
            <View>
            <Text>Create an account </Text>

               </View>
                <View>
                                <TouchableOpacity>
                    <Text style={styles.register_text}>Sign Up</Text>
                </TouchableOpacity>
                
            </View>
            </View>





                {/* <View style={{flexDirection:'row',justifyContent:"center",alignItems:'center',backgroundColor:'green'}}>
                <View>     
                <Text style={styles.login_option}>i have already have account<Text> </Text>
                </Text>
                </View>
                <View>
            
                <TouchableOpacity>
            <Text onPress={()=>{console.log("hello")}} 
             style={{color:Colors.button,position:'absolute',top:-4,textDecorationLine:'underline',backgroundColor:"black"}}>
              
                 Sign Up
                    </Text>
                    </TouchableOpacity>

               
                 </View>
            </View> */}
       
        </View>
    )
}

export default SignIn
const styles = StyleSheet.create({
    outerview: {
        // marginTop: contants.statusBarHeight,
        marginTop:h(5),
        marginBottom: h(3),
        // backgroundColor:'red',
        // flexWrap:'wrap',
        // marginRight:"20%",
    },
    heading1: {
        fontSize: fs(5),
        //  backgroundColor:"red",
        //  marginTop:h(2),
    },
    heading2:{
        fontSize: fs(5),
        backgroundColor:"yellow"
    },
    parent: {
        marginHorizontal: w(5)

    },
    forgottenPassword: {
        alignItems: 'flex-end',
        paddingTop: h(1),
        paddingBottom: h(5),
    },
    sub_heading: {
        textAlign: 'center',
        paddingTop: h(8),
    },
    view_parent: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingHorizontal: w(22),
        // backgroundColor:'red',
        marginTop: h(3),
        // backgroundColor:"red"
    },
    image_style: {
        height: h(3),
        width: h(3)
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
    forget_password_text: {
        color: Colors.button
    },
    // outer_view:{
    //     alignItems:'center',
    //     justifyContent:'center',
    // }
    login_option: {
        textAlign: 'center',
        marginTop: h(2),
        backgroundColor:'white',
            
    },
    login_detail_option:{
        flexDirection:'row',
        // justifyContent:'space-between',
    },
    register_text: {
        textDecorationLine: 'underline',
        //  position: 'relative', 
        //  top: 3
        // backgroundColor:'yellow',
        // position:'absolute',
        // top :5
        fontSize:fs(2),
        color:Colors.button,
        
    },
    outer_view:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     paddingTop:h(2.5)
    }



})