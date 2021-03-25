import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Auth } from 'aws-amplify';
import {TextInput, Button, Modal, Colors} from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

function ResetPassword() {
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  const [buttondisable, setButtonDisable] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '30%', alignItems: 'center', justifyContent: 'center' }}>
        <Entypo name="chat" size={120} color={Colors.amber300} />
      </View>
      <View style={{width: '100%', height: '40%', justifyContent: 'space-around'}}>
      <TextInput
      label="Code"
      placeholder="Code sent to your email"
      autoCompleteType=""
      dense={true}
      secureTextEntry={true}
      disabled={inputDisabled}
      mode='outlined'
      value={code}
      style={{margin: 20,}}
      onChange={(event) => setCode(event.nativeEvent.text)}
      />

      <Button mode="contained" disabled={buttondisable} style={{margin: 20, borderRadius: 10,}} onPress={() => {}}>
        Reset Password
      </Button>

      </View>
    </View>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
