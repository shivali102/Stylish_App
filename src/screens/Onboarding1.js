import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { responsiveFontSize as fs, responsiveHeight as h, responsiveScreenWidth as w } from 'react-native-responsive-dimensions'
import { StatusBar } from 'expo-status-bar'
const Onboarding1 = () => {
  return (
    <View>
      <StatusBar />
    <View style={styles.parent}>
      
      <Header/>
      <View style={styles.outer_View_Image}>
      <Image style={styles.image}source={require('../Images/OnboardingScreens/SplashScreen1.png')}/>
      </View>
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.heading}>Choose Product</Text>
      </View>
      <View style={styles.para}>
        <Text>Amet minim mollit non deserunt ullamco est </Text>
        <Text>sit aliqua dolor do amet sint. Velit officia</Text> 
          <Text>consequat duis enim velit mollit.</Text>
      </View>
    </View>
    </View>
  )
}

export default Onboarding1
const styles = StyleSheet.create({
  parent: {
    marginHorizontal: w(4)
    
  },
  para: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:h(1)
  },
  outer_View_Image:{
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'black',
    paddingTop:h(15)
  },
  heading:{

fontSize:fs(3),
  },
  image:{
    height:h(45),
    width:h(45)
  }
})