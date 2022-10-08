import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { KeyboardAvoidingView,Alert, StyleSheet, Text,TextInput, View,SafeAreaView,Image,TouchableOpacity,Platform,ScrollView } from 'react-native';
import { getDatabase, ref, set } from "firebase/database";
import firebase from './firebase.js';
// import firebase from './firebase2.js';

function saveFormInfo(navigation,email,title,name,lastName,age,document,birth,smoker,medicamento,pregnant,f){
    const TT = title;

    if(title!=='' && name!=='' && lastName!=='' && parseInt(age)!==NaN && smoker!=='' && document!=='' && Date.parse(birth)!==NaN){
        try{
            if(f){
                firebase.db.collection(email).add(
                {
                    titulo: title,
                    nombre: name,
                    apellido: lastName,
                    edad: age,
                    dpi: document,
                    birth: birth,
                    smoker: smoker,
                    med: medicamento,
                    pregnant: pregnant,
                    date:new Date().toLocaleDateString()
                })

            }


            return true;
       

        }
        catch(err){
            return false;
            
        }
       
    }


    
}
function CreateForm ({navigation, route}) {
    if(route){
        const [titulo,setTitulo] = useState('');
        const [nombre,setNombre] = useState('');
        const [apellido,setApellido] = useState('');
        const [edad,setEdad] = useState('');
        const [dpi,setDPI] = useState('');
        const [fecha,setFecha] = useState('');
        const [fumador,setFumador] = useState('');
        const [medicamento,setMedicamento] = useState('');
        const [embarazada,setEmbarazada] = useState('');
        const { name, email, photoUrl } = route.params;

        // const [textoBoton,setTextoBoton] = useState('Editar');
        const [buttonEnabled,setButtonEnabled] = useState(true);
        const isIOS = (Platform.OS === 'ios')? true : false;
        return(
            <View style={styles.container}>
           
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "padding"}
            style={styles.container}
            >
                <View style={styles.container}>
                    
                    <View style={styles.infoContainer}>
                        <ScrollView style={styles.infoScroll}>
                            <View style={styles.infoContainer2}>
                            <View style={styles.row}>
                                <Text>Titulo: </Text>
                            <TextInput style={[styles.input,{color: (buttonEnabled)? 'black':'#c9c9c9'}]}
                                    placeholder="Titulo formulario"  
                                    value={titulo} 
                                    autoCapitalize='none'
                                    editable={buttonEnabled}/>
                            </View>

                            <View style={styles.row}>
                            <Text>Nombre: </Text>
                            <TextInput style={[styles.input,{color: (buttonEnabled)? 'black':'#c9c9c9'}]}
                                placeholder="Nombre"  
                                value={nombre} 
                                autoCapitalize='none'
                                editable={buttonEnabled}/>

                            </View>
                            <View style={styles.row}>
                            <Text>Apellido: </Text>
                                <TextInput style={[styles.input,{color: (buttonEnabled)? 'black':'#c9c9c9'}]}
                                    placeholder="Apellido"  
                                    value={apellido} 
                                    autoCapitalize='none'
                                    editable={buttonEnabled}/>
                            </View>
                            <View style={styles.row}>
                            <Text>Edad: </Text>
                            <TextInput style={[styles.input,{color: (buttonEnabled)? 'black':'#c9c9c9'}]}
                                placeholder="Edad"  
                                value={edad}  
                                autoCapitalize='none'
                                editable={buttonEnabled}/>
                            </View>
    
                            <View style={styles.row}>
                            <Text>DPI: </Text>
                            <TextInput style={[styles.input,{color: (buttonEnabled)? 'black':'#c9c9c9'}]}
                                placeholder="DPI"  
                                value={dpi} 
                                autoCapitalize='none'
                                editable={buttonEnabled}/>
                            </View>
                            <View style={styles.row}>
                            <Text>F. nacimiento: </Text>
                            <TextInput style={[styles.input,{color: (buttonEnabled)? 'black':'#c9c9c9'}]}
                                placeholder="Fecha de nacimiento"  
                                value={fecha} 
                                autoCapitalize='none'
                                editable={buttonEnabled}/>
                            </View>
                            <View style={styles.row}>
                            <Text>Fumador: </Text>
                                <TextInput style={[styles.input,{color: (buttonEnabled)? 'black':'#c9c9c9'}]}
                                    placeholder="Fumador"  
                                    value={fumador} 
                                    autoCapitalize='none'
                                    editable={buttonEnabled}/>
                            </View>
                            <View style={styles.row}>
                            <Text>Medicamento: </Text>
                                <TextInput style={[styles.input,{color: (buttonEnabled)? 'black':'#c9c9c9'}]}
                                    placeholder="Consumes medicamento"  
                                    value={medicamento} 
                                    autoCapitalize='none'
                                    editable={buttonEnabled}/>
                            </View>
                            <View style={styles.row}>
                            <Text>Número: </Text>
                                <TextInput style={[styles.input,{color: (buttonEnabled)? 'black':'#c9c9c9'}]}
                                    placeholder="Embarazada"  
                                    value={embarazada}  
                                    autoCapitalize='none'
                                    editable={buttonEnabled}/>
                            </View>
                                
                            </View>
                            
                        </ScrollView>
                    </View>

                </View>

                <View style={styles.buttonArea}>
                    {/* <TouchableOpacity style={styles.shareButton} activeOpacity={0.7} onPress={() => {setButtonEnabled(!buttonEnabled); setTextoBoton((buttonEnabled)? "Editar":"Aceptar");}}>
                        <Text style={styles.shareButtonText}>{textoBoton}</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity style={styles.shareButton} >
                        <Text style={styles.shareButtonText}>Crear</Text>
                    </TouchableOpacity>

                </View>
                

                




            </KeyboardAvoidingView>
            
                
                
            </View>
        );
    }else{
        return(
            <View style={styles.container}>
                <Text style={styles.text}>No se ha encontrado el formulario</Text>
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

});

export {saveFormInfo,CreateForm};
