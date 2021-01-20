import React, {useState, useEffect} from 'react'
import { View, StyleSheet,Text, ImageBackground,FlatList, ScrollView, TextInput, TouchableNativeFeedback, Platform, KeyboardAvoidingView } from 'react-native'
import {Appbar, Colors, Menu, Avatar} from 'react-native-paper';
import {useNavigation} from "@react-navigation/native";
import { Feather, FontAwesome5, Entypo } from '@expo/vector-icons';
import {useRoute} from "@react-navigation/native";
import {Input} from "react-native-elements"
import * as ImagePicker from 'expo-image-picker';
import Chats from '../data/Chats';
import ChatMessage from '../components/ChatMessage';

function ChatRoomScreen() {

  const route = useRoute();
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();
  const [User, setUser] = useState([]);

  useEffect(() => {
    const {user} = route.params;
    console.log(user);
    setUser(user);
    console.log(User);
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [8, 8],
      quality: 1,
    });

    if (result) {
      navigation.navigate('MediaUpload', {media: result});
    } else {
      return;
    }

    console.log(result);

    
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "padding"}
      style={styles.container}
    >
      <Appbar.Header style={{backgroundColor: Colors.red800, justifyContent: "space-between"}} statusBarHeight={20}>
        <Appbar.BackAction onPress={() => navigation.goBack()}/>
        <Avatar.Image source={{ uri: User.imageUri}} size={35}/>
        <Appbar.Content onPress={() => navigation.navigate('FriendsProfile', {user: User})} title={User.name}/>
        
        
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={<Appbar.Action icon="dots-vertical" color={'white'} onPress={() => setMenuVisible(true)}/>}>
          
          <Menu.Item onPress={() => {}} title="Search" />
          <Menu.Item onPress={() => {}} title="Share My Contact" />
          
          <Menu.Item onPress={() => {}} title="Clear history" />
          <Menu.Item onPress={() => {}} title="Mute notifications" />
          <Menu.Item onPress={() => {}} title="Delete chat" />
        </Menu>
      </Appbar.Header>

      <ImageBackground source={require('../assets/Background.jpeg')} style={{ width: '100%', height: '100%',}}>
        <View style={styles.messageContainer}>
          {/* <FlatList
          data={Chats}
          renderItem={({ item }) => <ChatMessage Messages={item}/>}
          keyExtractor={(item) => item.id}
          inverted
          /> */}

<View style={{padding: 10,}}>
      <View style={{backgroundColor: Colors.red400, padding: 10, marginRight: 50, borderRadius: 20,}}>
        <Text style={{color: 'white', fontSize: 20,}}>
          Hi
        </Text>
      </View>
    </View>
        </View>
          <View style={styles.inputContainer}>
            <View style={styles.mainContainer}>
              <TouchableNativeFeedback onPress={() => navigation.navigate('MediaUpload')}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
              </TouchableNativeFeedback>
              <TextInput 
                placeholder={"Type a message"}
                style={styles.textInput}
                
                multiline
                />
                <TouchableNativeFeedback onPress={pickImage} useForeground={true}>
                  <Entypo name="attachment" size={24} color="grey" style={styles.icons} />
                </TouchableNativeFeedback>
            </View>
          </View>
        
        
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default ChatRoomScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  messageContainer: {
    width: '100%',
    height: '82%',
  },

  inputContainer: {
    flexDirection: 'row',
    margin: 10,
    
    alignItems: 'center',
  },

  textInput: {
    flex: 1,
    marginHorizontal: 10,
},

icons: {
    marginHorizontal: 5,
},

mainContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginTop: -10,
    
    borderRadius: 50,
    flex: 1,
    marginRight: 20,
    alignItems: 'center',
},
})