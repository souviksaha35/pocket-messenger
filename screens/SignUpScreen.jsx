import React, {useState} from 'react'
import {View, StyleSheet, Text, KeyboardAvoidingView} from 'react-native';
import {Colors, TextInput, Button, Modal} from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import {createUser} from '../graphql/mutations';
import {useNavigation} from '@react-navigation/native'
import * as firebase from 'firebase';
import { Auth } from 'aws-amplify';


function SignUpScreen() {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [buttondisable, setButtonDisable] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [username, setUsername] = useState('');


  const signup = async () => {
    setButtonDisable(true);
    setInputDisabled(true);

    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
            email,          // optional  // optional - E.164 number convention
            // other custom attributes 
        }
      });
      console.log(user);
      setButtonDisable(false);
      setInputDisabled(false);
      navigation.navigate('VerifySignup', {username: username})
    } catch (e) {
      setButtonDisable(false);
      setInputDisabled(false);
      console.log(e);
      alert(e);
    }
  }

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={{ width: '100%', height: '30%', alignItems: 'center', justifyContent: 'center' }}>
        <Entypo name="chat" size={120} color={Colors.amber300} />
      </View>
      <View style={{width: '100%', height: '40%', justifyContent: 'space-between'}}>
      <TextInput
      label="Username"
      placeholder="Username"
      dense={true}
      autoCompleteType="username"
      value={username}
      mode='outlined'
      style={{margin: 20,}}
      keyboardType="default"
      disabled={inputDisabled}
      onChange={(event) => setUsername(event.nativeEvent.text)}
      />
      <TextInput
      label="Email"
      placeholder="Example@Example.com"
      autoCompleteType="email"
      dense={true}
      mode='outlined'
      value={email}
      style={{margin: 20,}}
      keyboardType="email-address"
      disabled={inputDisabled}
      onChange={(event) => setEmail(event.nativeEvent.text)}
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
      disabled={inputDisabled}
      onChange={(event) => setPassword(event.nativeEvent.text)}
      />

      <Button mode="contained" disabled={buttondisable} style={{margin: 20, borderRadius: 10,}} onPress={signup}>
        Sign Up
      </Button>

      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  }
});