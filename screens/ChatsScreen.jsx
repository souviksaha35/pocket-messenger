import React, {useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity, TouchableNativeFeedback,ScrollView, FlatList} from 'react-native';
import {Appbar, Colors, Avatar} from 'react-native-paper';
import ChatRooms from '../data/ChatRooms';
import ChatComponent from '../components/ChatComponent';
import {useNavigation, DrawerActions} from "@react-navigation/native"
import {Button} from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';


function ChatsScreen() {

  const [rippleOverflow, setRippleOverflow] = useState(false);

  const navigation = useNavigation();

  const onPress = () => {

  }
  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: Colors.red800}} statusBarHeight={20}>
        <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>
        <Appbar.Content title="Pocket-Messanger"/>
        <Appbar.Action icon="magnify" onPress={() => navigation.navigate('Search')}/>
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
        data={ChatRooms}
        renderItem={({ item }) => <ChatComponent User={item}/>}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        />

        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('NewMessage')}>
          <View style={{height: 60, width: 60, backgroundColor: Colors.red800, alignSelf:'flex-end', margin: 20, borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
            <MaterialIcons name="mode-edit" size={24} color="white" />
          </View>
        </TouchableOpacity>


        {/* <Button onPress={() => navigation.navigate('NewMessage')}>
          Press Me
        </Button> */}
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
