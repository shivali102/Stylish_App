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
import PlaceOrder from './src/screens/PlaceOrder';
import FlatlistItem from './src/Components/FlatlistItem';
import list from './src/Components/FlatlistPractice';
import List from './src/Components/FlatlistPractice';
import Shipping from './src/screens/Shipping';

export default function App() {
  return (
    <View>
   
    
      {/* <Flatlist/> */}
      {/* <Name/> */}
      {/* <Checkout/> */}
      {/* <PlaceOrder/> */}
      {/* <Item/> */}
      {/* <App/> */}
      {/* <FlatlistItem/> */}
      {/* <List/> */}
      <Shipping/>
    
    </View>
  );
}
