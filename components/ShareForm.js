import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TextInput,TouchableOpacity,Pressable,Alert,KeyboardAvoidingView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ShareForm({navigation}){
    return (
        <View style={styles.container}>
            <AntDesign name="qrcode" size={200} color="#29abe2" />
            
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        justifyContent: "center",
        alignItems: "center",
    }
})