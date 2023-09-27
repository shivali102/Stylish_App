import react from "react";
import {View,Text,StyleSheet,Platform, StatusBar} from "react-native"
import {Entypo} from "react-native-vector-icons"
const Shipping=()=>{
    return(
    <View >
        <StatusBar/>
        <View style={styles.parent}>
        <View style={styles.icon_view}>
            <Entypo  name='chevron-thin-left' size={12} color={'black'} />
        </View>
        <View style={{}}>
        <Text style={{fontSize:10}}>Checkout</Text>
        </View>
        </View>
    </View>
    )
}
export default Shipping
const styles=StyleSheet.create({
    parent:{
    flexDirection:'row',
    
    },
   
    icon_view:{
        // alignItems:'center',
        backgroundColor:'red',
        justifyContent:"center",
        // alignItems:"center",
        
    }
})