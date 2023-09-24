import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import Signup from './src/screens/Signup';
import SignIn from './src/screens/SignIn';
import Onboarding1 from './src/screens/Onboarding1';
import Onboarding2 from './src/screens/Onboarding2';
import Onboarding3 from './src/screens/Onboarding3';
import New from './src/screens/New';
import Checkout from './src/screens/Checkout';
// import States from './src/Components/states';
// import Flatlist from './src/screens/Flatlist';
import Name,{Flatlist} from './src/screens/Flatlist'
import Props from './src/Components/Props'
export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
    
      {/* <Flatlist/> */}
      {/* <Name/> */}
      <Checkout/>
    
    </View>
  );
}
