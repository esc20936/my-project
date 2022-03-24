import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TextInput,TouchableOpacity,Pressable,Alert,ActivityIndicator} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from './hooks/useTogglePasswordVisibility';
import * as Google from 'expo-google-app-auth';
import { NavigationContainer , StackActions, NavigationActions } from '@react-navigation/native';
import {auth} from './firebase.js';

export default function UserLogin({navigation}){

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =   useTogglePasswordVisibility();
    const [password, setPassword] = useState('');
    const [username,setUsername] = useState('');
    const [googleSubmitting,setGoogleSubmitting] = useState(false);
    const [mailSubmitting,setMailSubmitting] = useState(false);
    
    const handleLogin = () => {
        setMailSubmitting(true);
        auth.signInWithEmailAndPassword(username, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            let name = username.split('.')[0];
            name = name.charAt(0).toUpperCase() + name.slice(1);
            let email = username;
            setMailSubmitting(false);
            navigation.navigate("Home",{email,name});
        }).catch(err => {
            setMailSubmitting(false);
            alert(err.message);

        });
    }
    

    const handleGoogleSigIn = () => {

        setGoogleSubmitting(true);

        const config = {
            iosClientId :'835553252178-6fhf0csikmcuit2gh0l2t589mddatrru.apps.googleusercontent.com',
            androidClientId : '835553252178-bfkmrbdl0n0t8ue2qsia9akdf6ghtrr5.apps.googleusercontent.com',
            scopes: ['profile','email']
        };


        Google.logInAsync(config)
        .then((result) => {
            const {type,user} = result;
            if(type==='success'){
                const {email,name,photoUrl} = user;
                setTimeout(() => {

                    

                    navigation.navigate("Home",{ email,name,photoUrl })
                },
                1000
                );

            }else{
                Alert.alert("Error","Inicio de sesión cancelado");
            }
            setGoogleSubmitting(false);
        })
        .catch((error) => {
            Alert.alert("Error",error.message);
            setGoogleSubmitting(false);
        })

    }



    return (
        <SafeAreaView style={styles.container}>
            {/**LOGO AREA */}
            <View style={styles.logo}>
                {/* <Image source={require('../assets/src/imgs/logoConTitulo.png')} style={styles.logoImg}/> */}
                <Text style={styles.logoText1}>Health</Text>
                <Text style={styles.logoText2}>Forms</Text>
            </View>

            {/** Area de Inputs */}
            <View style = {styles.containerInputs}>
                
                <TextInput style={styles.input}
                placeholder="Correo"  
                value={username} 
                onChangeText={text => setUsername(text)}
                autoCapitalize='none'/>
                
                {/* Area del input contrasena */}
                <View style={styles.inputContainer}>

                    <TextInput
                    style={styles.inputField}
                    name='password'
                    placeholder='Contraseña'
                    autoCapitalize='none'
                    autoCorrect={false}
                    textContentType='newPassword'
                    secureTextEntry={passwordVisibility}
                    value={password}
                    enablesReturnKeyAutomatically
                    onChangeText={text => setPassword(text)}
                    />

                    {/* Area del icono */}
                    <Pressable onPress={handlePasswordVisibility} style={{top:10,right:20}}>
                        <MaterialCommunityIcons name={rightIcon} size={28} color="#232323" />
                    </Pressable>

             </View>
 
                
                {/* Iniciar Sesion */}

                {!mailSubmitting && ( 
                         <TouchableOpacity style={styles.logInButton} onPress={handleLogin}>
                            <Text style={{color:'white'}}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                    )}

                    {mailSubmitting && ( 
                        <TouchableOpacity style={[styles.logInButton,{marginTop:0,flexDirection: 'row',justifyContent: 'space-around'}]} disabled={true}>
                                <ActivityIndicator size={24} color="white"/>
                        </TouchableOpacity>
                    )}


               

                {/* Crear Perfil */}
                <TouchableOpacity style={[styles.logInButton,{marginTop:20,backgroundColor:'white'}]} onPress={()=>{
                    navigation.navigate('CreateProfile');
                }}>
                        <Text style={{color:'#29abe2'}}>Crear perfil</Text>
                </TouchableOpacity>
                <View style={[styles.logInButton,{marginTop:5,height:10,borderTopWidth:1,BorderColor:'#29abe2',borderRadius:0,backgroundColor:'white'}]}/>
                    {!googleSubmitting && ( 
                        <TouchableOpacity style={[styles.logInButton,{marginTop:0,flexDirection: 'row',justifyContent: 'center'}]} onPress={handleGoogleSigIn} >
                                <AntDesign name="google" size={24} color="white" />
                                <Text style={{color:'#fff',marginLeft:20}}>Ingresar con Google</Text>
                        </TouchableOpacity>
                    )}

                    {googleSubmitting && ( 
                        <TouchableOpacity style={[styles.logInButton,{marginTop:0,flexDirection: 'row',justifyContent: 'space-around'}]} disabled={true}>
                                <ActivityIndicator size={24} color="white"/>
                        </TouchableOpacity>
                    )}
                   
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        backgroundColor: '#fff',
    },logo:{
        flex: 0.3,
        flexDirection: 'row',
        alignItems:'flex-end',
        justifyContent: 'center',
      },
      logoImg: {
        resizeMode: "center", 
        width:250,
        height:50,
        bottom: 0,
        backgroundColor: '#fff',

      },
      containerInputs:{
          flex:0.5,
          backgroundColor: '#fff',
          width:"80%",
          alignItems:'center'
      },
      input:{
          backgroundColor: '#fff',
          marginTop: 50,
          height: 40,
          borderBottomColor:"#29abe2",
          borderBottomWidth: 1,
          width:"80%",
      },
      logInButton:{

          width:"80%",
          height:40,
          borderRadius:15,
          backgroundColor: '#29abe2',
          justifyContent: 'center',
          alignItems: 'center',
          position:'relative',
          top:60,
          color: '#fff',
      },
      
      inputContainer: {
        marginTop:10,
        backgroundColor: 'white',
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'white'
      },
      inputField: {

        backgroundColor: '#fff',
        marginTop: 20,
        height: 40,
        borderBottomColor:"#29abe2",
        borderBottomWidth: 1,
        width:"100%",
        
      },
      googleButtonContainer:{
          backgroundColor: 'red',
      },
      logoText1:{
        fontSize:40,
        color: '#29abe2',
        fontWeight: 'bold',
      },
      logoText2:{
        fontSize:40,
        fontWeight: 'bold',

      }
      
      
    
})