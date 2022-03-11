import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  FormInfo  from './FormInfo.js';
import { useNavigation } from '@react-navigation/native';
const FormView = (props) =>{
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.formContainer} onPress={()=>{navigation.navigate("FormInfo")}}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#29abe2','#00567ac9']}
                style={styles.button}>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </LinearGradient>
           
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    formContainer:{
        height:250,
        width:190,
        backgroundColor: '#29abe2',
        borderRadius:15,
        bottom:20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft:20,
        marginTop:20,
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
        fontSize:20,
        color: '#fff',
        alignSelf:'flex-end',
        top:90,
        right:10
    },
    
});

export default FormView;