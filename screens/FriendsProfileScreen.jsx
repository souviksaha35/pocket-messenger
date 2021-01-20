import React, {useState, useEffect} from 'react'
import { View, Switch, StyleSheet,Text, ImageBackground, TouchableNativeFeedback, ScrollView } from 'react-native';
import {useRoute} from "@react-navigation/native";
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import {Appbar, Colors, Menu, Avatar} from 'react-native-paper';
import {useNavigation} from "@react-navigation/native";
import {Divider} from "react-native-elements";

function FriendsProfileScreen() {
  const [User, setUser] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  const [rippleOverflow, setRippleOverflow] = useState(false);

  const route = useRoute();

  const navigation = useNavigation();

  useEffect(() => {
    const {user} = route.params;
    setUser(user);
    console.log(User);
  }, []);
  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: Colors.red800, justifyContent: "space-between"}} statusBarHeight={20}>
        <Appbar.BackAction onPress={() => navigation.goBack()}/>
        
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={<Appbar.Action icon="dots-vertical" color={'white'} onPress={() => setMenuVisible(true)}/>}>
          
          <Menu.Item onPress={() => {}} title="Share" />
          <Menu.Item onPress={() => {}} title="Edit" />
          
          <Menu.Item onPress={() => {}} title="View in address book" />
          <Menu.Item onPress={() => {}} title="Verify security code" />
          
        </Menu>
      </Appbar.Header>

      
        <ImageBackground source={{uri :User.imageUri}} style={{width: '100%', height: '60%',}}>
          <View style={{ marginTop: 200, width: '100%', height: '20%'}}>
            <Text style={{color: 'white', margin: 10, fontSize: 25, fontWeight: 'bold',}}>
              {User.name}
            </Text>
          
          </View>
        </ImageBackground>

        
        <View style={{width: '100%', height: '22%', backgroundColor: 'white', marginTop: -160,}}>
          <TouchableNativeFeedback useForeground={true} background={TouchableNativeFeedback.Ripple('#b8b8b8', rippleOverflow)}>
            <View style={{width: '100%', height: '34%', justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={{alignSelf: 'center', marginLeft: 10, fontSize: 17}}>
                Mute notifications
              </Text>

              <Switch
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}/>
            </View>
          </TouchableNativeFeedback>

         <Divider style={{ backgroundColor: 'lightgrey', marginLeft: 10,}} />

         <TouchableNativeFeedback useForeground={true} background={TouchableNativeFeedback.Ripple('#b8b8b8', rippleOverflow)}>
            <View style={{width: '100%', height: '34%', justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={{alignSelf: 'center', marginLeft: 10, fontSize: 17}}>
                Custom notifications
              </Text>
            </View>
          </TouchableNativeFeedback>

         <Divider style={{ backgroundColor: 'lightgrey', marginLeft: 10,}} />

         <TouchableNativeFeedback useForeground={true} background={TouchableNativeFeedback.Ripple('#b8b8b8', rippleOverflow)}>
            <View style={{width: '100%', height: '34%', justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={{alignSelf: 'center', marginLeft: 10, fontSize: 17}}>
                Media visibility
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>

        

        
    </View>
  )
}

export default FriendsProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d4d4',
  }, 
  contentContainer: {
    paddingVertical: 20
  }
})