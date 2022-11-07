import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import firebase from "./firebase2.js";

function saveFormInfo(
  navigation,
  email,
  title,
  name,
  lastName,
  age,
  document,
  birth,
  smoker,
  medicamento,
  pregnant
) {

  if (
    title !== "" &&
    name !== "" &&
    lastName !== "" &&
    parseInt(age) !== NaN &&
    smoker !== "" &&
    document !== "" &&
    Date.parse(birth) !== NaN
  ) {
    try {
      firebase.db.collection(email).add({
        titulo: title,
        nombre: name,
        apellido: lastName,
        edad: age,
        dpi: document,

        sexo: sexo,
        sangre: sangre,

        birth: birth,
        smoker: smoker,
        med: medicamento,
        pregnant: pregnant,
        date: new Date().toLocaleDateString(),
      });

      Alert.alert("Formulario", "Se creo el formulario");
      navigation.goBack();
    } catch (err) {
      Alert.alert("Error", "Algo salio mal, intentalo más tarde");
      navigation.goBack();
    }
  } else {
    Alert.alert(
      "Datos invalidos",
      "Asegurese que todos los campos estan llenos en el formato correcto"
    );
  }
}

export default function CreateForm({ navigation, route }) {
  const [titulo, setTitulo] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [dpi, setDPI] = useState("");
  const [sexo, setSexo] = useState("");

  const [sangre, setSangre] = useState("");
  const [fecha, setFecha] = useState("");
  const [fumador, setFumador] = useState("");
  const [medicamento, setMedicamento] = useState("");
  const [embarazada, setEmbarazada] = useState("");
  const { name, email, photoUrl } = route.params;

  const [buttonEnabled, setButtonEnabled] = useState(true);
  const isIOS = Platform.OS === "ios" ? true : false;
  return (
    <View style={styles.container}>
      {!isIOS && (
        <View
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          style={styles.container}
        >
          <View style={styles.container}>
            <View style={styles.infoContainer}>
              <ScrollView style={styles.infoScroll}>
                <View style={styles.infoContainer2}>
                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Titulo formulario"
                    value={titulo}
                    onChangeText={(text) => setTitulo(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={(text) => setNombre(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Apellido"
                    value={apellido}
                    onChangeText={(text) => setApellido(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Edad"
                    value={edad}
                    onChangeText={(text) => setEdad(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="DPI"
                    value={dpi}
                    onChangeText={(text) => setDPI(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Sexo"
                    value={sexo}
                    onChangeText={(text) => setSexo(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Sangre"
                    value={sangre}
                    onChangeText={(text) => setSangre(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Fecha de nacimiento"
                    value={fecha}
                    onChangeText={(text) => setFecha(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Fumador"
                    value={fumador}
                    onChangeText={(text) => setFumador(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Consumes medicamento"
                    value={medicamento}
                    onChangeText={(text) => setMedicamento(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Embarazada"
                    value={embarazada}
                    onChangeText={(text) => setEmbarazada(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.buttonArea}>
            {/* <TouchableOpacity style={styles.shareButton} activeOpacity={0.7} onPress={() => {setButtonEnabled(!buttonEnabled); setTextoBoton((buttonEnabled)? "Editar":"Aceptar");}}>
                     <Text style={styles.shareButtonText}>{textoBoton}</Text>
                 </TouchableOpacity> */}

            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => {
                saveFormInfo(
                  navigation,
                  email,
                  titulo,
                  nombre,
                  apellido,
                  edad,
                  dpi,
                  fecha,
                  fumador,
                  medicamento,
                  embarazada
                );
              }}
            >
              <Text style={styles.shareButtonText}>Crear</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {isIOS && (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          style={styles.container}
        >
          <View style={styles.container}>
            <View style={styles.infoContainer}>
              <ScrollView style={styles.infoScroll}>
                <View style={styles.infoContainer2}>
                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Titulo formulario"
                    value={titulo}
                    onChangeText={(text) => setTitulo(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={(text) => setNombre(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Apellido"
                    value={apellido}
                    onChangeText={(text) => setApellido(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Edad"
                    value={edad}
                    onChangeText={(text) => setEdad(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="DPI"
                    value={dpi}
                    onChangeText={(text) => setDPI(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Sexo"
                    value={sexo}
                    onChangeText={(text) => setSexo(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Sangre"
                    value={sangre}
                    onChangeText={(text) => setSangre(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Fecha de nacimiento"
                    value={fecha}
                    onChangeText={(text) => setFecha(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Fumador"
                    value={fumador}
                    onChangeText={(text) => setFumador(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Consumes medicamento"
                    value={medicamento}
                    onChangeText={(text) => setMedicamento(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />

                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Embarazada"
                    value={embarazada}
                    onChangeText={(text) => setEmbarazada(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.buttonArea}>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => {
                saveFormInfo(
                  navigation,
                  email,
                  titulo,
                  nombre,
                  apellido,
                  edad,
                  dpi,
                  fecha,
                  fumador,
                  medicamento,
                  embarazada
                );
              }}
            >
              <Text style={styles.shareButtonText}>Crear</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f5f5f5",
    alignContent: "center",
    justifyContent: "flex-start",
    margin: 10,
  },
  shareButton: {
    marginTop: 20,
    backgroundColor: "#143590",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: 50,
    alignSelf: "center",
    borderRadius: 15,
    margin: 20,
  },
  shareButtonText: {
    color: "white",
  },
  header: {
    flex: 0.1,
    backgroundColor: "#29abe2",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  footer: {
    flex: 0.04,
    backgroundColor: "lightgrey",
  },
  formatexto: {
    flex: 1,
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#FFFF",
    textAlign: "center",
  },
  formatexto2: {
    flex: 0.1,
    fontSize: 12,
    color: "black",
    textAlign: "left",
    margin: 15,
  },
  formatexto3: {
    flex: 1,
    fontSize: 10,
    fontWeight: "bold",
    color: "grey",
    textAlign: "center",
    margin: 3,
  },
  infoContainer: {
    flex: 1,
    width: "100%",
  },
  infoContainer2: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor:'red',
    width: "100%",
  },
  infoScroll: {
    flex: 1,
    backgroundColor: "#fefefe",
  },
  input: {
    backgroundColor: "#fff",
    marginTop: 22,
    height: 40,
    borderBottomColor: "#143590",
    borderBottomWidth: 1,
    width: "80%",
    marginLeft: 35,
  },
  buttonArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
