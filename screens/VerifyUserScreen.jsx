import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, KeyboardAvoidingView} from 'react-native';
import {Colors, TextInput, Button, Modal} from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import {useRoute} from '@react-navigation/native'
import {useNavigation} from '@react-navigation/native'
import { Auth } from 'aws-amplify';

function VerifyUserScreen() {
  const navigation = useNavigation();


  const [buttondisable, setButtonDisable] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const route = useRoute();

  useEffect(() => {
    const {username} = route.params;
    setUsername(username);
  }, []);

  const confirmSignup = async () => {
    setButtonDisable(true);
    setInputDisabled(true);
    try {
      const verifyuser  = await Auth.confirmSignUp(username, code);
      console.log(verifyuser);
      navigation.navigate('Login');
    } catch (error) {
        console.log('error confirming sign up', error);
        alert(e);
        setButtonDisable(false);
        setInputDisabled(false);
    }
  }


  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={{ width: '100%', height: '30%', alignItems: 'center', justifyContent: 'center' }}>
        <Entypo name="chat" size={120} color={Colors.amber300} />
      </View>
      <View style={{width: '100%', height: '40%',}}>
        
      <TextInput
      label="OTP"
      placeholder="OTP That send to your email"
      dense={true}
      autoCompleteType="password"
      value={code}
      secureTextEntry={true}
      mode='outlined'
      style={{margin: 20,}}
      keyboardType="default"
      disabled={inputDisabled}
      onChange={(event) => setCode(event.nativeEvent.text)}
      />

      <Button mode="contained" disabled={buttondisable} style={{margin: 20, borderRadius: 10,}} onPress={confirmSignup}>
        Confirm Signup
      </Button>

      </View>
    </KeyboardAvoidingView>
  )
}

export default VerifyUserScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  }
});