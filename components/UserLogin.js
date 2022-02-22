import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TextInput,TouchableOpacity,Pressable,Alert,ActivityIndicator} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from './hooks/useTogglePasswordVisibility';
import * as Google from 'expo-google-app-auth';

export default function UserLogin({navigation}){

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =   useTogglePasswordVisibility();
    const [password, setPassword] = useState('');
    const [username,setUsername] = useState('');
    const [googleSubmitting,setGoogleSubmitting] = useState(false);
  

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
                setTimeout(() => navigation.navigate("Home",{email,name,photoUrl}),
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
                <Image source={require('../assets/src/imgs/logoConTitulo.png')} style={styles.logoImg}/>
            </View>

            {/** Area de Inputs */}
            <View style = {styles.containerInputs}>
                
                <TextInput style={styles.input}
                placeholder="Usuario"  
                value={username} 
                onChangeText={text => setUsername(text)}/>
                
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
                <TouchableOpacity style={styles.logInButton} onPress={()=>{
                    if(username==="Pablo" && password==="12345"){
                        let email = "";
                        let photoUrl='';
                        let name = username;
                        navigation.navigate('Home',{name,email,photoUrl});
                    }else{
                        Alert.alert("Error","El inicio de sesión no es válido");
                    }
                }}>
                        <Text style={{color:'white'}}>Iniciar Sesión</Text>
                </TouchableOpacity>

                {/* Crear Perfil */}
                <TouchableOpacity style={[styles.logInButton,{marginTop:20,backgroundColor:'white'}]} onPress={()=>{
                    navigation.navigate('CreateProfile');
                }}>
                        <Text style={{color:'#3d9bae'}}>Crear perfil</Text>
                </TouchableOpacity>
                <View style={[styles.logInButton,{marginTop:5,height:10,borderTopWidth:1,BorderColor:'#0e93be',borderRadius:0,backgroundColor:'white'}]}/>
                    {!googleSubmitting && ( 
                        <TouchableOpacity style={[styles.logInButton,{marginTop:0,flexDirection: 'row',justifyContent: 'space-around'}]} onPress={handleGoogleSigIn} >
                                <AntDesign name="google" size={24} color="white" />
                                <Text style={{color:'#fff'}}>Ingresar con Google</Text>
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
        alignItems:'flex-end',
        justifyContent: 'flex-end',
      },
      logoImg: {
        resizeMode: "center", 
       
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
          borderBottomColor:"#3d9bae",
          borderBottomWidth: 1,
          width:"80%",
      },
      logInButton:{

          width:"80%",
          height:40,
          borderRadius:15,
          backgroundColor: '#3d9bae',
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
        borderBottomColor:"#3d9bae",
        borderBottomWidth: 1,
        width:"100%",
        
      },
      googleButtonContainer:{
          backgroundColor: 'red',
      }
      
      
    
})