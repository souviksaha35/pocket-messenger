import React, {useState} from 'react'
import { View, StyleSheet, TouchableNativeFeedback, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import {Input} from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabOneScreens from './TabOneScreens';
import {Colors} from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

function SearchScreen() {
  const [rippleOverflow, setRippleOverflow] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <TouchableNativeFeedback onPress={() => navigation.goBack()} useForeground={true} background={TouchableNativeFeedback.Ripple('grey', rippleOverflow)}>
          <MaterialIcons name="arrow-back" style={{marginLeft: 15,}} size={24} color="grey" />
        </TouchableNativeFeedback>

        <Input
        containerStyle={{marginLeft: 15, marginTop: 20,}}
        inputContainerStyle={{borderBottomColor: 'white', borderBottomWidth: 1,}}
        placeholder="Search"/>
      </View>

     <Tab.Navigator lazy={true} tabBarOptions={{indicatorStyle:{height: 5, borderRadius: 5, backgroundColor: Colors.red800,}, labelStyle:{fontWeight: 'bold'}, activeTintColor: Colors.red800, inactiveTintColor: Colors.grey600, scrollEnabled:true, pressColor: Colors.grey300,}}>
      <Tab.Screen name="Chats" component={TabOneScreens} />
      <Tab.Screen name="Media" component={TabOneScreens} />
      <Tab.Screen name="Links" component={TabOneScreens} />
      <Tab.Screen name="Files" component={TabOneScreens} />
      <Tab.Screen name="Music" component={TabOneScreens} />
      <Tab.Screen name="Voice" component={TabOneScreens} />
     </Tab.Navigator>
    </View>
  )
}

export default SearchScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  upperContainer: {
    width: '100%',
    height: '10%',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  }
})