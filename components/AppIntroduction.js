import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TextInput,TouchableOpacity,Pressable,Alert,ActivityIndicator} from 'react-native';
import LottieView from 'lottie-react-native';

export default function AppIntroduction({navigation}){
    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.logo}>
                <Text style={styles.logoText1}>Health</Text>
                <Text style={styles.logoText2}>Forms</Text>
            </View>
            <LottieView
                source={require('../assets/Lottie/clouds.json')}
                autoPlay={true}
                loop={true}
                speed={0.5}
                style={styles.nubes}
            
            />
            <LottieView
                    source={require('../assets/Lottie/doctor.json')}
                    autoPlay={true}
                    loop={true}
                    style={styles.animation}
                />
            <View style={styles.textContainer}>

                <View style={styles.mainContainer}>
                    
                    <View style={styles.proyectDescriptionsContainer}>
                        <Text style={styles.proyectDescription}>
                        Esta aplicación busca impactar a la población guatemalteca en cuanto la agilización
                        de trámites de la salud (llenado de formularios)
                        </Text>

                    </View>

                    <TouchableOpacity style={styles.logInButton} activeOpacity={0.8} onPress={() => navigation.navigate("UserLogin")}>
                            <Text style={{color:'#29abe2'}}>Iniciar</Text>
                    </TouchableOpacity>

                </View>
               
            </View>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'#29abe2',
        width: '100%',
    },
    logo:{
        flex: 0.2,
        flexDirection: 'row',
        alignItems:'flex-end',
        justifyContent: 'center',
        marginTop:0
      },
      logoText1:{
        fontSize:40,
        color: '#fff',
        fontWeight: 'bold',
      },
      logoText2:{
        fontSize:40,
        fontWeight: 'bold',
        color: '#fff',


      },
      nubes:{
          marginTop:50,
      },
      animation:{
          position: 'absolute',
          marginTop:0
          
          
      },textContainer:{
          flex: 1,
        //   backgroundColor: '#fff',
          justifyContent: 'flex-end',
          width: '90%',

      },mainContainer:{
          flex: 0.43,
          backgroundColor: '#29abe2',
          width: "100%",
          borderTopRightRadius:30,
          borderTopLeftRadius:30,
          justifyContent: 'flex-start',
          alignItems: 'center',
          
      },proyectDescriptionsContainer:{
          height:'auto',
          width: "70%",
        //   backgroundColor: 'red',
          marginTop: 50,
          marginLeft:0, 
      },
      proyectDescription:{
        fontSize:15,
        // fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
      },
      logInButton:{

        width:"80%",
        height:40,
        borderRadius:15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative',
        top:20,
        color: '#29abe2',
    }

})