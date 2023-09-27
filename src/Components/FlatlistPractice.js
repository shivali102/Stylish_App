import React from "react";
import {View,Text,StyleSheet,FlatList} from "react-native"
const DATA=[
    {
        id:'1',
        name:'shivi',
        position:'android developer'
    },
    {
        id:"2",
        name:'ashish',
        position:'web developer'
    },
    {
        id:'3',
        name:'lata',
        position:'data scientist'
    }
]
const ListItem=({name,position})=>{
    return(
        <View style={styles.parent}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.position}>{position}</Text>
        </View>
    )
}
const List=()=>{
 const renderItem=({item})=>(
    <ListItem 
    name={item.name}
    position={item.position}
    />
 )
    return(
<View>
    <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item=>item.id}/>
</View>
    )
}
const styles=StyleSheet.create({
    parent:{
        backgroundColor:'yellow',
        padding:10,

    },
    name:{
     fontSize:14
    },
    position:{
    fontSize:14
    }
})
export default List