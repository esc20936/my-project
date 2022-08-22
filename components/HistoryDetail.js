import React from "react";
import { StyleSheet, Text, TextInput, View,SafeAreaView,Image,TouchableOpacity,Platform,ScrollView } from 'react-native';

export default function HistoryDetail(){

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.fieldLabel}>
                    Titulo:
                </Text>
                <Text style={styles.fieldValue}>
                    Operación de cabeza
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.fieldLabel}>
                    Fecha:
                </Text>
                <Text style={styles.fieldValue}>
                    12/05/2019
                </Text>
            </View>
            <View style={[styles.row, {position:'relative',marginTop: 'auto'}]}>
                <Text style={styles.fieldLabel}>
                    Descripción:
                </Text>
                <Text style={styles.fieldValue}>
                    lorem ipsum dolor sit amet consec   
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderBottomColor: '#d7d6d6',
        padding:10,
    },
    row: {
        flexDirection: 'row',
        height:'auto',
        marginTop:5,
        overflow: 'hidden',
    },
    fieldLabel: {
        color: '#616161'
    },
    fieldValue: {
        marginLeft: 10,
    }

});