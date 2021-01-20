import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Image } from 'react-native';
import {useRoute} from "@react-navigation/native";
import { Video } from 'expo-av';

function MediaUploadScreen() {

  const route = useRoute();

  const [Media, setMedia] = useState([]);

  useEffect(() => {
    const {media} = route.params;
    setMedia(media);
    console.log('our media', Media);
  }, []);


  return (
    <View style={styles.container}>
      {Media.type === "image" ?  <Image source={{ uri: Media.uri }} style={{width: '100%', height: '30%'}}/>: 
         <Video
         source={{ uri: Media.uri }}
         rate={1.0}
         volume={1.0}
         isMuted={false}
         resizeMode="cover"
         shouldPlay
         isLooping
         style={{ width: '100%', height: '30%' }}
         />
      }
      {/* <Image source={{ uri: Media.uri }} style={{width: '100%', height: '30%'}}/> */}

    </View>
  )
}

export default MediaUploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  }
});