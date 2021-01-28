import React, {useState} from 'react'
import {TouchableNativeFeedback, View,ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, Colors, Modal} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';


function NewMessage({ User }) {

  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const [rippleOverflow, setRippleOverflow] = useState(false);
  if (User) {
    return (
      <ScrollView>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ChatRoom', {user: User.users[1]})}>
      
      <View style={styles.chatContainer}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Avatar.Image style={{margin: 15,}} size={50} source={{uri: User.users[1].imageUri}}/>
        </TouchableOpacity>

        <View style={{ height: '100%', width: '60%',}}>
          <Text style={{ margin: 20, fontSize: 16, fontWeight: 'bold' }}>
            {User.users[1].name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>

    <Modal visible={visible} onDismiss={() => setVisible(false)}>
      <Text>Example Modal.  Click outside this area to dismiss.</Text>
    </Modal>
    </ScrollView>
    )
  } else {
    return null;
  }
}

export default NewMessage;

const styles = StyleSheet.create({
  chatContainer: {
    width: '100%',
    height: '10%',
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 0.5,
    flexDirection: 'row',

  }
})
