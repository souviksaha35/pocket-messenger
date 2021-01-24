import React from 'react'
import { View, Text, StyleSheet, Linking, Image, TouchableNativeFeedback } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';
import {Colors} from 'react-native-paper';
import { MaterialIcons, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

function DrawerContent(props) {
  return (
    <View style={styles.container}>
      
        <View style={styles.upperContainer} {...props}>
          <View style={{height: '100%', width: '50%',}}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}} style={{width: 60, height: 60, borderRadius: 50, marginTop: 60, marginLeft: 20,}}/>

            <Text style={{color: 'white', marginLeft: 20, marginTop: 30, fontWeight: 'bold', fontSize: 15,}}>
              Souvik saha
            </Text>
            <Text style={{color: 'lightgrey', marginLeft: 20, fontSize: 15,}}>
              +91 9123904855
            </Text>
          </View>

          <View style={{height: '100%', width: '50%',}}>
            
          </View>
        </View>

        <View style={styles.lowerContainer}>
          <TouchableNativeFeedback>
            <View style={{marginTop: 10, height: '10%', width: '100%', flexDirection: 'row', alignItems: 'center',}}>
            <MaterialIcons name="people-outline" style={{marginLeft: 20, marginRight: 20,}} size={30} color="grey" />
              <Text style={{fontWeight: 'bold', fontSize: 15,}}>
                New Group
              </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <View style={{marginTop: 5, height: '10%', width: '100%', flexDirection: 'row', alignItems: 'center',}}>
            <MaterialIcons name="lock-outline" style={{marginLeft: 20, marginRight: 20,}} size={25} color="grey" />
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                New Secret Chat
              </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <View style={{marginTop: 5, height: '10%', width: '100%', flexDirection: 'row', alignItems: 'center',}}>
            <MaterialIcons name="announcement" style={{marginLeft: 20, marginRight: 20,}} size={24} color="grey" />
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                New Channel
              </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <View style={{marginTop: 5, height: '10%', width: '100%', flexDirection: 'row', alignItems: 'center',}}>
              <MaterialIcons name="person-outline" style={{marginLeft: 20, marginRight: 20,}} size={24} color="grey" />
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Contacts
              </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <View style={{marginTop: 5, height: '10%', width: '100%', flexDirection: 'row', alignItems: 'center',}}>
              <MaterialIcons name="phone" style={{marginLeft: 20, marginRight: 20,}} size={24} color="grey" />
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Calls
              </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <View style={{marginTop: 5, height: '10%', width: '100%', flexDirection: 'row', alignItems: 'center',}}>
              <MaterialIcons name="announcement" style={{marginLeft: 20, marginRight: 20,}} size={24} color="grey" />
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Saved Messages
              </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <View style={{marginTop: 5, height: '10%', width: '100%', flexDirection: 'row', alignItems: 'center',}}>
              <Feather name="settings" style={{marginLeft: 20, marginRight: 20,}} size={24} color="grey" />
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
                Settings
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  upperContainer: {
    width: '100%',
    height: '28%',
    backgroundColor: Colors.red800,
    flexDirection: 'row',
  },

  lowerContainer: {
    width: '100%',
    height: '72%',
  }
})