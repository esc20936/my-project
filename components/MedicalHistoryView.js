import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import fondo from '../assets/src/icons/fondo.png';
const MedicalHistoryView = (props) => {

    const navigation = useNavigation();
    
    const titulo = props.name;
    const fechaCreacion = props.date;
    const correo = props.email;
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.formContainer} onPress={()=>{navigation.navigate("MedicalHistory",{email:props.email })}}>
            <ImageBackground source={fondo} resizeMode="cover" style={{height:190,width:250}}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#10dde0','#0d8a8c']}
                style={styles.button}>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    formContainer:{
        height:190,
        width:250,
        backgroundColor: '#143590',
        borderRadius:15,
        bottom:20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft:20,
        marginTop:20,
        overflow: 'hidden',
    },
    button: {
        height:'100%',
        width:'100%',
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize:25,
        color: '#fff'
    },
    date: {
        fontSize:17,
        color: '#fff',
        alignSelf:'center',
        justifyContent: 'center',
        top:50,
        right:0
    },
    
});

export default MedicalHistoryView;