import React, { useState } from "react";
import {
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

function saveEvent(navigation, email, title, date, descripcion) {
  if (
    title !== "" &&
    email !== "" &&
    descripcion !== "" &&
    Date.parse(date) !== NaN
  ) {
    try {
      firebase.db.collection(email + "historialMedico").add({
        titulo: title,
        descripcion: descripcion,
        fecha: date,
        creationDate: new Date().toLocaleDateString(),
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

export default function CreateEvent({ navigation, route }) {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const email = route.params.email;

  const [buttonEnabled, setButtonEnabled] = useState(true);
  return (
    <View style={styles.container}>
      <View
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <ScrollView style={styles.infoScroll}>
              <View style={styles.infoContainer2}>
                <View style={styles.row}>
                  <Text>Titulo: </Text>
                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Titulo"
                    value={titulo}
                    onChangeText={(text) => setTitulo(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />
                </View>

                <View style={styles.row}>
                  <Text>Fecha: </Text>
                  <TextInput
                    style={[
                      styles.input,
                      { color: buttonEnabled ? "black" : "#c9c9c9" },
                    ]}
                    placeholder="Fecha evento"
                    value={fecha}
                    onChangeText={(text) => setFecha(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                  />
                </View>
                <View
                  style={[
                    styles.row,
                    {
                      justifyContent: "flex-start",
                      marginLeft: 32,
                      marginTop: 35,
                    },
                  ]}
                >
                  <Text>Descripcion: </Text>
                </View>
                <View
                  style={[
                    styles.row,
                    { justifyContent: "flex-start", marginLeft: 32 },
                  ]}
                >
                  <TextInput
                    style={[
                      styles.input,
                      {
                        color: buttonEnabled ? "black" : "#c9c9c9",
                        borderBottomWidth: 0,
                        height: 100,
                        width: "80%",
                      },
                    ]}
                    placeholder="Descripcion"
                    value={descripcion}
                    onChangeText={(text) => setDescripcion(text)}
                    autoCapitalize="none"
                    editable={buttonEnabled}
                    multiline
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => {
              saveEvent(navigation, email, titulo, fecha, descripcion);
            }}
          >
            <Text style={styles.shareButtonText}>Crear</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop: 0,
    height: 40,
    borderBottomColor: "#143590",
    borderBottomWidth: 1,
    width: "50%",
    marginLeft: 5,
    marginTop: 10,
  },
  buttonArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-evenly",
    marginTop: 12,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});
