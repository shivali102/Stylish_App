import React from "react";
import {View,Text ,StyleSheet, StatusBar,Image} from "react-native"
import {SimpleLineIcons} from 'react-native-vector-icons'
import { responsiveHeight as h ,responsiveHeight as w} from "react-native-responsive-dimensions";
const Profile=()=>{
    return(
        <View>
            <StatusBar/>
            <View style={styles.Header_view}>
            <View style={styles.header_child}>
            <SimpleLineIcons name={"arrow-left"} size={14}/>
            </View>
            <View style={styles.header_child2}>
            <Text>Checkout</Text>
            </View>
            </View>
            <View style={styles.image_View}>
            <Image style={styles.image}source={require("../Images/ProfileScreen/Profile_Pic.png")}/>
            </View>
            <View style={styles.SubHeader_View}>
                <Text>Personal Details</Text>
            </View>
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
    paddingVertical:h(1),
    },
    image:{
        height:h(10),
        width:h(10)
    },
    image_View:{
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:h(2),
        paddingTop:h(1)
    },
    SubHeader_View:{
        paddingHorizontal:w(2)
    }

})
export default Profile