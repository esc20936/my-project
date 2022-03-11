import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,Platform } from 'react-native';

export default function FormInfo ({navigation}) {

    return(
        <View style={styles.container}>
            {/* Seccion1 encabezado */}
            <View style= {styles.header}>
                <Text style={styles.formatexto}>Bienvenido al formulario</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.formatexto2}>Fecha: ________________   Dpto: _______________  </Text>
                <Text style={styles.formatexto2}>Nombres: ________________    _______________  </Text>
                <Text style={styles.formatexto2}>Apellidos:__________________  DPI:_____________ </Text>
                <Text style={styles.formatexto2}>Numero celular: _____________  </Text>
                <Text style={styles.formatexto2}>Numero adicional: _____________  </Text>
                <Text style={styles.formatexto2}>Correo electrónico: _____________</Text>
                <Text style={styles.formatexto2}>Dirección: _____________</Text>
                <Text style={styles.formatexto2}>Tipo de sangre: ____</Text>
                <Text style={styles.formatexto2}>Alergias: _______________________________________</Text>
              

            </View>
            <View style={styles.footer}>
                <Text style={styles.formatexto3}>FORMULARIO PROTEGICO POR HF</Text>
            </View>




        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:"#fff",
        alignContent:"center",
        justifyContent:"center",
        margin: 30

    },
    header:{
        flex:0.20,
        backgroundColor:"#29abe2",
        width:'100%',
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center"
      },
    content: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    footer: {
        flex:.04 ,
        backgroundColor: 'lightgrey'
    },
    formatexto:{
        flex: 1,
        fontSize:25,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color:'#FFFF',
        textAlign: 'center'
 
    },
    formatexto2:{
        flex: 0.1,
        fontSize: 12,
        color:'black',
        textAlign: 'left',
        margin: 15
    },
    formatexto3:{
        flex: 1,
        fontSize:10,
        fontWeight: 'bold',
        color:'grey',
        textAlign: 'center',
        margin: 3
    }

});

{/*
     section1:{
        flex:0.80,
        backgroundColor:"lightblue",
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center"
      },


*/}