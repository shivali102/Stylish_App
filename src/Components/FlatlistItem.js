import React from "react";
// import {View,Text,StyleSheet,Platform, StatusBar} from "react-native"
import { SimpleLineIcons } from 'react-native-vector-icons'
import { responsiveHeight as h, responsiveWidth as w ,responsiveFontSize as fs} from "react-native-responsive-dimensions"
import { AntDesign, Feather, Ionicons } from "react-native-vector-icons"
import { Colors } from "../Themes/Color"
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, Image,FlatList } from "react-native"
const user=[
    {
        id:'1',
        heading:'android',
        color1:'black',

        color2:'red',
        ratings:4.5,
        OriginalPrice:'2.3',
        discountedPercentage:'10%',
        discountedPrice:'34',
        TotalPrice:'23.2',
        discountedPrice:'34.76'

    },
    {
        id:'2',
        heading:'android',
        color1:'black',

        color2:'red',
        ratings:4.5,
        OriginalPrice:'2.3',
        discountedPercentage:'10%',
        discountedPrice:'34',
        TotalPrice:'23.2',
        discountedPrice:'34.76'

    },
    {
        id:'3',
        heading:'android',
        color1:'black',

        color2:'red',
        ratings:4.5,
        OriginalPrice:'2.3',
        discountedPercentage:'10%',
        discountedPrice:'34',
        TotalPrice:'23.2',
        discountedPrice:'34.76'

    },
    {
        id:'4',
        heading:'android',
        color1:'black',

        color2:'red',
        ratings:4.5,
        OriginalPrice:'2.3',
        discountedPercentage:'10%',
        discountedPrice:'34',
        TotalPrice:'23.2',
        discountedPrice:'34.76'

    }, {
        id:'5',
        heading:'android',
        color1:'black',

        color2:'red',
        ratings:4.5,
        OriginalPrice:'2.3',
        discountedPercentage:'10%',
        discountedPrice:'34',
        TotalPrice:'23.2',
        discountedPrice:'34.76'

    }
]
const Item=({heading,color1,color2,ratings,OriginalPrice,discountedPercentage,discountedPrice,TotalPrice})=>{


    return(
        <View style={styles.parent}>
           <StatusBar/>
      <View style={styles.Outer_View1}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ paddingVertical: h(1) }}>
                        <Image style={{ height: h(19), width: h(20) }} source={require('./../Images/CheckoutScreen/CardPic.png')} />
                    </View>

                    <View style={{paddingLeft:w(2)}}>
                        <Text style={{ fontSize: 16,paddingVertical:h(1) }}>
                         {heading}
                        </Text>

                        <View>
                            <View style={styles.Variation_view}>
                                <Text>
                                    Variations :
                                </Text>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={styles.option1_view}>
                                    <Text style={styles.colour_name}>{color1}</Text>
                                </View>
                                <View style={styles.option2_view}>
                                    <Text style={styles.colour_name}>{color2}</Text>
                                </View>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',paddingBottom:h(1)}}>

                                <View style={{flex:.2}}>
                                    <Text>{ratings}</Text>
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
                                    <Text style={styles.price}>{OriginalPrice}</Text>
                                </View>
                                <View>
                                    <Text style={styles.upper_title}>upto {discountedPercentage} off</Text>
                                    <Text style={styles.below_title}>{discountedPrice}</Text>
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
                        <Text style={styles.price_Style}>{TotalPrice}</Text>
                    </View>


                </View>
            </View>
        </View>
      )
}

const FlatlistItem=()=>{
            const renderItem = ({item})=>(
                    <Item name={item.name}
                    heading={item.heading}
                    color1={item.color1}
                    color2={item.color2}
                    ratings={item.ratings}
                    OriginalPrice={item.OriginalPrice}
                    discountedPercentage={item.discountedPercentage}
                    discountedPrice={item.discountedPrice}
                    TotalPrice={item.TotalPrice}
       />
                    );
                    return(
                    <View style={styles.container}>
                    <FlatList
                    data={user}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}/>
                      </View>
                       )
                    

                    }                        
          

const styles=StyleSheet.create({
parent:{
    ...Platform.select({
        android:{
            marginTop:StatusBar.currentHeight
        }
    }),
    
    paddingHorizontal:w(2),
    backgroundColor:'#F5F5F5',

},
Outer_View1: {
    // borderWidth:1,
    // 
    paddingHorizontal: h(1),
    elevation:1.2,
    paddingVertical: h(1),
    backgroundColor:'#FFFFFF',
    

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
})



// import React from "react";
// import {View,Text, FlatList,StyleSheet} from "react-native"


// const FlatlistItem=()=>{
//     const user=[{
//         id:'1',
//         name:'web developer'
//     },
//     {
//         id:'2',
//         name:'android Developer'
//     },
//     {
//         id:'3',
//         name:'android Developer'
//     },
//     {
//         id:'4',
//         name:'android Developer'
//     }
    
//     ]
// //     const renderItem = ({item})=>(
// //         <Item name={item.name}/>
// //         // console.log(item)
// //         );
// //     return(
// //         <View style={styles.container}>
// //         <FlatList
// //         data={user}
// //         renderItem={renderItem}
// //         keyExtractor={item=>item.id}/>
// //    </View>
// //     )
// // }
// const Item=({name})=>{
//     return(
//     <View style={{backgroundColor:'red'}}>
//         <Text>{name}</Text>
//     </View>
// )}
// const styles=StyleSheet.create({
//     container:{
//         marginTop:10,
//         padding:2,

//     }
// })
export default FlatlistItem
