import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity } from 'react-native';



export default function Home({navigation,route}) {

  const {name,email,photoUrl} = route;
  


  return (
    <SafeAreaView style={styles.container}>
      {/* Area logo HealtCare */}
      <View style={styles.logo}>
        <Image source={require('../assets/src/imgs/logoConTitulo.png')} style={styles.logoImg}/>
      </View>

      <View style={styles.optionsMenu}>
          {/*Primera opcion */ }
          <TouchableOpacity style={styles.optionContainer} onPress={() =>{
              navigation.navigate('UserLogin');
          }}>
            <Image source={require('../assets/src/icons/user.png')} style={styles.iconStyle}/>
            <Text style={styles.menuOptionText}>
              Usuario
            </Text>
          </TouchableOpacity>
          {/*Segunda opcion */ }
          <TouchableOpacity style={styles.optionContainer2}>
            <Image source={require('../assets/src/icons/agregarPerfil.png')} style={styles.iconStyle}/>
            <Text style={styles.menuOptionText}>
              Crear Perfil
            </Text>
          </TouchableOpacity>
          {/*Tercera opcion */ }
          <TouchableOpacity style={styles.optionContainer}>
            <Image source={require('../assets/src/icons/setting.png')} style={styles.iconStyle}/>
            <Text style={styles.menuOptionText}>
              Ajustes
            </Text>
          </TouchableOpacity>
      </View>
      

    {/* Area footer */}
    <View style={styles.logo}>
        <Text style={styles.footerText}>"Porque tu vida importa"</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo:{
    flex: 0.25,
    backgroundColor: '#fff',
    justifyContent: 'center',

  },
  footerText:{
    fontStyle:"italic"
  },
  logoImg: {
    resizeMode: "center"
  },

  optionsMenu:{
    flex:0.55,
    backgroundColor: '#fff',
    width:'80%',
    right: 20,

  },
  optionContainer:{
    flex:0.25,
    margin:10,
    marginTop:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'

  },
  menuOptionText:{
    fontWeight: 'bold',
    fontSize:20,
    color: '#646464'
  },
  iconStyle:{
    resizeMode:"contain",
    width: '20%',
    height:'40%',
    alignSelf:'center',
    marginRight:30,
    backgroundColor: '#fff',
  },
    optionContainer2:{
      flex:0.25,
      margin:10,
      paddingRight:26,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row'
   }






});
