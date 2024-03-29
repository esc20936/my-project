import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const fondo = require("../assets/src/icons/fondo.png");
const FormView = (props) => {
  const navigation = useNavigation();
  const {
    name,
    lastName,
    age,
    document,
    gender,
    blood,
    birth,
    smoker,
    med,
    pregnant,
  } = props.data;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.formContainer}
      onPress={() => {
        navigation.navigate("FormInfo", {
          name,
          lastName,
          age,
          document,
          gender,
          blood,
          birth,
          smoker,
          med,
          pregnant,
        });
      }}
    >
      <ImageBackground
        source={fondo}
        resizeMode="cover"
        style={{ height: 190, width: 250 }}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={["#04879587", "#04879587"]}
          style={styles.button}
        >
          <Text style={styles.title}>{props.name}</Text>
          <Text style={styles.date}>{props.date}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    height: 190,
    width: 250,
    backgroundColor: "#143590",
    borderRadius: 15,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: 20,
    marginTop: 20,
    overflow: "hidden",
  },
  button: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    color: "#fff",
  },
  date: {
    fontSize: 17,
    color: "#fff",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    top: 50,
    right: 10,
  },
});

export default FormView;
