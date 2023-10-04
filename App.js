import React from 'react';
import {View} from "react-native"
import ShippingScreen from './src/screens/ShippingScreen';
import Signup from "./src/screens/Signup"
import Signin from './src/screens/SignIn'
import Profile from './src/screens/Profile';
import SignIn from './src/screens/SignIn';
import Forgettenpassword from './src/screens/Forgettenpassword';
import Fruit from './src/Components/Flatlist2';
export default function App() {
  return (
    <View>
   
    
    {/* <ShippingScreen/>      */}
      {/* <Signup/> */}
      {/* <SignIn/> */}
      {/* <Profile/> */}
    {/* <Forgettenpassword/> */}
    <Fruit/>
    </View>
  );
}
