import React from "react";
import HistoryDetail from "./HistoryDetail";
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View,SafeAreaView,Image,TouchableOpacity,Platform,ScrollView } from 'react-native';

export default function MedicalHistory(){
        
    return (
        <View style={styles.container}>
            <View style={styles.scrollView}>
                <ScrollView>
                    <HistoryDetail title='Operación Cabeza' date='02/01/2019'/>
                    <HistoryDetail title='Golpe espalda' date='20/06/2019'/>
                    <HistoryDetail title='Operación Amigdalas' date='02/07/2020'/>
                    <HistoryDetail title='Operación pierna' date='02/01/2017'/>
           
                    <HistoryDetail title='Operación Cabeza' date='02/01/2019'/>
                    <HistoryDetail title='Golpe espalda' date='20/06/2019'/>
                    <HistoryDetail title='Operación Amigdalas' date='02/07/2020'/>
                    <HistoryDetail title='Operación pierna' date='02/01/2017'/>
           
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },scrollView: {
        width: '90%',
        height: '95%',
        backgroundColor: '#fff',
    
    }
});