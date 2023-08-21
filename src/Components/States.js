import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const States = () => {
    const [message,setmessage]=useState(" ")
  return (
    <View>
    <TextInput
    placeholder="your message"
    value={message}
    onChangeText={(text)=>setmessage(text)}
    onSubmitEditing={()=>alert(message)}
    />
    </View>
  )
}
export default States