import React, {useEffect} from 'react'
import { View, StyleSheet, TouchableNativeFeedback, Text, FlatList } from 'react-native'
import { Appbar, Colors } from 'react-native-paper';
import {useNavigation} from "@react-navigation/native";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import ChatComponent from '../components/ChatComponent';
import ChatRooms from '../data/ChatRooms';
import NewMessage from '../components/NewMessage';
import * as Contacts from 'expo-contacts';

function NewMessageScreen() {

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();

        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
        }
      }
    })();
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: Colors.red800}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="New Message" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>

      <TouchableNativeFeedback>
        <View style={{width: '100%', height: '7%', flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcons name="group-add" style={{margin: 20,}} size={30} color="grey" />
          <Text style={{fontSize: 16, fontWeight: 'normal'}}>
            New Group
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={{width: '100%', height: '7%', flexDirection: 'row', alignItems: 'center'}}>
        <MaterialIcons name="lock-outline" style={{marginLeft: 20, marginRight: 20,}} size={30} color="grey" />
          <Text style={{fontSize: 16, fontWeight: 'normal'}}>
            New Secret Chat
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={{width: '100%', height: '7%', flexDirection: 'row', alignItems: 'center'}}>
        <AntDesign name="notification" style={{marginLeft: 20, marginRight: 20,}} size={30} color="grey" />
          <Text style={{fontSize: 16, fontWeight: 'normal'}}>
            New Secret Chat
          </Text>
        </View>
      </TouchableNativeFeedback>
      <View style={{width: '100%', height: '5%', backgroundColor: '#e6e6e6', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', color: 'grey', marginLeft: 15,}}>
          Sorted by last seen time
        </Text>
      </View>

      <FlatList
        data={ChatRooms}
        renderItem={({ item }) => <NewMessage User={item}/>}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default NewMessageScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})