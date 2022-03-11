import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,Platform } from 'react-native';

export default function FormInfo ({navigation}) {

    return(
        <View style={styles.container}>
            <Text>hola mariana</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignContent:"center",
        justifyContent:"center"

    }
});