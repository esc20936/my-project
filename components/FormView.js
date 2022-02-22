import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,Platform } from 'react-native';

const FormView = (props) =>{
    return (
        <TouchableOpacity style={styles.formContainer}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.date}>{props.date}</Text>
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
        marginLeft:20
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
    }
});

export default FormView;