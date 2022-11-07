import React from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function ShareForm({ navigation, route }) {
  const {
    name,
    lastName,
    age,
    document,
    birth,
    smoker,
    med,
    pregnant,
    titulo,
    fechaCreacion,
  } = route.params;
  const json = JSON.stringify({
    name: name,
    lastName: lastName,
    age: age,
    document: document,
    birth: birth,
    smoker: smoker,
    med: med,
    pregnant: pregnant,
    titulo: titulo,
    fechaCreacion: fechaCreacion,
  });
  var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789[]{}";
  var cifrado = "";
  for (let i = 0; i < json.length; i++) {
    if (alphabet.includes(json[i].toLocaleLowerCase())) {
      let pos = alphabet.indexOf(json[i].toLocaleLowerCase());
      cifrado +=
        alphabet[
          (((pos + 5) % alphabet.length) + alphabet.length) % alphabet.length
        ];
    } else cifrado += json[i].toLocaleLowerCase();
  }
  return (
    <View style={styles.container}>
      <QRCode
        value={cifrado}
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
    backgroundColor: "#143590",
    justifyContent: "center",
    alignItems: "center",
  },
});
