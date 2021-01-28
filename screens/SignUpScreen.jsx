import React, {useState} from 'react'
import {View, StyleSheet, Text} from 'react-native';
import {Colors, TextInput, Button, Modal} from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import {createUser} from '../graphql/mutations';
import {useNavigation} from '@react-navigation/native'

function SignUpScreen() {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const signup = async () => {
    try {
      const newUser = await API.graphql(graphqlOperation(
        createUser, {
          input: {
            name: name,
            email: email,
            password: password,
            phone: phone,
            activated: false,
          }
        }
      ))

      console.log(newUser);
      alert('Account Registration Complete');
      navigation.navigate('Login');
    } catch (e) { 
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '30%', alignItems: 'center', justifyContent: 'center' }}>
        <Entypo name="chat" size={120} color={Colors.red800} />
      </View>
      <View style={{width: '100%', height: '40%', justifyContent: 'space-between'}}>
        <TextInput
        label="Name"
      dense={true}
      value={name}
      autoCompleteType="name"
      mode='outlined'
      onChange={(event) => setName(event.nativeEvent.text)}
      style={{margin: 20,}}
      />
      <TextInput
      label="Email"
      Placeholder="Example@example.com"
      autoCompleteType="email"
      dense={true}
      mode='outlined'
      value={email}
      style={{margin: 20,}}
      keyboardType="email-address"
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
      onChange={(event) => setPassword(event.nativeEvent.text)}
      />

      <TextInput
      label="Mobile Number"
      placeholder="Mobile No."
      dense={true}
      autoCompleteType="tel"
      value={phone}
      keyboardType="number-pad"
      mode='outlined'
      style={{margin: 20,}}
      onChange={(event) => setPhone(event.nativeEvent.text)}
      />

      <Button mode="contained" style={{margin: 20, borderRadius: 10,}} onPress={signup}>
        Sign Up
      </Button>

      </View>
    </View>
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