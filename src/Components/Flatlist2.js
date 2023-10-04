import React from "react";
import {View,Text,Image, FlatList,StyleSheet} from 'react-native'
import { responsiveHeight as h,responsiveScreenWidth as w } from "react-native-responsive-dimensions";
    const user=[{
        id:1,
    img:require("../Images/Flatlist/Apple.jpg"),
    name:'Apple',
    Category:'fruits',
    price:10,
    weight:'1kg',

    },
{   id:2,
    img:require("../Images/Flatlist/Grapes.jpg"),
    name:'Grapes',
    Category:'fruits',
    price:20,
    weight:'500g',

},
{   id:3,
    img:require("../Images/Flatlist/litchi.jpg"),
    name:'Apple',
    Category:'fruits',
    price:12,
    weight:'250g',
    colors:'yellow'

},
{   id:4,
    img:require("../Images/Flatlist/Banana.jpg"),
    name:'Banana',
    Category:'fruits',
    price:8,
    weight:'100g',

}]
const Flatlist2=(props)=>{
    return(
<View style={Styles.parent}>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image style={{height:20,width:20}}source={props.img}/>

    </View>
    <View style={{flex:8}}>
        <Text>{props.name}</Text>
        <Text>{props.Category}</Text>
    </View>
    <View style={{flex:1}}>
        <Text>{props.price}</Text>
        <Text style={{fontSize:10}}>{'\u0024'}{props.weight}</Text>
    </View>
</View>
    )
}
const Fruit=()=>{
    const renderData=({item})=>(
        <Flatlist2
        img={item.img}
        name={item.name}
        Category={item.Category}
        price={item.price}
        weight={item.weight}
        colors={item.colors}/>
    )
    return(
     <FlatList
     data={user}
     renderItem={renderData}
     keyExtractor={item=>item.id}
     />
    )

}

const Styles=StyleSheet.create({
parent:{
    borderWidth:.7,
    marginVertical:h(2),
    paddingHorizontal:w(1),
    paddingVertical:h(1),
    flexDirection:'row',
    marginHorizontal:w(1),
    backgroundColor:'red'
    
}
})
export default Fruit