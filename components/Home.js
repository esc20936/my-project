import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,Platform,Alert,ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import FormView from './FormView';
import Camara from './Camara.js';
import CreateProfile from './CreateProfile';
import firebase from './firebase2.js';


function getForms(email){
  let lista = [];
  
  return lista;
}



export default function Home({navigation,route}) {

  const {name,email,photoUrl} = route.params;
  const AvatarImg = (photoUrl)? {uri:photoUrl}: require('../assets/src/icons/avatar.png');
  const AvatarEmail = (email)? email:"Aun no se registra un correo";
  const [listaFormularios,setListaFormularios] = useState([]);
  
  
  useEffect(() => {
    
    firebase.db.collection(email).onSnapshot(querySnapshot => {
      let lista = [];
      querySnapshot.docs.forEach(doc => {
        const {titulo,nombre,apellido,edad,dpi,birth,smoker,med,pregnant,date} = doc.data();
        const data = {
          name: nombre,
          lastName: apellido,
          age: edad,
          document: dpi,
          birth: birth,
          smoker:smoker,
          med:med,
          pregnant: pregnant,
        }
        lista.push(
          <FormView name={titulo} date={date} data={data}/>
        );
      })
      setListaFormularios(lista);
    })
  },[])

  // useEffect(() =>{
  //   setListaFormularios(getForms(email));
  // },[])

  return (
    <SafeAreaView style={styles.container}>
      {/* User Info Container.*/}
      <View style={styles.userInfoContainer}>
        <View style={{flexDirection:'row',flex:0.9, backgroundColor:'#143590',alignItems: 'center'}}>
          <View style={styles.userImageContainer}>
            <Image source={AvatarImg} style={styles.userImage}/>
          </View>
          <View style={styles.userTextInfoContainer}>
            <Text style={styles.userNameText}>{name}</Text>
            <Text style={styles.userInfoText}>{AvatarEmail}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.settingsIcon} onPress={()=>{
          navigation.navigate('EditProfile',{name,email,photoUrl});
          
          
          
          }}>
          <Ionicons name="md-settings-sharp" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* MAIN AREA   */}
      <View style={styles.mainAreaContainer}>
        <View style={styles.firstRowContainer}>
          <TouchableOpacity style={styles.searchIconContainer}>
            <FontAwesome name="search" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.formsTitle}>Formularios</Text>
        </View>

        {/* Form view */}
        <View style={ styles.secondRowContainer }>

        <ScrollView  horizontal={true} >

          {/* <FormView name="Covid" date="02/02/2022" />
          <FormView name="Vacuna" date="12/03/2019" />
          <FormView name="General" date="11/04/2022" />
          <FormView name="Extra" date="12/12/2021" /> */}
          {listaFormularios}

        </ScrollView>
        </View>



        <TouchableOpacity style={styles.scanButton} onPress={()=>{navigation.navigate("Camara")}}>
          <Ionicons name="md-scan" size={24} color="white" />
          <Text style={styles.scanButtonText}>ESCANEAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scanButton2} onPress={()=>{navigation.navigate("CreateForm",{name,email,photoUrl})}}>
          <Text style={styles.scanButtonText2}>Crear Formulario</Text>
        </TouchableOpacity>
      </View>

     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#143590',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: (Platform.OS === 'android')? 30:0,
  },
  userInfoContainer:{
    flex: 0.15,
    backgroundColor: '#143590',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userImageContainer: {
    left:10
  },
  userImage:{
    width: 50,
    height:50,
    borderRadius:150,
  },
  userTextInfoContainer:{
    backgroundColor: '#143590',
    height:'100%',
    justifyContent: 'flex-start',
    marginLeft:20,
    maxWidth:200
  },
  userNameText:{
    fontWeight: 'bold',
    fontSize:16,
    color: '#fff',
  },
  userInfoText:{
    fontSize:13,
    color:'#bbbfc3'
  },
  settingsIcon:{
    backgroundColor: '#143590',
    right:20,
   
  },
  mainAreaContainer:{
    flex:0.8,
    backgroundColor: '#143590',
    width:'90%',
  },
  firstRowContainer:{
    flexDirection: 'row-reverse',
    flex:0.3,
    backgroundColor: '#143590',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:10
    
  },
  formsTitle:{
    fontSize:20,
    fontWeight: 'bold',
    marginLeft:20,
    color: '#fff',
    

  },searchIconContainer:{
    left:20,
    backgroundColor: '#143590'
  },
  secondRowContainer:{
    marginTop:10,
    height: 270, 
    backgroundColor: '#143590',
    marginBottom:20

   
    
    
  },scanButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0657a2',
    borderRadius:8,
    height: 50,
    marginTop:10,
    bottom:10,
    width:'80%',
    alignSelf: 'center',
    
  },scanButton2:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#143590',
    borderRadius:8,
    height: 50,
    marginTop:10,
    bottom:10,
    width:'80%',
    alignSelf: 'center',
    color: 'white',
    
  },scanButtonText:{
    color: 'white',
    fontSize:15,
    marginLeft:10
  },scanButtonText2:{
    color: 'white',
    fontSize:15,
    marginLeft:10
  },
  addFloatingButton:{
    position:'absolute',
    backgroundColor:'#f15a24',
    top:'78%',
    left:'70%',
    height:60,
    width:60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:150
  },
  addFloatingButtonText:{
    color: 'white',
    fontSize:40,
    bottom:5,
    
  }



});
