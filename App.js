import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider as PaperProvider} from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import ChatsScreen from "./screens/ChatsScreen";
import ChatRoomScreen from './screens/ChatRoomScreen';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import * as firebase from 'firebase';
import DrawerContent from "./components/DrawerContent"
import MediaUploadScreen from './screens/MediaUploadScreen';
import {createDrawerNavigator} from "@react-navigation/drawer";
import FriendsProfileScreen from './screens/FriendsProfileScreen';
import SearchScreen from './screens/SearchScreen';
import NewMessageScreen from './screens/NewMessageScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM2CvEr4FAlrZuPvWAxtbCXeZVUZjROrE",
  authDomain: "pocket-messenger-32744.firebaseapp.com",
  projectId: "pocket-messenger-32744",
  storageBucket: "pocket-messenger-32744.appspot.com",
  messagingSenderId: "842690037881",
  appId: "1:842690037881:web:3d73d7c4ddfd3e70a3aca8",
  measurementId: "G-J1J0DPV3D4"
};


export default function App() {
  useEffect(() => {
    const amplify = Amplify.configure(awsmobile);

    // For Firebase JS SDK v7.20.0 and later, measurementId is optiona
  }, []);
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen component={ChatRoomScreen} name="ChatRoom" options={{headerShown: false}}/>
            <Stack.Screen component={MediaUploadScreen} name="MediaUpload" options={{headerShown: false}}/>
            <Stack.Screen component={FriendsProfileScreen} name="FriendsProfile" options={{headerShown: false}}/>
            <Stack.Screen component={NewMessageScreen} name="NewMessage" options={{headerShown: false}}/>
            <Stack.Screen component={SignUpScreen} name="SignUp" options={{headerShown: false}}/>
            <Stack.Screen component={LoginScreen} name="Login" options={{headerShown: false}}/>
            <Stack.Screen component={DrawerNavigator} name="Home" options={{headerShown: false}}/>
            <Stack.Screen component={SearchScreen} name="Search" options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
      <StatusBar/>
    </SafeAreaProvider>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerStyle={{ width: '85%' }} drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={ChatsScreen}/>
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
