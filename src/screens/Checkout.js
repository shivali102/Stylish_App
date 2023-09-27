import react from "react"
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, Image } from "react-native"
import CheckoutHeader from "../Components/CheckoutHeader"
import { SimpleLineIcons } from 'react-native-vector-icons'
import { responsiveHeight as h, responsiveWidth as w ,responsiveFontSize as fs} from "react-native-responsive-dimensions"
import { AntDesign, Feather, Ionicons } from "react-native-vector-icons"
import { Colors } from "../Themes/Color"
import FlatlistItem from "../Components/FlatlistItem"
// import { } from "react-native-vector-icons/Icon"
const Checkout = () => {
    return (
        <View style={styles.parent}>
            <CheckoutHeader />
            <View style={styles.sub_header}>

                <SimpleLineIcons style={{ paddingRight: w(1) }} name="location-pin" size={18} color={"black"} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <Text>Delivery Address</Text>
                </View>

            </View>
            <View style={styles.outer_view}>
                <View style={styles.Address_View}>
                    <View style={{ position: 'absolute', right: 5 }}>
                        <TouchableOpacity>
                            <Feather style={{ paddingVertical: h(.4) }} name="edit" size={18} color={"grey"} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.Address_heading}>
                        Address:
                    </Text>
                    <Text style={styles.Address_text}>
                        216 St Paul's Rd, London N1 2LL, UK
                        Contact :  +44-784232
                    </Text>

                </View>
                <View style={styles.icon_view}>
                    <AntDesign name="pluscircleo" size={25} colour={"black"} />
                </View>
            </View>
            <Text style={{ paddingVertical: h(2),fontSize:fs(2) }}>
                Shopping List
            </Text>
            <View style={styles.Outer_View1}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ paddingVertical: h(1) }}>
                        <Image style={{ height: h(19), width: h(20) }} source={require('./../../assets/CheckoutScreen/CardPic.png')} />
                    </View>

                    <View style={{paddingLeft:w(2)}}>
                        <Text style={{ fontSize: 16,paddingVertical:h(1) }}>
                            Women's Casual  Wear
                        </Text>

                        <View>
                            <View style={styles.Variation_view}>
                                <Text>
                                    Variations :
                                </Text>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={styles.option1_view}>
                                    <Text style={styles.colour_name}>Black</Text>
                                </View>
                                <View style={styles.option2_view}>
                                    <Text style={styles.colour_name}>Red</Text>
                                </View>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',paddingBottom:h(1)}}>

                                <View style={{flex:.2}}>
                                    <Text>4.5</Text>
                                </View>
                                <View style={{ flexDirection: 'row',alignItems:'center',flex:1 }}>
                                    <TouchableOpacity>                                    
                                    <Ionicons name="star-outline"  color="black" paddingRight={1}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>                                    
                                    <Ionicons name="star-outline"  color="black" paddingHorizontal={1} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>                                    
                                    <Ionicons name="star-outline" color="black" paddingHorizontal={1}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>                                    
                                    <Ionicons name="star-outline" color="black" paddingHorizontal={1}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>                                    
                                    <Ionicons name="star-outline" color="black" paddingHorizontal={1}/>
                                    </TouchableOpacity>
                                   
                                 

                                </View>
                            </View>

                            <View style={styles.price_outer_box}>

                                <View style={styles.price_box}>
                                    <Text style={styles.price}>$ 34.00</Text>
                                </View>
                                <View>
                                    <Text style={styles.upper_title}>upto 30% off</Text>
                                    <Text style={styles.below_title}>$64.00</Text>
                                </View>
                            </View>
                        </View>








                    </View>

                </View>
                <View style={styles.price_View}>
                    <View>
                        <Text>Total Order (1) :</Text>
                    </View>
                    <View>
                        <Text style={styles.price_Style}>$ 34.00</Text>
                    </View>
                </View>
                <FlatlistItem/>
            </View>
        </View>
    )
}
export default Checkout
const styles = StyleSheet.create({
    parent: {
        // flex:1,
        ...Platform.select({
            android: {
                // marginTop: StatusBar.currentHeight
            },

        }),
        paddingHorizontal:w(3),
        backgroundColor:Colors.Screen_color,
    },
    sub_header: {
        flexDirection: 'row',
        paddingVertical: h(1)
    },
    outer_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal:w(1),
        // alignItems:'center',
        // borderWidth:1,
       

    },
    icon_view: {
        alignItems: 'center',
        justifyContent: 'center',
        // elevation: 1,
        paddingHorizontal: w(5),
        marginLeft: w(2),
        flex: .1,
        // borderWidth:1,
        elevation:1.3,

    },
    Address_View: {
        // borderWidth:1,
        elevation: 1,

        paddingVertical: h(1),
        // paddingHorizontal:w(1),
        // width:"30%"
        flex: .9,
        // marginHorizontal:w(2)

    },
    Address_text: {
        color: 'grey',
        paddingVertical: h(.5),
        fontSize: 12,
        paddingHorizontal: h(1)

    },
    Address_heading: {
        paddingHorizontal: w(1.8),
        // marginVertical:h(1),
    },
    price_box: {
        borderWidth: 1,
        borderRadius:5,
        borderColor: '#CACACA',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 3
    },
    price_outer_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    upper_title: {
        fontSize: 10,
        color: "#F83758",
    },
    below_title: {
        fontSize: 12,
        textDecorationLine: 'line-through',
        color:Colors.borderColor
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    price_View: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: StyleSheet.hairlineWidth,
        paddingVertical: h(1),
        borderColor: Colors.borderColor,
    },
    Outer_View1: {
        // borderWidth:1,
        // 
        paddingHorizontal: h(1),
        elevation:1.2,
        paddingVertical: h(1),

    },
    price_Style: {
        fontWeight: 'bold',
    },
    option1_view: {
        borderWidth:1,
    //   flex:.2,
        // alignItems:'center',
        marginRight:w(1.4),
        marginLeft:w(1.2),
      borderRadius:3,  
    },
    option2_view: {
        
        borderWidth:1,
        borderRadius:3,  
    },
    Variation_view: {
        flexDirection: 'row',
        paddingVertical:h(.7),
    },
    colour_name:{
        fontSize:fs(1.4),
        paddingHorizontal:w(1.5)
    }


})