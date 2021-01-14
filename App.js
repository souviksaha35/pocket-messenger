import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider as PaperProvider} from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import ChatsScreen from "./screens/ChatsScreen";
import ChatRoomScreen from './screens/ChatRoomScreen';

const Stack = createStackNavigator();
export default function App() {
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
