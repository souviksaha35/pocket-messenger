import React, {useState} from 'react'
import {View, StyleSheet, Text} from 'react-native';
import {Colors, TextInput, Button, Modal} from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import {createUser} from '../graphql/mutations';
import {useNavigation} from '@react-navigation/native'
import { Auth } from 'aws-amplify';
import {getUser} from '../graphql/queries';


function LoginScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const signin = async () => {
    try {
      const userInfo = await Auth.signIn(username, password);
      console.log(userInfo);

      if (userInfo) {
        const userData = await API.graphql(graphqlOperation(getUser.anchor, {id: userInfo.attributes.sub}));

        console.log(userData);

        if (userData.data.getUser) {
          console.log("User is already registered in database");
          return;
        }

        const newUser = {
          id: userInfo.attributes.sub,
          activated: userInfo.attributes.email_verified,
          email: userInfo.attributes.email,
          username: userInfo.username,
        }

        console.log(newUser);

        const newuser = await API.graphql(
          graphqlOperation(
            createUser,
            { input: newuser }
          )
        )

        console.log(newUser);
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log('error signing in', error);
      alert(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '30%', alignItems: 'center', justifyContent: 'center' }}>
        <Entypo name="chat" size={120} color={Colors.amber300} />
      </View>
      <View style={{width: '100%', height: '40%', justifyContent: 'space-between'}}>
      <TextInput
      label="Username"
      placeholder="Example123"
      autoCompleteType="username"
      dense={true}
      mode='outlined'
      value={username}
      style={{margin: 20,}}
      onChange={(event) => setUsername(event.nativeEvent.text)}
      />

      <TextInput
      label="Password"
      placeholder="Password"
      dense={true}
      autoCompleteType="password"
      value={password}
      secureTextEntry={true}
      mode='outlined'
      style={{margin: 20,}}
      keyboardType="default"
      onChange={(event) => setPassword(event.nativeEvent.text)}
      />

      <Button mode="contained" style={{margin: 20, borderRadius: 10,}} onPress={signin}>
        Sign in 
      </Button>

      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  }
});