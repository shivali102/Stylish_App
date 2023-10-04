import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { responsiveFontSize as fs,responsiveHeight as h,responsiveScreenWidth as w } from 'react-native-responsive-dimensions'
const Heading = (props) => {
  return (

           <View style={styles.heading}>
                <Text style={styles.headingText}>{props.heading1}</Text>
                <Text style={styles.headingText}>{props.heading2}</Text>
            </View>

  )
}

export default Heading
const styles=StyleSheet.create({
     
    heading: {
      
        paddingTop:h(1),
        paddingBottom:h(3.2),
        // backgroundColor:'red'
    },
    headingText:{
        fontSize:fs(5)
    }

})