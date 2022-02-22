import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TextInput,TouchableOpacity,Pressable,Alert,KeyboardAvoidingView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from './hooks/useTogglePasswordVisibility';

export default function CreateProfile({navigation}){

   
    const pswUtils = useTogglePasswordVisibility();
    const passwordVisibility = pswUtils.passwordVisibility;
    const rightIcon = pswUtils.rightIcon;
    const handlePasswordVisibility = pswUtils.handlePasswordVisibility;

    const pswUtils2 = useTogglePasswordVisibility();
    const passwordVisibility2 = pswUtils2.passwordVisibility;
 

    const handlePasswordVisibility2 = pswUtils2.handlePasswordVisibility;

    const [password, setPassword] = useState('');
    const [passwordC, setPasswordC] = useState('');
    const [username,setUsername] = useState('');
    const [DPI,setDPI] = useState(0);

  



    return (
        <SafeAreaView style={styles.container}>
            {/**LOGO AREA */}
            <View style={styles.logo}>
                <Image source={require('../assets/src/imgs/logoConTitulo.png')} style={styles.logoImg}/>
            </View>

            {/** Area de Inputs */}
            <View style = {styles.containerInputs}>
                
                <TextInput style={[styles.input,{marginTop:20}]}
                placeholder="Usuario"  
                value={username} 
                onChangeText={text => setUsername(text)}/>

                <TextInput style={[styles.input,{marginTop:20}]}
                placeholder="DPI"  
                value={DPI.toString()} 
                onChangeText={text => setDPI(text)}
                keyboardType={'numeric'}/>
                
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
                    <Pressable onPress={handlePasswordVisibility} style={{top:0,right:20}}>
                        <MaterialCommunityIcons name={rightIcon} size={28} color="#232323" />
                    </Pressable>

                </View>

                {/* Area del input contrasena */}
                <View style={styles.inputContainer}>

                    <TextInput
                    style={styles.inputField}
                    name='password'
                    placeholder='Confirmar Contraseña'
                    autoCapitalize='none'
                    autoCorrect={false}
                    textContentType='newPassword'
                    secureTextEntry={passwordVisibility2}
                    value={passwordC}
                    enablesReturnKeyAutomatically
                    onChangeText={text => setPasswordC(text)}
                    />

                    {/* Area del icono */}
                    <Pressable onPress={handlePasswordVisibility2} style={{top:0,right:20}}>
                        <MaterialCommunityIcons name={rightIcon} size={28} color="#232323" />
                    </Pressable>

                </View>
            </View>

 
                
                {/* Iniciar Sesion */}
                <View style={styles.buttonContainer} >

                    <TouchableOpacity style={styles.logInButton} onPress={()=>{
                        if(username!=="" && password===passwordC && DPI.toString().length===13){
                            navigation.navigate('Home');
                        }else{
                            Alert.alert("Error","Datos invalidos");
                        }
                        
                        }}>
                                <Text style={{color:'white'}}> Crear Perfil </Text>
                    </TouchableOpacity>

                                    {/* Crear Perfil */}
                                    <TouchableOpacity style={[styles.logInButton,{marginTop:20,backgroundColor:'white'}]} hitSlop={{backgroundColor:'red'}} onPress={()=>{
                                        navigation.navigate('UserLogin');
                                    }}>
                                            <Text style={{color:'red'}}>Cancelar</Text>
                                    </TouchableOpacity>
                </View >
                
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        backgroundColor: '#fff',
        
        
    },logo:{
        flex: 0.2,
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
      buttonContainer: {
        backgroundColor: '#fff',
        flex: 0.3,
        alignItems:'center',
        width:"80%"
      }
      ,
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
         
          top:60,
          color: '#fff',
      },
      
      inputContainer: {
        marginTop:20,
        backgroundColor: 'white',
        width: '80%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'white'
      },
      inputField: {

        backgroundColor: '#fff',
        marginTop:0,
        height: 40,
        borderBottomColor:"#29abe2",
        borderBottomWidth: 1,
        width:"100%",
        
      }
      
      
    
})