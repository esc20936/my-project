import React, { useEffect, useState } from "react";
import HistoryDetail from "./HistoryDetail";
import firebase from "./firebase2.js";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function MedicalHistory({ navigation, route }) {
  const email = route.params.email;
  const [listaEventos, setListaEventos] = useState([]);

  useEffect(() => {
    firebase.db
      .collection(email + "historialMedico")
      .onSnapshot((querySnapshot) => {
        let lista = [];
        querySnapshot.docs.forEach((doc) => {
          const { titulo, fecha, descripcion } = doc.data();

          lista.push(
            <HistoryDetail
              title={titulo}
              date={fecha}
              description={descripcion}
            />
          );
        });
        setListaEventos(lista);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <ScrollView>{listaEventos}</ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("CreateEvent", { email });
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    width: "90%",
    height: "95%",
    backgroundColor: "#fff",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#143590",
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
