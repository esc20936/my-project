import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons'; 

export default function Camara({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            {/* <Text style={styles.text}> Flip </Text> */}
            <Ionicons name="camera-reverse-sharp" size={24} color="white" style={styles.icon}/>
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareButton} >
                <Text style={styles.shareButtonText}>ESCANEAR</Text>
            </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },icon: {
      marginBottom:15,
      alignSelf:"center",
  },
  shareButton:{
    marginTop:20,
    backgroundColor:"#143590",
    justifyContent:"center",
    alignItems: "center",
    width:120,
    height:50,
    alignSelf: "center",
    borderRadius:15,
    alignSelf:"flex-end"

},
shareButtonText:{
    color:"white",
},
  button: {
    flex: 0.1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    width:"80%",

   
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});