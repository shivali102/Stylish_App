import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'
import contant from 'expo-constants'

const New = () => {
  return (
    <View style={styles.main}>
      <Text>new</Text>
    </View>
  )
}

export default New
const styles=StyleSheet.create({
main:{
marginTop:contant.statusBarHeight,
justifyContent:'center',
// alignItems:'center',
flexDirection:'row',
backgroundColor:'red',
}


})