import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,Platform,Alert,ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import FormView from './FormView';

export default function Home({navigation,route}) {

  const {name,email,photoUrl} = route.params;

  const AvatarImg = (photoUrl)? {uri:photoUrl}: require('../assets/src/icons/user.png');
  const AvatarEmail = (email)? email:"Aun no se registra un correo";

  return (
    <SafeAreaView style={styles.container}>
      {/* User Info Container.*/}
      <View style={styles.userInfoContainer}>
        <View style={{flexDirection:'row',flex:0.9, backgroundColor:'#fff',alignItems: 'center'}}>
          <View style={styles.userImageContainer}>
            <Image source={AvatarImg} style={styles.userImage}/>
          </View>
          <View style={styles.userTextInfoContainer}>
            <Text style={styles.userNameText}>{name}</Text>
            <Text style={styles.userInfoText}>{AvatarEmail}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.settingsIcon}>
          <Ionicons name="md-settings-sharp" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* MAIN AREA   */}
      <View style={styles.mainAreaContainer}>
        <View style={styles.firstRowContainer}>
          <TouchableOpacity style={styles.searchIconContainer}>
            <FontAwesome name="search" size={28} color="black" />
          </TouchableOpacity>
          <Text style={styles.formsTitle}>Formularios</Text>
        </View>

        {/* Form view */}
        <View style={ styles.secondRowContainer }>

        <ScrollView  horizontal={true} >

          <FormView name="Covid" date="02/02/2022"/>
          <FormView name="Vacuna" date="12/03/2019"/>
          <FormView name="General" date="11/04/2022"/>
          <FormView name="Extra" date="12/12/2021"/>

        </ScrollView>
        </View>



        <TouchableOpacity style={styles.scanButton}>
          <Ionicons name="md-scan" size={24} color="white" />
          <Text style={styles.scanButtonText}>ESCANEAR</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addFloatingButton}>
        <Text style={styles.addFloatingButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: (Platform.OS === 'android')? 30:0,
  },
  userInfoContainer:{
    flex: 0.15,
    backgroundColor: 'white',
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
    backgroundColor: '#fff',
    height:'100%',
    justifyContent: 'flex-start',
    marginLeft:20,
    maxWidth:200
  },
  userNameText:{
    fontWeight: 'bold',
    fontSize:16
  },
  userInfoText:{
    fontSize:13,
    color:'#616161'
  },
  settingsIcon:{
    backgroundColor: '#fff',
    right:20,
   
  },
  mainAreaContainer:{
    flex:0.8,
    backgroundColor: '#fff',
    width:'90%',
  },
  firstRowContainer:{
    flexDirection: 'row-reverse',
    flex:0.15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  formsTitle:{
    fontSize:20,
    fontWeight: 'bold',
    marginLeft:20
    

  },searchIconContainer:{
    left:20,
    backgroundColor: '#fff'
  },
  secondRowContainer:{
    marginTop:0,
    height: 300, 
    backgroundColor: '#fff',
   
    
    
  },scanButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29abe2',
    borderRadius:8,
    height: 50,
    marginTop:'auto',
    bottom:10,
    width:'80%',
    alignSelf: 'center',
    
  },scanButtonText:{
    color: 'white',
    fontSize:20,
    marginLeft:20
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
