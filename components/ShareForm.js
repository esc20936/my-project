import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TextInput,TouchableOpacity,Pressable,Alert,KeyboardAvoidingView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';

export default function ShareForm({navigation, route}){
    const {name,lastName,age,document,birth,smoker,med,pregnant,titulo,fechaCreacion} = route.params;
    const json = JSON.stringify({name:name,lastName:lastName,age:age,document:document,birth:birth,smoker:smoker,med:med,pregnant:pregnant, titulo:titulo,fechaCreacion:fechaCreacion});
    return (
        <View style={styles.container}>
            <QRCode
                value={json}
                color="#fff"
                backgroundColor="#143590"
                size={200}
            />
            
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#143590",
        justifyContent: "center",
        alignItems: "center",
    }
})