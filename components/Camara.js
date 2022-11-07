import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons'; 
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Camara({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Vacio");
  // const [type, setType] = useState(Camera.Constants.Type.back);

  const askForCamera = () => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status=="granted");
    })()
  }

  useEffect(() => {
    askForCamera();
  }, []);


  const handleBarcode = ({type, data}) => {
    var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789[]{}";
    var decifrado = "";
    for (var i = 0; i < data.length; i++) {
      if(alphabet.includes(data[i].toLocaleLowerCase())){
        let pos = alphabet.indexOf(data[i].toLocaleLowerCase());
        decifrado += alphabet[(((pos-5)%alphabet.length) + alphabet.length) % alphabet.length]
      }else {decifrado += data[i].toLocaleLowerCase();}
    }
    // console.log(decifrado)
    setScanned(true);
    const parsedData = JSON.parse(decifrado);
    const name = parsedData.name;
    const lastName = parsedData.lastname;
    const age = parsedData.age;
    const document = parsedData.document;
    const birth = parsedData.birth;
    const smoker = parsedData.smoker;
    const med = parsedData.med;
    const pregnant = parsedData.pregnant;
    const titulo = parsedData.titulo;
    const fechaCreacion = parsedData.fechacreacion;
    navigation.navigate("UserInfoView", {name,lastName,age,document,birth,smoker,med,pregnant,titulo,fechaCreacion})
  }


  if (hasPermission === null) {
    return (
      <View style={styles.containerNull}>
         <Text style={{color: 'white', fontSize:20}}>Solicitando permiso de camara</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.containerNull}>
         <Text style={{color: 'white', fontSize:20}}>Sin acceso a la camara</Text>
         <TouchableOpacity style={styles.scanButton} onPress={()=>{askForCamera()}}>
          <Text style={styles.scanButtonText}>Dar acceso a la camara</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.containerNull}>
      <View style={styles.BarCodeScanner}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarcode}
        style={{height:900,width:200}}/>
      </View> 
      {/* <Text style={styles.pTexto}>{text}</Text> */}

      {/* {scanned && 
      <TouchableOpacity style={styles.scanButton} onPress={()=>{setScanned(false)}}>
          <Text style={styles.scanButtonText}>Escanear otra vez</Text>
        </TouchableOpacity>} */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#143590',
    
  },
  BarCodeScanner: {
    alignItems:"center",
    justifyContent: "center",
    height:200,
    width:200,
    borderRadius:30,
    overflow:"hidden",
    backgroundColor: 'red'
  },pTexto:{
    fontSize: 18,
    color: 'white'
  },
  containerNull:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#143590',
    alignItems: 'center',
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
  },scanButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0657a2',
    borderRadius:8,
    height: 50,
    marginTop:25,
    bottom:10,
    width:'60%',
    alignSelf: 'center',
    
  },scanButtonText:{
    color: 'white',
    fontSize:15,
    marginLeft:10
  }
});