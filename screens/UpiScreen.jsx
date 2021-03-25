import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import {Button, TextInput} from 'react-native-paper';
import RNUpiPayment from 'react-native-upi-payment/lib/UpiPayment'
function UpiScreen() {
  const [vpa, setVPA] = useState('');
  const [amount, setAmount] = useState('');

  const onPaySubmit = () => {
    RNUpiPayment.initializePayment({
      vpa: 'john@upi', // or can be john@ybl or mobileNo@upi
      payeeName: 'John Doe',
      amount: '1',
      transactionRef: 'aasf-332-aoei-fn'
    }, successCallback, failureCallback);
  }
  return (
    <View style={styles.container}>
      <View style={{width: '90%', height: '50%', margin: 20, }}>
      <TextInput
      label="VPA"
      value={vpa}
      onChange={(event) => setVPA(event.nativeEvent.text)}
      style={{margin: 10, height: 40,}}
      />

      <TextInput
      label="Amount"
      value={amount}
      onChange={(event) => setAmount(event.nativeEvent.text)}
      style={{margin: 10, height: 40,}}
      />

      <Button mode="contained" style={{margin: 10,}} onPress={onPaySubmit}>
        PAY
      </Button>
      </View>
    </View>
  )
}

export default UpiScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center'
  }
})