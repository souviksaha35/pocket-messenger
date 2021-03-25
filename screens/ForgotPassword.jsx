import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Auth } from 'aws-amplify';
import {TextInput, Button, Modal, Colors} from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

function ForgotPassword() {
  const [username, setUsername] = useState('');
  const [buttondisable, setButtonDisable] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);

  const forgotPassword = () => {

  }
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '30%', alignItems: 'center', justifyContent: 'center' }}>
        <Entypo name="chat" size={120} color={Colors.amber300} />
      </View>
      <View style={{width: '100%', height: '40%',}}>
      <TextInput
      label="Username"
      placeholder="Example123"
      autoCompleteType="username"
      dense={true}
      disabled={inputDisabled}
      mode='outlined'
      value={username}
      style={{margin: 20,}}
      onChange={(event) => setUsername(event.nativeEvent.text)}
      />

      <Button mode="contained" disabled={buttondisable} style={{margin: 20, borderRadius: 10,}} onPress={() => {}}>
        Forgot Password
      </Button>

      </View>
    </View>
  )
}

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})