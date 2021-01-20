import React, {useState} from 'react'
import {TouchableNativeFeedback, View,ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, Colors} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
function ChatComponent({ User }) {

  const navigation = useNavigation();

  const [rippleOverflow, setRippleOverflow] = useState(false);
  if (User) {
    return (
      <ScrollView>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ChatRoom', {user: User.users[1]})}>
      
      <View style={styles.chatContainer}>
        <Avatar.Image style={{margin: 15,}} size={50} source={{uri: User.users[1].imageUri}}/>

        <View style={{ height: '100%', width: '60%',}}>
          <Text style={{ margin: 20, fontSize: 16, fontWeight: 'bold' }}>
            {User.users[1].name}
          </Text>
        </View>

        <View style={{ height: '100%', width: '25%', alignItems: 'center', }}>
          <Text style={{ margin: 15, color: 'grey'}}>
            20:01
          </Text>
          <View style={{ backgroundColor: Colors.red800, width: 25, height: 25, borderRadius: 20, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', color: 'white' }}>
                {User.unread}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
      </ScrollView>
    )
  } else {
    return null;
  }
}

export default ChatComponent;

const styles = StyleSheet.create({
  chatContainer: {
    width: '100%',
    height: '10%',
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    flexDirection: 'row',

  }
})
