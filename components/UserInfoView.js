import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View,SafeAreaView,Image,TouchableOpacity,Platform,ScrollView } from 'react-native';

export default function UserInfoView ({navigation,route}) {

    if(route){

        const {name,lastName,age,document,birth,smoker,med,pregnant,titulo,fechaCreacion} = route.params;
        const [nombre,setNombre] = useState(name);
        const [apellido,setApellido] = useState(lastName);
        const [edad,setEdad] = useState(age);
        const [dpi,setDPI] = useState(document);
        const [fecha,setFecha] = useState(birth);
        const [fumador,setFumador] = useState(smoker);
        const [medicamento,setMedicamento] = useState((med==='')? "medicado (vacio)":med);
        const [embarazada,setEmbarazada] = useState((pregnant==='')? "embarazada (vacio)":pregnant);

        
    
        return(
            <View style={styles.container}>
                
                <View style={styles.container}>
                    {/* <View style= {styles.header}>
                        <Text style={styles.formatexto}>Información Formulario</Text>
                    </View> */}
                    <View style={styles.infoContainer}>
                        <ScrollView style={styles.infoScroll}>
                            <View style={styles.infoContainer2}>
                                <View style={styles.row}>
                                    <Text style={styles.campo}>Titulo:</Text>
                                    <Text style={styles.valor}>{titulo}</Text>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.campo}>F. Creación:</Text>
                                    <Text style={styles.valor}>{fechaCreacion}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.campo}>Nombre:</Text>
                                    <Text style={styles.valor}>{nombre}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.campo}>Apellido:</Text>
                                    <Text style={styles.valor}>{apellido}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.campo}>Edad:</Text>
                                    <Text style={styles.valor}>{edad}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.campo}>DPI:</Text>
                                    <Text style={styles.valor}>{dpi}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.campo}>F. Nacimiento:</Text>
                                    <Text style={styles.valor}>{fecha}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.campo}>Fumador:</Text>
                                    <Text style={styles.valor}>{fumador}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.campo}>Medicamento:</Text>
                                    <Text style={styles.valor}>{medicamento}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.campo}>Embarazada:</Text>
                                    <Text style={styles.valor}>{embarazada}</Text>
                                </View>
                            
                            </View>
                            
                        </ScrollView>
                    </View>

                </View>

            </View>
        );
    }else{
        return(
            <View style={styles.container}>
                <Text style={styles.formatexto}>No hay datos</Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:"#f5f5f5",
        alignContent:"center",
        justifyContent:"flex-start",
        margin: 10,

    },row:{
        flexDirection: 'row',
        marginRight: 15,
        marginTop:10
    },campo:{
        fontWeight:"bold",
        fontSize:18,
    },valor:{
        fontSize:18,
        marginLeft:15
    },
    shareButton:{
        marginTop:20,
        backgroundColor:"#143590",
        justifyContent:"center",
        alignItems: "center",
        width:"30%",
        height:50,
        alignSelf: "center",
        borderRadius:15,
        margin:20

    },
    shareButtonText:{
        color:"white",
    },
    header:{
        flex:0.1,
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
    },
    infoContainer:{
        flex:1,
        width:'100%',

    },infoContainer2:{
        flex:1,
        justifyContent: 'center',
        // backgroundColor:'red',
        width:'100%',
        

    },
    infoScroll:{
        flex: 1,
        backgroundColor:'#fefefe',
    }, input:{
        backgroundColor: '#fff',
        marginTop: 22,
        height: 40,
        borderBottomColor:"#143590",
        borderBottomWidth: 1,
        width:"80%",
        marginLeft: 35,
        
    },buttonArea:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
