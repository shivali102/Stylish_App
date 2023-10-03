import React from "react";
import {View,Text ,StyleSheet, StatusBar,Image, TextInput, TouchableOpacity, ScrollView, Alert} from "react-native"
import {SimpleLineIcons} from 'react-native-vector-icons'
import { responsiveHeight as h ,responsiveHeight as w,responsiveFontSize as fs} from "react-native-responsive-dimensions";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { Colors } from "../Themes/Color";
const Profile=()=>{
    onprogress=()=>{
     prompt(
     "hii")
    }
    return(
        <View>
            <StatusBar/>
            <ScrollView>       
             <View style={styles.Header_view}>
            <View style={styles.header_child}>
                <TouchableOpacity>
            <SimpleLineIcons name={"arrow-left"} size={14}/>
            </TouchableOpacity>
            </View>
            <View style={styles.header_child2}>
            <Text>Checkout</Text>
            </View>
            </View>
            <View style={styles.image_View}>
            <Image style={styles.image}source={require("../Images/ProfileScreen/Profile_Pic.png")}/>
            </View>
            <View style={styles.SubHeader_View}>
                <Text style={{paddingVertical:h(1.4)}}>Personal Details</Text>
                <Input TextInputHeading={"Email Address"}
                placeholder_Name={"Email"}/>
                
                    
                        <Text style={styles.TextInput_Heading}>Password</Text>
                        <View style={styles.TextInput_View}>
                            <TextInput placeholder="Password"
                            placeholder_Name={"Password"}/>
                        </View>
                <View style={styles.change_password_View}>
                    <TouchableOpacity>
                <Text style={styles.change_password}>Change Password</Text>
                </TouchableOpacity>    
                </View>        
            <Text style={styles.business_heading}>Business Address Details</Text>        
               <Input TextInputHeading={"Pincode"}
               placeholder_Name={"Pincode"}/>
               <Input TextInputHeading={"Address"}
               placeholder_Name={"Address"}/>
               
               <Input TextInputHeading={"City"}
               placeholder_Name={"City"}/>
               <Input TextInputHeading={"State"}
               placeholder_Name={"State"}/>
               <Input TextInputHeading={"Country"}
               placeholder_Name={"Country"}/>
               <Input TextInputHeading={"Bank Account Holder "}
               placeholder_Name={"Bank Account Holder"}/>
               <Input TextInputHeading={"Account Holder Name "}
               placeholder_Name={"Account Holder Name"}/>
               <Input TextInputHeading={"IFSC Code "}
               placeholder_Name={"IFSC Code"}/>
               <View style={{paddingVertical:h(5)}}>

               
                <Button
               ButtonName={"Save"}
           onPressing ={onprogress}
              
               /> 
              
             
            </View>
            </View>
               </ScrollView>
            
        </View>
    )
}
const styles=StyleSheet.create({
    Header_view:{
    flexDirection:'row',
    paddingHorizontal:w(2),
    

    },
    header_child:{
    flex:.4,
    // backgroundColor:"red",
    justifyContent:'center',
    },
    header_child2:{
    flex:.6,
    paddingTop:h(1.5),
    paddingBottom:h(3),
    justifyContent:'center',
    
    },
    image:{
        height:h(13),
        width:h(13)
    },
    image_View:{
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:h(2),
        paddingTop:h(1)
    },
    SubHeader_View:{
        paddingHorizontal:w(2),
    
    },
    TextInput_View:{
        borderWidth:1,
        borderColor:Colors.borderColor,
        paddingVertical:h(.6),
        borderRadius:4,
        paddingHorizontal:w(1)
    },
    TextInput_Heading:{
        fontSize:fs(1.5),
        paddingBottom:h(1),
        paddingTop:h(3)
    },
    change_password:{
        color:Colors.button,
        textDecorationLine:'underline',

    },
    change_password_View:{
        alignItems:'flex-end',
        paddingTop:h(2),
        paddingBottom:h(5),
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:Colors.borderColor,
    },
    business_heading:{
        paddingTop:h(4),
        paddingBottom:h(1.3),

    }

})
export default Profile