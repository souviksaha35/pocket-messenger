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
import Amplify from 'aws-amplify'
import awsmobile from './aws-exports'


const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyBYDGdju7crAOkw3mi08raQoYW0Qwq3kOE",
  authDomain: "pocket-messanger.firebaseapp.com",
  projectId: "pocket-messanger",
  storageBucket: "pocket-messanger.appspot.com",
  messagingSenderId: "477621554688",
  appId: "1:477621554688:web:1bea55a5128455d7c652e5",
  measurementId: "G-FVK0VMJDEE"
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
          <Stack.Navigator>
            <Stack.Screen component={ChatsScreen} name="ChatScreen" options={{headerShown: false}}/>
            <Stack.Screen component={ChatRoomScreen} name="ChatRoom" options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
      <StatusBar/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
