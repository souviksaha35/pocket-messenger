import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback,ScrollView, FlatList} from 'react-native';
import {Appbar, Colors, Avatar} from 'react-native-paper';
import User from '../data/User';
import ChatComponent from '../components/ChatComponent';


function ChatsScreen() {

  const [rippleOverflow, setRippleOverflow] = useState(false);

  const onPress = () => {

  }
  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: Colors.red800}} statusBarHeight={20}>
        <Appbar.Action icon="menu" onPress={() => {}}/>
        <Appbar.Content title="Pocket-Messanger"/>
        <Appbar.Action icon="magnify" onPress={() => {}}/>
      </Appbar.Header>
      {/* <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#d6d6d6', rippleOverflow)}>
        <View style={styles.chatContainer}>
          <Avatar.Image style={{margin: 10,}} size={50} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}}/>

          <View style={{ height: '100%', width: '60%',}}>
            <Text style={{ margin: 20, fontSize: 16, fontWeight: 'bold' }}>
              Souvik Saha
            </Text>
          </View>

          <View style={{ height: '100%', width: '25%', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Text style={{ margin: 15, color: 'grey'}}>
              20:01
            </Text>
            <View style={{ backgroundColor: Colors.red800, width: 25, height: 25, borderRadius: 20, justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center', color: 'white' }}>
                5
              </Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback> */}
        <FlatList
        data={User}
        renderItem={({ item }) => <ChatComponent User={item}/>}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    width: '100%',
    height: '10%',
    borderColor: '#d6d6d6',
    borderBottomWidth: 1,
    flexDirection: 'row',
  }
})
