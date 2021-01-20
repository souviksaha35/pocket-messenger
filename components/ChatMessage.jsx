import React, {useEffect, useState} from 'react'
import {View, Text} from 'react-native';
import {Colors} from 'react-native-paper';


function ChatMessage({ Messages }) {
  return (
    <View style={{padding: 10,}}>
      <View style={{backgroundColor: Colors.red400, padding: 10, marginRight: 50, borderRadius: 20,}}>
        <Text style={{color: 'white', fontSize: 20,}}>
          {Messages.messages.content}
        </Text>
      </View>
    </View>
  )
}

export default ChatMessage
