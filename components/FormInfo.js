import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { KeyboardAvoidingView,StyleSheet, Text,TextInput, View,SafeAreaView,Image,TouchableOpacity,Platform,ScrollView } from 'react-native';

export default function FormInfo ({navigation,route}) {
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

        const [textoBoton,setTextoBoton] = useState('Editar');
        const [buttonEnabled,setButtonEnabled] = useState(true);
 
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
                                <Text style={styles.fieldLabel}>
                                    Nombre:
                                </Text>
                                <TextInput style={[styles.input,{color: (!buttonEnabled)? 'black':'#c9c9c9'}]}
                                    placeholder="Nombre"  
                                    value={nombre} 
                                    onChangeText={text => setNombre(text)}
                                    autoCapitalize='none'
                                    editable={buttonEnabled}/>

                                </View>
                                <View style={styles.row}>
                                <Text style={styles.fieldLabel}>Apellido: </Text>
                                <TextInput style={[styles.input,{color: (!buttonEnabled)? 'black':'#c9c9c9'}]}
                                    placeholder="Apellido"  
                                    value={apellido} 
                                    onChangeText={text => setApellido(text)}
                                    autoCapitalize='none'
                                    editable={buttonEnabled}/>
                                </View>
                                <View style={styles.row}>
                                <Text style={styles.fieldLabel}>Edad: </Text>
                                <TextInput style={[styles.input,{color: (!buttonEnabled)? 'black':'#c9c9c9'}]}
                                    placeholder="Edad"  
                                    value={edad}  
                                    onChangeText={text => setEdad(text)}
                                    autoCapitalize='none'
                                    editable={buttonEnabled}/>
                                </View>
                                <View style={styles.row}>
                                <Text style={styles.fieldLabel}>DPI: </Text>
                                <TextInput style={[styles.input,{color: (!buttonEnabled)? 'black':'#c9c9c9'}]}
                                    placeholder="DPI"  
                                    value={dpi} 
                                    onChangeText={text => setDPI(text)}
                                    autoCapitalize='none'
                                    editable={buttonEnabled}/>
                                </View>
                                <View style={styles.row}>
                                <Text style={styles.fieldLabel}>nacimiento: </Text>
                                <TextInput style={[styles.input,{color: (!buttonEnabled)? 'black':'#c9c9c9'}]}
                                    placeholder="Fecha de nacimiento"  
                                    value={fecha} 
                                    onChangeText={text => setFecha(text)}
                                    autoCapitalize='none'
                                    editable={buttonEnabled}/>
                                </View>
                                <View style={styles.row}>
                                <Text style={styles.fieldLabel}>Fumador: </Text>

                                <TextInput style={[styles.input,{color: (!buttonEnabled)? 'black':'#c9c9c9'}]}
                                    placeholder="Fumador"  
                                    value={fumador} 
                                    onChangeText={text => setFumador(text)}
                                    autoCapitalize='none'
                                    editable={buttonEnabled}/>
                                </View>
                                <View style={styles.row}>
                                <Text style={styles.fieldLabel}>Medicamento: </Text>
                                <TextInput style={[styles.input,{color: (!buttonEnabled)? 'black':'#c9c9c9'}]}
                                    placeholder="Consumes medicamento"  
                                    value={medicamento} 
                                    onChangeText={text => setMedicamento(text)}
                                    autoCapitalize='none'
                                    editable={buttonEnabled}/>
                                </View>
                                <View style={styles.row}>
                                <Text style={styles.fieldLabel}>Embarazada: </Text>
                                <TextInput style={[styles.input,{color: (!buttonEnabled)? 'black':'#c9c9c9'}]}
                                    placeholder="Embarazada"  
                                    value={embarazada}  
                                    onChangeText={text => setEmbarazada(text)}
                                    autoCapitalize='none'
                                    editable={buttonEnabled}/>
                                </View>

                                
                            </View>
                            
                        </ScrollView>
                    </View>

                </View>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.shareButton} activeOpacity={0.7} onPress={() => {setButtonEnabled(!buttonEnabled); setTextoBoton((buttonEnabled)? "Editar":"Guardar");}}>
                        <Text style={styles.shareButtonText}>{textoBoton}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.shareButton} onPress={()=>{navigation.navigate("ShareForm", {name,lastName,age,document,birth,smoker,med,pregnant,titulo,fechaCreacion})}}>
                        <Text style={styles.shareButtonText}>Compartir</Text>
                    </TouchableOpacity>

                </View>
                

                




            </View>
        );
    }
    else{
        return(
            <View style={styles.container}>
                <Text style={styles.formatexto}>No se encontró el formulario</Text>
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
        marginTop: 0,
        height: 40,
        borderBottomColor:"#143590",
        borderBottomWidth: 1,
        width:"50%",
        marginLeft: 5,
        marginTop: 10,
        
    },buttonArea:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row:{
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-evenly',
        marginTop: 12,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    fieldLabel:{
        marginBottom: 10,
    },


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
