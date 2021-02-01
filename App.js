import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
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
import VerifyUserScreen from './screens/VerifyUserScreen';
import {Auth} from 'aws-amplify';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuNohHFtO57B3TVfGug6VDFA4nfLHUnNM",
  authDomain: "pocket-messenger-ac96f.firebaseapp.com",
  projectId: "pocket-messenger-ac96f",
  storageBucket: "pocket-messenger-ac96f.appspot.com",
  messagingSenderId: "950808111690",
  appId: "1:950808111690:web:c7b1f9ebbdf3b7d6b8d4b3",
  measurementId: "G-NWSZHB4FVS"
};


export default function App() {
  useEffect(() => {
    const amplify = Amplify.configure(awsmobile);

    const authCheck = async () => {
      const currentuser = await Auth.currentAuthenticatedUser({ bypassCache: true });
      console.log(currentuser);
      setUser(currentuser.attributes);
      console.log('user', user);
    }

    authCheck();
    
    // const firebaseApp = firebase.initializeApp(firebaseConfig);
    
    // console.log(firebaseApp);

    // For Firebase JS SDK v7.20.0 and later, measurementId is optiona
  }, []);

  const [user, setUser] = useState('');


    return (
      <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {user.sub !== null ? (
              <>
              <Stack.Screen component={DrawerNavigator} name="Home" options={{headerShown: false}}/>
              <Stack.Screen component={ChatRoomScreen} name="ChatRoom" options={{headerShown: false}}/>
              <Stack.Screen component={MediaUploadScreen} name="MediaUpload" options={{headerShown: false}}/>
              <Stack.Screen component={FriendsProfileScreen} name="FriendsProfile" options={{headerShown: false}}/>
              <Stack.Screen component={NewMessageScreen} name="NewMessage" options={{headerShown: false}}/>
              <Stack.Screen component={SearchScreen} name="Search" options={{headerShown: false}}/>
              </>
            ): (
              <>
              <Stack.Screen component={LoginScreen} name="Login" options={{headerShown: false}}/>
              <Stack.Screen component={SignUpScreen} name="SignUp" options={{headerShown: false}}/>
              <Stack.Screen component={VerifyUserScreen} name="VerifySignup" options={{headerShown: false}}/>
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
      <StatusBar/>
    </SafeAreaProvider>
  )
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
